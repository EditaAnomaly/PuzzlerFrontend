import React  from 'react'
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export const AppGuard = (props) => {

    const { instance } = useMsal();
    const [isAuthorized, setIsAuthorized] = useState(false);

    const onLoad = async () => {
        const accounts = instance.getAllAccounts();

        if (accounts.length > 0) {
            instance.setActiveAccount(accounts[0]);
        }

        const currentAccount = instance.getActiveAccount()

        if (currentAccount && currentAccount.idTokenClaims['roles']) {
            let intersection = props.roles
                .filter(role => currentAccount.idTokenClaims['roles'].includes(role));

            if (intersection.length > 0) {
                setIsAuthorized(true);
            }
        }
    }

    const handleLogout = () => {
        instance.logoutRedirect().catch(
          console.error
        );
      }

    useEffect(() => {
        onLoad();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance]);

    return (
        <>
            {
                isAuthorized
                    ?
                        props.children
                    :
                    <div>
                        <p>
                            You are not authorized to view this page. Please contact your administrator.
                        </p>
                        <button onClick={handleLogout}>
                            logout
                        </button>
                        </div>

            }
        </>
    );
};
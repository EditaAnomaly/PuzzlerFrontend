import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { PublicClientApplication, InteractionType } from "@azure/msal-browser";
import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import { msalConfig, appRoles } from "./authConfig";
import { AppGuard } from './AppGuard';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
   <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        <AppGuard exact roles={[appRoles.Admin]}>
          <App/>
        </AppGuard>
      </MsalAuthenticationTemplate>
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

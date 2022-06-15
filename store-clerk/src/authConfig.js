export const msalConfig = {
    auth: {
      clientId: "17d09de5-6407-4d98-bffa-110c46ddb65d",
      authority: "https://login.microsoftonline.com/thepuzzler.onmicrosoft.com", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };

  export const appRoles = {
    Admin: "StoreClerk.Admin",
    Clerk: "StoreClerk.User"
  }
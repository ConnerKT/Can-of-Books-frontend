import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <React.StrictMode>
        <Auth0Provider
            domain="dev-swwedz5mied7hhq5.us.auth0.com"
            clientId="h3aEfwd4ekaEkf7n6PsR2mpQfJEVrkvt"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0Provider>
    //{/* </React.StrictMode> */}
);

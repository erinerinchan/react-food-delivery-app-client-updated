import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Auth0ProviderWithHistory({ children }) {
  const navigate = useNavigate()

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname)
  }

  const appURL = process.env.REACT_APP_URL || "http://localhost:8080"

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={appURL}
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

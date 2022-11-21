import { useAuth0 } from '@auth0/auth0-react'
import * as React from 'react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button onClick={() => logout()}>
                Uitloggen
            </button>
        )
    ) 
}

export default LogoutButton
'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { fetchAccountData } from '../chat/actions';

const UserContext = createContext(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetchAccountData();
            setUser(response);
        }

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}> {children}</ UserContext.Provider >
    );
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};
import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { statisticsService } from '../services/statisticsService';

export const favContext = createContext({});

export const FavContextProvider = ({ children }) => {

    useEffect(() => { fetchFavorites(4) }, [])

    const fetchFavorites = async (userId) => {
        try {
            let response = await statisticsService.getFavoriteCoursesByUser(userId);
            setFavorites(response.data);
        } catch (e) {
            console.error('Ops! Tivemos um erro ao carregar os favoritos: ' + e)
        }
    }

    const [favorites, setFavorites] = useState([]);

    return (
        <favContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </favContext.Provider>
    )
}
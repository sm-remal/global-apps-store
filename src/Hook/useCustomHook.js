import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCustomHook = () => {
    const [allAppsData, setAllAppsData] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        setLoading(true)
        axios("../mobileApps.json").then(data => setAllAppsData(data)).catch(err => setError(err)).finally(() => setLoading(false))
    }, [])
    return {allAppsData, loading, error};
};


export default useCustomHook;
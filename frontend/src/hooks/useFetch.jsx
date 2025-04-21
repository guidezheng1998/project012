import { useEffect, useState } from 'react';
import { fetchData } from '../api';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await fetchData(endpoint);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;    
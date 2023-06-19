import { useEffect, useState } from "react";
import SearchApi from "../api/SearchApi";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (query) => {
        try {
            const response = await SearchApi.get('/search', {
                params: {
                    q: query
                }
            });
            setResults(response.data);
        } catch (error) {
            setErrorMessage(error);
        }
        
    }

    // Definir uma query padrão
    // useEffect(() => {
    //     searchApi();
    // }, []);

    return [searchApi, results, errorMessage];
};
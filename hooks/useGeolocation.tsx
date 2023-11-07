import { useEffect, useState } from "react";

const useGeolocation = (query:string) => {
    const [locationsToSearch, setLocationsToSearch] = useState<IgeolocationResponse[]>([]);
    const [errorGeolocation, setErrorGeolocation] = useState(false);
    const [loadingGeolocation, setLoading] = useState(false);

    useEffect(() => {
        const fetchGeolocation = async () => {
            const resp = await fetch(`/api/geolocation?query=${query}`);
            const geolocation = await resp.json();
            setLocationsToSearch(geolocation.data);
            setLoading(false);
        }

        if(query) {
            try {
                setLoading(true);
                fetchGeolocation();
            } catch (error) {
                console.log(error);
                setErrorGeolocation(true);
            }
        }
    }, [query]);
    
    return {locationsToSearch, loadingGeolocation, errorGeolocation}
}

export default useGeolocation;
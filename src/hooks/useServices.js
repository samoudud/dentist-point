import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));
    }, [])

    return {
        services,
        isLoading
    };
}

export default useServices;
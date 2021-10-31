import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://infinite-river-40471.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return [services];
};
export default useServices;

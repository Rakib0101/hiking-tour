import { useEffect, useState } from "react";

const useOffers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch("https://infinite-river-40471.herokuapp.com/offers")
            .then((res) => res.json())
            .then((data) => setOffers(data));
    }, []);
    return [offers];
};
export default useOffers;

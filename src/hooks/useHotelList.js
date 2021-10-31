import { useEffect, useState } from "react";

const useHotelList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch("https://infinite-river-40471.herokuapp.com/hotels")
            .then((res) => res.json())
            .then((data) => setHotels(data));
    }, []);
    return [hotels];
};
export default useHotelList;

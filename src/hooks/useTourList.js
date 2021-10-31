import { useEffect, useState } from "react";

const useTourList = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://infinite-river-40471.herokuapp.com/tours")
            .then((res) => res.json())
            .then((data) => setTours(data));
    }, []);
    return [tours];
};
export default useTourList;

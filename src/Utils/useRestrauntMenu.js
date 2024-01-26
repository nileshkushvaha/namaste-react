import { useState, useEffect } from "react";
import { MENU_API } from "./Constants";
const useRestrauntMenu = (resId) => {

    const [restroInfo, setRestroInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    const fetchRestaurantInfo = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();
        console.log(json?.data);
        setRestroInfo(json?.data);
    }
    return restroInfo;
}

export default useRestrauntMenu;
import React from "react";
import { useState, useEffect } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {

    const { resId } = useParams();

    const [restroInfo, setRestroInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    const fetchRestaurantInfo = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6342693&lng=77.0845064&restaurantId=${resId}`);

        const json = await data.json();
        console.log(json?.data);
        setRestroInfo(json?.data);
    }

    if (restroInfo === null) {
        return <ShimmerSimpleGallery row={2} col={4} card imageHeight={300} caption />
    }

    const { name, costForTwoMessage, cuisines, avgRating, locality, city } = restroInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = restroInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    return (
        <div className="container">
            <h2>{name} :: {avgRating}</h2>
            <p>{cuisines.join(", ")} :: {costForTwoMessage}</p>
            <p>{locality}, {city}</p>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ))
                }
                <li></li>
            </ul>
        </div>
    )
}

export default RestaurantInfo;
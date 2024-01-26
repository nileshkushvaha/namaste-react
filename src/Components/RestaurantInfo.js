import React from "react";
import { useState, useEffect } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../Utils/useRestrauntMenu";

const RestaurantInfo = () => {

    const { resId } = useParams();

    const restroInfo = useRestrauntMenu(resId);

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
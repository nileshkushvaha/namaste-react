import React from 'react';
import { useState, useEffect } from 'react';
import RestaurantCard from '../Components/RestaurantCard';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import useOnlineStatus from '../Utils/useOnlineStatus';

const Home = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6342693&lng=77.0845064&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const jsonData = await data.json();
        const jsonObj = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(jsonObj);
        setRestaurantList(jsonObj);
        setFilterdRestaurant(jsonObj);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) 
    return (
    <h1>Looks like you are offline.</h1>
    );

    return (
        <>
            <div className="container">
                <div className="search-bar">
                    <input type='text' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={() => {
                        const filteredRestaurant = restaurantList.filter((res) => {
                            const lowerCaseSearchText = searchText.toLocaleLowerCase();
                            const lowerCaseName = res.info.name.toLocaleLowerCase();
                            const includesName = lowerCaseName.includes(lowerCaseSearchText);
                            const includesCuisines = res.info.cuisines.some(
                                (cuisine) => cuisine.toLocaleLowerCase().includes(lowerCaseSearchText)
                            );

                            return includesName || includesCuisines;
                        });

                        setFilterdRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
            </div>
            <div className="container">
                <div className="item-bar">
                    <div className="number">{filteredRestaurant.length} Restaurants</div>
                    <div className="filters">
                        <div className="relevance">Relevance</div>
                        <div className="delivery">Delivery Time</div>
                        <div className="rating">Rating</div>
                        <div className="cost-lh">Cost: Low to High</div>
                        <div className="cost-hl">Cost: High to Low</div>
                    </div>
                </div>

                {
                    filteredRestaurant.length === 0 ?
                        <ShimmerSimpleGallery row={2} col={4} card imageHeight={300} caption /> :
                        <div className="restaurant-list">
                            {
                                filteredRestaurant.map((restaurant) => (
                                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                                ))
                            }
                        </div>
                }
            </div>
        </>
    );
}

export default Home;
import React from 'react';
import DynamicImage from '../Components/DynamicImage';
import { ImageCDN } from '../Utils/Constants';
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        id,
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
        aggregatedDiscountInfoV3
    } = resData?.info;

    const statusStyle = {
        background: 'rgb(58, 60, 65)',
        color: 'rgb(255, 255, 255)',
        borderColor: 'rgb(30, 32, 35) transparent',
    };

    return (
        <div className="place">
            <Link to={"restaurant/"+ id} className="place-link">
                <div className="list-item">
                    <div className="item-content">
                        <div className="top-img">
                            <div width="100%" height="100%" className="sc-jXbUNg etHTCJ">
                                <DynamicImage
                                    className={`sc-dcJsrY kMtDjj`}
                                    alt={name}
                                    src={ImageCDN + cloudinaryImageId}
                                />
                            </div>
                        </div>
                        <div className="status" style={statusStyle}>
                            <div className="status-title">
                                {aggregatedDiscountInfoV3?.discountTag || 'Promoted'}
                            </div>
                        </div>
                        <div className="place-name-div">
                            <div className="name">{name}</div>
                            <div className="food-items"
                                title="cuisines">
                                {cuisines.join(", ")}</div>
                        </div>
                        <div className="info-div">
                            <div className="rating">
                                <span className="icon-star">
                                    <i className="fa-solid fa-star"></i>
                                </span>
                                <span>{avgRating}</span>
                            </div>
                            <div>•</div>
                            <div>{sla?.slaString} MINS</div>
                            <div>•</div>
                            <div className="price">{costForTwo}</div>
                        </div>
                        <div className="offer-div">
                            <span className="icon-offer-filled">
                                <i className="fa-solid fa-tag"></i>
                            </span>
                            <span className="offer-text">{aggregatedDiscountInfoV3?.header} | {aggregatedDiscountInfoV3?.subHeader}</span>
                        </div>
                    </div>
                    <div className="quick-view">
                        <span role="button" aria-label="Open" className="view-btn">QUICK VIEW</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RestaurantCard;
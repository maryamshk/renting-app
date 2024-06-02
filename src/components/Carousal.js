import React from 'react';

export default function Carousal() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ height: '88vh', width: '100vw' }}
    >
      <div className="carousel-inner" style={{ height: '100%' }}>
        <div className="carousel-item active" style={{ height: '100%' }}>
          <img
            src="https://d2tez01fe91909.cloudfront.net/wp-content/uploads/2023/04/cheapest-place-to-rent-a-car.webp"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Rental Car"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://mtstradesupplies.co.uk/wp-content/uploads/2022/11/Workbenches.jpg"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Equipment and Tools"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/camping-ideas-1561136670.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Camping Gear"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://katiecouric.com/wp-content/uploads/2022/09/best_clothing_rental_options-scaled.jpeg"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Clothing and Accessories"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://www.retailtouchpoints.com/wp-content/uploads/2023/07/Zales-Rocksbox.png"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Jewelry and Accessories"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://italianrealestatecompany.com/wp-content/uploads/2022/11/chianti-italy-1024x643.jpg"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Property and Land"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Household Items"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

























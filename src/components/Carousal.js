import React, { useEffect, useState } from 'react';

export default function Carousal({ search, setSearch }) {

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ objectFit: "contain !important" }}
    >
      <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />
          </div>
        </div>

        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e3d1464855ad14f1dc8460962e33791c3ad6e04e507440742e7dd5974cc7_640.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e3d1464855ad14f1dc8460962e33791c3ad6e04e507440742e7dd5974cc7_640.jpg"
            className="d-block w-100"
            style={{ filter: "brightness(30%)" }}
            alt="..."
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

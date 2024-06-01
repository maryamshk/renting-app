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
            src="https://picsum.photos/seed/picsum/536/354"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Placeholder"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://picsum.photos/seed/picsum/536/354"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Placeholder"
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src="https://picsum.photos/seed/picsum/536/354"
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt="Placeholder"
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





























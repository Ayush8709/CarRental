import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CarDetilsImage.css'

const CarDetails = () => {
    const [single, setSingle] = useState({});
    const { id } = useParams();

    const mySingleData = async () => {
        try {
            const myData = await axios.get(`https://car-rental-gold-gamma.vercel.app/api/v1/cardata/cardetail/${id}`);
            setSingle(myData.data);
        } catch (error) {
            console.error('Error fetching car data', error);
        }
    };

    useEffect(() => {
        mySingleData();
    }, [id]);

    return (
        <>
            <div className="container-fluid">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={single.image} className="d-block w-100 checkout_images" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={single.image} className="d-block w-100 checkout_images" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={single.image} className="d-block w-100 checkout_images" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next text-light" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <p className="mt-4 mb-4 text-center text-dark image_description_checkout" >
                            {single.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarDetails;

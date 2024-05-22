import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CarDetaileDes = () => {
    const [day, setDay] = useState('1');
    const [single, setSingle] = useState({});
    const { id } = useParams();

    const changeDay = (e) => {
        setDay(e.target.value);
    };

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
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <div className="card-body">
                    <h5 className="card-title text-center mb-4" style={{ fontSize: '2.5rem', color: 'red' }}>{single.name}</h5>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Price:</p>
                            <p className="text-muted">{single.price}/day</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Enter Car Day:</p>
                            <input type="number" className="form-control" value={day} onChange={changeDay} min="1" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Seats:</p>
                            <p className="text-muted">{single.sheet}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Luggage:</p>
                            <p className="text-muted">{single.lagguage}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Model:</p>
                            <p className="text-muted">{single.model}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Fuel Type:</p>
                            <p className="text-muted">{single.fueltype}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Category:</p>
                            <p className="text-muted">{single.brand}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Rating:</p>
                            <p className="text-muted">{single.rating}/5</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="mb-1" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Car Type:</p>
                            <p className="text-muted">{single.cartype}</p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Total:</h2>
                            <h2 style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold' }}>
                                {single.price * day || single.price}
                            </h2>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/carbookingform" className="btn btn-primary btn-lg">
                            Proceed {'>>'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetaileDes;

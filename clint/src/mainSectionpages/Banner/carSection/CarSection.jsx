import React from 'react';
import './CarSection.css';
import Scorpio from '../../../../public/images/Scorpio1.jpeg';

const CarSection = () => {
    return (
        <div className="container-fluid carsectionparent">
            <div className="container carsectionChild">
                <div className="row">
                    <div className="col text-center">
                        <p className='carsectionpara'>WHAT WE OFFER</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h1 className='carsectionheading'>Our Top Company Car</h1>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card " style={{border:"none"}}>
                            <img className="card-img-top" src="https://imgs.search.brave.com/Hv5orV2kZHkJTTQjQ0BOXr7byYPkaEVUtRBsLxQRZOs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXN0/Y2FyYnJhbmRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMS9sb2dvLU1h/aGluZHJhLTYwMHgz/NDEuanBn" alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card"  style={{border:"none"}}>
                            <img className="card-img-top" src="https://imgs.search.brave.com/nz0GfvEnT0isOC64gQGgREmPzTnkgdIu2P7uZtJDUxA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXN0/Y2FyYnJhbmRzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMC9Mb2dvLVRh/dGEtTW90b3JzLTYw/MHgzNjcuanBn" alt="Card cap" />
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card"  style={{border:"none"}}>
                            <img className="card-img-top" src="https://imgs.search.brave.com/M5qJKQrLPmDhQIyWrAd4dfRATlQWLc9DLOVfNdQGxmQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyLWJyYW5kLW5h/bWVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wMy9T/dXp1a2ktbG9nby0z/LTUwMHgzMjUuanBn" alt="Card cap" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarSection;

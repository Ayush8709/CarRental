import React from 'react'
import CarDetiilsImage from '../CarDetails/CarDetiilsImage'
const ChekOut = () => {
    return (
        <>
            <div className="container-fluid border border-primary">
                <div className="row">
                    <div className="col-sm-8  ">
                       <CarDetiilsImage />
                    </div>
                    <div className="col-sm-4">Details</div>
                </div>
            </div>

        </>
    )
}

export default ChekOut

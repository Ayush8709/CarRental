import React from 'react'
import CarDetiilsImage from '../CarDetails/CarDetiilsImage'
import CarDetaileDes from '../CarDetails/CarDetaileDes'
const ChekOut = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row" style={{display:'flex',flexWrap:"wrap"}}>
                    <div className="col-sm-8  ">
                        <CarDetiilsImage />
                    </div>
                    <div className="col-sm-4 ">
                        <CarDetaileDes />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChekOut

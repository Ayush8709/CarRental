import React from 'react'

const CarBookingForm = () => {


  return (
    <>
      <div className="container-fluid bg-light">
        <div className="container pt-5 pb-5 bg-light">
          <h1 className="text-center mb-5">User Details</h1>
          <form className="w-full max-w-lg">
            <div className="row">
              <div className="col-md-6 mb-4">
                <label className="form-label text-uppercase  " htmlFor="grid-first-name" style={{ fontSize: "20px", fontWeight: 'bold' }}>
                  Full Name
                </label>
                <input className="form-control mb-3" id="grid-first-name" type="text" placeholder="Abc" style={{ borderRadius: '20px' }} required />
              </div>
              <div className="col-md-6">
                <label className="form-label text-uppercase " style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-last-name">
                  Phone
                </label>
                <input className="form-control" id="grid-last-name" type="text" placeholder="Phone" style={{ borderRadius: '20px' }} required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <label className="form-label text-uppercase " style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-password">
                  Email
                </label>
                <input className="form-control mb-3" id="grid-password" type="email" placeholder="email" style={{ borderRadius: '20px' }} required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <label className="form-label text-uppercase " style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-city">
                  City
                </label>
                <input className="form-control" id="grid-city" type="text" placeholder="Ranchi" style={{ borderRadius: '20px' }} required />
              </div>
              <div className="col-md-4 mb-4 disabled">
                <label className="form-label text-uppercase " style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-state">
                  State
                </label>
                <input className="form-control disabled" id="grid-zip" type="text" value={'India'} placeholder="india" style={{ borderRadius: '20px' }} required />
              </div>
              <div className="col-md-4">
                <label className="form-label text-uppercase " style={{ fontSize: "20px", fontWeight: 'bold' }} htmlFor="grid-zip">
                  Zip
                </label>
                <input className="form-control" id="grid-zip" type="text" placeholder="822124" style={{ borderRadius: '20px' }} required />


              </div>
            </div>
          </form>

          <div className='d-flex justify-content-between mt-4'>
            <h1>Total</h1>
            <button className='btn btn-lg btn-outline-primary'>Save & Pay Now {'>>'}</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default CarBookingForm

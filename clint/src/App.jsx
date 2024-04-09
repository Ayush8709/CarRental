import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/main/Navbar/Navbar'
import Footer from './components/main/Footer/Footer'
import Main from './components/main/MainSection/main'
import NotFoundPage from './components/main/NotFoundpage/NotFound'
import About from './components/main/AboutSection/About'
import ContactUs from './ContactusPges/ContactUs'
import AllCars from './CarCollactions/AllCars/AllCars'
import Mahindra from './CarCollactions/Mahindra/Mahindra'
import Tata from './CarCollactions/Tata/Tata'
import CarDetiils from './CarCollactions/CarDetails/CarDetiils'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/cars' element={<AllCars />} />
          <Route path='/mahindra' element={<Mahindra />} />
          <Route path='/tata' element={<Tata />} />
          <Route path='/checkout/:id' element={<CarDetiils />} />


         //This is default Routes
          <Route path="*" element={<NotFoundPage />} />



        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import NotFoundPage from './components/main/NotFound'

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/navbar' element={<Navbar/>} exact />
//         <Route path='/' element={<Main />} exact />
//         {/* 404 - Page Not Found */}
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


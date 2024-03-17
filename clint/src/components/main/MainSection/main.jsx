import React from 'react'

import Banner from '../../../mainSectionpages/Banner/Banner'
import OurMisson from '../../../mainSectionpages/OurMisson/OurMisson'
import FourStep from '../../../mainSectionpages/FourStep/FourStep'
import Carquality from '../../../mainSectionpages/CarQuality/Carquality'
import CarSection from '../../../mainSectionpages/Banner/carSection/CarSection'
import ContactForm from '../../../mainSectionpages/ContactForm/ContactForm'
import RentalService from '../../../mainSectionpages/RentalService/RentalService'
import Testominal from '../../../mainSectionpages/Testominal/Testominal'

const main = () => {
  return (
   <>
   <Banner/>
   <OurMisson />
   <FourStep/>
   <Carquality/>
   <CarSection/>
   <ContactForm/>
   <RentalService />
   <Testominal/>
   </>
  )
}

export default main

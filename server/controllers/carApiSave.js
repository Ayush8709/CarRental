import data from '../data.js'
import carRentalMainApi from '../models/carApi.js';


//Save all Local data in Monogdb database and send to react js;
const carApiSave =async (req, res)=>{
    try {
        await carRentalMainApi.insertMany(data);
        res.status(201).json({ message: 'Data saved successfully' });
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

export  {carApiSave};
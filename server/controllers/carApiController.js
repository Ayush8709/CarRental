//CarApi Data
import data from '../data.js'
import carRentalMainApi from '../models/carApi.js';

//Send all car Data with the help of Api
const carDataApi = async (req, res) => {
    try {
        // await res.json(data)// This line send data from local api to react js

        const myData = await carRentalMainApi.find();
        await res.json(myData);

    } catch (error) {
        console.log("Car Api Not Worinkg");
        res.status(500).send({
            success: false,
            message: 'API Data Not Found',
        })
    }
}

//##################################################################################################################################

// Send Car Data With Particular id;

const carDataWithId = async (req, res) => {
    try {
        //if Data Fatch from mongodb database with help to mongoose and send to react js  then this synetx work

        const car = await carRentalMainApi.findOne({ id: req.params.id });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.json(car);

        //If Your data fatch from local json api then this syntex work
        // try {
        //     const { id } = req.params;
        //     const findDAta = carRentalMainApi.find(item => item.id === parseInt(id))
        //     if (findDAta) {
        //         res.json(findDAta)
        //     }
        //     else {
        //             return res.status(500).json({
        //                 message:"Car Detat Detail not found"
        //             })
        //     }
    } catch (error) {
        console.log("CarDataDetails not Found");
        res.status(500).send({
            success: false,
            message: ' CarDataDetils  Data Not Found',
        })
    }
}




//####################################################################################################################################

//Send only mahindra Car Data with the help of Api

const mahindraCarApi = async (req, res) => {
    try {

        //This Methood send Only Local Car Api data    
        // Send only Mahindra Car Data

        // const mahindraCar = data.filter(carBrand => {
        //     return carBrand.category.brand === "Mahindra"
        // })
        // await res.json(mahindraCar)

        //This method send data on Mongodb and send react js
        const filteredCars = await carRentalMainApi.find({ 'category.brand': 'Mahindra' });
        res.json(filteredCars);



    } catch (error) {
        console.log("Mahindra Car Api Not Worinkg");
        res.status(500).send({
            success: false,
            message: ' Mahindra Car API Data Not Found',
        })
    }
}




// ###################################################################################################################################

//Send Only MarutiSuziki Car Data

const marutiSuzikiApi = async (req, res) => {
    try {
        //send only maruti car details
        //This method work only when you send data in local Api
        // const myMuruti = data.filter(myMarutiSuziki => {
        //     return myMarutiSuziki.category.brand === "MarutiSuzuki"
        // })
        // await res.json(myMuruti)


        //This method work only when you send data in mongodb to react js
        const filteredCars = await carRentalMainApi.find({ 'category.brand': 'MarutiSuzuki' });
        res.json(filteredCars);

    } catch (error) {
        console.log("MarutiSuziki Car Api Not Worinkg");
        res.status(500).send({
            success: false,
            message: ' MarutiSuziki Car API Data Not Found',
        })
    }
}

//####################################################################################################################################

// Send only Tata Car Data With the help on Api

const tataCarApi = async (req, res) => {
    //send only tata car data

    //This methos use only when you send data With local api   
    // const myTataCar = data.filter(tataBrand => {
    //     return tataBrand.category.brand === "Tata"
    // })
    // await res.send(myTataCar)


    //This method send data on Mongodb and send react js
    const filteredCars = await carRentalMainApi.find({ 'category.brand': 'Tata' });
    res.json(filteredCars);
}




export { carDataApi, carDataWithId, mahindraCarApi, marutiSuzikiApi, tataCarApi }
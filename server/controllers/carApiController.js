//CarApi Data
import data from '../data.js'

//Send all car Data with the help of Api
const carDataApi = async (req, res) => {
    try {
        await res.json(data);

    } catch (error) {
        console.log("Car Api Not Worinkg");
        res.status(500).send({
            success: false,
            message: 'API Data Not Found',
        })
    }
}

//###################################################################################

//Send only mahindra Car Data with the help of Api

const mahindraCarApi = async (req, res) => {
    try {
        // Send only Mahindra Car Data

        const mahindraCar = data.filter(carBrand => {
            return carBrand.category.brand === "Mahindra"
        })

        await res.json(mahindraCar)

    } catch (error) {
        console.log("Mahindra Car Api Not Worinkg");
        res.status(500).send({
            success: false,
            message: ' Mahindra Car API Data Not Found',
        })
    }
}

// #######################################################################################

//Send Only MarutiSuziki Car Data

const marutiSuzikiApi = async (req, res) => {
    try {
        //send only maruti car details

        const myMuruti = data.filter(myMarutiSuziki => {
            return myMarutiSuziki.category.brand === "MarutiSuzuki"
        })
        await res.json(myMuruti)

    } catch (error) {
        console.log("MarutiSuziki Car Api Not Worinkg");
        res.status(500).send({
            success: false,
            message: ' MarutiSuziki Car API Data Not Found',
        })
    }
}

//####################################################################################

// Send only Tata Car Data With the help on Api

const tataCarApi = async (req, res) => {
    //send only tata car data

    const myTataCar = data.filter(tataBrand => {
        return tataBrand.category.brand === "Tata"
    })

    await res.send(myTataCar)
}




export { carDataApi, mahindraCarApi, marutiSuzikiApi , tataCarApi }
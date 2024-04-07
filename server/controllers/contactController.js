import ContactSchema from "../models/contactUsModel.js";

//Save Contact us page data 
const myCarRentalContactPage = async (req, res) => {
    try {
        const { fullName, addresh, city, age, pincode, phoneNumber, email, issue } = req.body;
        console.log(fullName, addresh, city, age, pincode, phoneNumber, email, issue);

        if (!fullName || !addresh || !city || !age || !pincode || !phoneNumber || !email || !issue) {
            return res.status(500).send({
                success: false,
                message: "Please provide valid Contact  filed "
            })
        }

        const contactUs = await ContactSchema.create({
            fullName,
            addresh,
            city,
            age,
            pincode,
            phoneNumber,
            email,
            issue,
        })

        res.status(201).send({
            success: true,
            message: "Contact Save SuccessFully",
            contactUs
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error to Registration API',
        })
    }
}


export { myCarRentalContactPage }
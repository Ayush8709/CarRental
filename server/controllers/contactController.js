import ContactSchema from "../models/contactUsModel.js";

//Save Contact us page data 
const myCarRentalContactPage = async (req, res) => {
    try {
        const { name,  phone, email, message } = req.body;
        console.log(name, phone, email, message);

        if (!name ||  !phone || !email || !message) {
            return res.status(500).send({
                success: false,
                message: "Please provide valid Contact  filed "
            })
        }

        const contactUs = await ContactSchema.create({
            name,          
            phone,
            email,
            message,
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
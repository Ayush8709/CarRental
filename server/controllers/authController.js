import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

//jwt create jwt token
const JWT_KEY = "ayushsingh"

//Register auth
const registerController = async (req, res) => {
    try {
        const { email, username, password } = req.body
        console.log(email, username, password )

        if(!email || !username || !password ){
            return res.status(500).json({ message: 'Please Enter Valid Form Data' })
        }

        // if(password ===conformpassword){
        //    console.log('yes passwor equal hai')
        // }

        const chekUser =await User.findOne({email});

        if(chekUser){
            return res.status(500).json({ message: 'User Already Exist' })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, username, password: hashedPassword })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' , newUser })
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' })
    }
};

//##########################################################################################################


//LOGIN 
const loginController = async (req, res) => {
    try {
        //get email and password to database
        const { email, password } = req.body

        //validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please provide valid email and password",
            })
        }


        //Check User 

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not Match"
            })
        }
        //password match with compare  function
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Invalid Credentials"
            })
        }

        //jwt token create
        const token = JWT.sign({ id: user._id }, JWT_KEY, {
            expiresIn: "7d",
        })
        res.status(200).send({
            success: true,
            message: "Login SuccesFully",
            token,
            // user,

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            error
        })
    }
}

export { registerController, loginController };


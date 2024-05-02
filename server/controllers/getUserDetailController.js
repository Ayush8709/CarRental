import authUser from "../models/userModel.js";


//get User
const userGetData = async (req, res)=>{
    try {
        const user = await authUser.findById({_id: req.body.id})
        if(!user){
            console.log('user Not found')
        }
        res.json(user)
    } catch (error) {
        console.log("User Get Api Not Working");
        return res.status(500).send({
            success:false,
            message:'User GEt Api Not Working'
        })
    }
}


// update User

// const updateUser = async (req, res)=>{
//     try {
//         const user = await authUser.findById({_id: req.body.id})

//         //update 

//         const {name, email} = req.body;
//         if(name) user.name = name
//         if(email) user.email = email

//         //save
//         await user.save()

//         res.status(200).send({
//             sucess:true,
//             message:"User Update SuccessFull",
//             user
//         })
//     } catch (error) {
//         return res.status(500).send({
//             sucess:false,
//             message:"Updat Api Not Working"
//         })
//     }
// }

// Delete Mehod

// const deleteUser = async (req, res)=>{
//     try {
//         await authUser.findByIdAndDelete(req.params.id)

//         res.status(200).send({
//             success:true,
//             message:"Your accoun deleted succesfully"
//         })
//     } catch (error) {
//         res.status(500).send({
//             success:true,
//             message:"Your  Delete Acount API Not Working"
//         })
//     }
// }

export {userGetData}
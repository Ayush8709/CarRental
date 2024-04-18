import userDetailsModel from '../models/userDetailsModel.js'

const useDetilsData =async  (req, res)=>{
    try {
        const {name, phone, email,city, zip} = req.body
        console.log(name, phone, email,city, zip );

        if(!name || !phone || !email || !city  || !zip ) {
            return res.json({message:"please enter valid userDetail"})
        }

        const chek = await userDetailsModel.findOne({email});
        if(chek){
            return res.json({
                message:"user already conatact with us"
            })
        }

        const userDataSave = new userDetailsModel(
            {
                name,
                phone,
                email,
                city, 
                zip,
              
            }
        )
        await userDataSave.save()
        res.json({
            message:"userDetailsData save Succesfully",
            userDataSave
        })

    } catch (error) {
        return res.json({
            message:"UserDetails Data Not Run"
        })
    }
}


export {useDetilsData}
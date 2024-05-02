import JWT from 'jsonwebtoken'

export default async (req, res,next)=>{
        try {
            const token = req.headers["authorization"].split(" ")[1];
            JWT.verify(token, process.env.JWT_SECRET, (err, decode)=>{
                // console.log(token,"ye token hai")
                if(err){
                    return res.status(404).send({
                        success:false,
                        message:'UN_Authorized User'
                    })
                }
                else{
                    req.body.id = decode.id;
                    next()
                }
            })
        } catch (error) {
            return res.status(500).send({
                success:false,
                message:"PLease Provide auth token"
            })
        }
}
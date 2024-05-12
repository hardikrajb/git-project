const {Login} = require('./schema');

module.exports.insertbook = async(req,res)=>{
    const bk = new Login({
    email: req.body.email,
    password: req.body.password,
    })
    const login = await Login.findOne({email:String(req.body.email)});
    if(login)
         return res.send({msg:"email exist in db"});
    const savedbks = await bk.save();
    res.send(savedbks);
}
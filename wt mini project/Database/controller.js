const {Dgh} = require('./schema');

module.exports.insertcust = async(req,res)=>{
    const bk = new Dgh({
        Name: String(req.body.Name),
        email: String(req.body.email),
        item: String(req.body.item),
    })
    const dgh = await Dgh.findOne({Name: String(req.body.Name)});
    if(dgh)
         return res.send({msg:"customer exist in db"});
    const savedbks = await bk.save();
    res.send(savedbks);
}

module.exports.getallcust = async (req,res) => {
    const books = await Dgh.find({});
    if(books.length != 0)
        res.send(books)
    else 
        res.send({msg: "no customers found!"})
}

module.exports.getcust = async (req,res) => {
    console.log("recieved");
    const book = await Dgh.findOne({Name: String(req.body.Name)});
    if(book)
        res.send(book)
    else
        res.send({msg:"book not found!"});
}

module.exports.updatecust = async(req,res)=>{
    const book = await Dgh.findOneAndUpdate({Name: String(req.body.Name)},item: String(req.body.item));
        if(book)
          res.send("updated successfully");
        else
         res.send("not found");
} 

module.exports.deletecust = async(req,res)=>{
    const book = await Dgh.findOneAndDelete({Name: String(req.body.Name)});
        if(book)
          res.send("deleted");
        else
         res.send("not found");
}
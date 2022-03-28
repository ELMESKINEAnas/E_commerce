import ShippingCompany from "../models/shippingcompany";

const getShippingCompany = async (req, res) => {

    const { id } = req.params
    try {
        const doc = await ShippingCompany.find({_id : id});
        return res.status(200).json({
            status : true,
            message : doc
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
    
}

const getAllShippingCompany = async (req, res) => {

    try {
        const docs = await ShippingCompany.find();
        return res.status(200).json({
            status : true,
            message : docs
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
    
} 

const addShippingCompany = async (req, res) => {

    try{
        const { name } = req.body  
        const shippingcompany = await ShippingCompany.create({ name });
        return res.status(201).json({
            status : true,
            message : shippingcompany
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
}

const deleteShippingCompany = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        await ShippingCompany.findOneAndRemove({ _id: id })
        res.status(200).json({
           status: true,
           message: "deleted successfully"
        })
     } catch (e) {
        res.status(400).json({
           status: false,
           message: e.message
        })
     }
}

const updateShippingCompany = async (req, res) => {

    try {
        const { id } = req.params;
        const { name } = req.body;
        await ShippingCompany.findOneAndUpdate({id}, {name});

        res.status(200).json({
           status: true,
           message: "updated successfully"
        })
     } catch (e) {
        res.status(400).json({
           status: false,
           message: e.message
        })
     }
}



export { getShippingCompany ,getAllShippingCompany, addShippingCompany, deleteShippingCompany, updateShippingCompany}

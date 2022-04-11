import Brand from "../models/brand";

const getBrand = async (req, res) => {

    const { id } = req.params
    try {
        const doc = await Brand.find({_id : id});
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

const getAllBrand = async (req, res) => {

    try {
        const docs = await Brand.find();
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

const addBrand = async (req, res) => {

    try{
        const { name } = req.body  
        const brand = await Brand.create({ name });
        return res.status(201).json({
            status : true,
            message : brand
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
}

const deleteBrand = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        await Brand.findOneAndRemove({ _id: id })
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

const updateBrand = async (req, res) => {

    try {
        const { id } = req.params;
        const { name } = req.body;
        await Brand.findOneAndUpdate({id}, {name});

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



export { getBrand ,getAllBrand, addBrand, deleteBrand, updateBrand}

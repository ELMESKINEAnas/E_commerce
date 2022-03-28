import Product from "../models/product";

const getProduct = async (req, res) => {

    const { id } = req.params
    try {
        const doc = await Product.find({_id : id});
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

const getAllProduct = async (req, res) => {

    try {
        const docs = await Product.find();
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

const addProduct = async (req, res) => {

    try{
        const { name } = req.body  
        const category = await Product.create({ name });
        return res.status(201).json({
            status : true,
            message : category
        })
    }catch(err){
        return res.status(400).json({
            status : false,
            message: err.message
        })
    }
}

const deleteProduct = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        await Product.findOneAndRemove({ _id: id })
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

const updateProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const { name } = req.body;
        await Product.findOneAndUpdate({id}, {name});

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



export { getProduct ,getAllProduct, addProduct, deleteProduct, updateProduct}

import Category from "../models/category";

const getCategory = async (req, res) => {

    const { id } = req.params
    try {
        const doc = await Category.find({_id : id});
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

const getAllCategory = async (req, res) => {

    try {
        const docs = await Category.find();
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

const addCategory = async (req, res) => {

    try{
        const { name } = req.body  
        const category = await Category.create({ name });
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

const deleteCategory = async (req, res) => {

    try {
        const {
           id,
        } = req.params
  
        await Category.findOneAndRemove({ _id: id })
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

const updateCategory = async (req, res) => {

    try {
        const { id } = req.params;
        const { name } = req.body;
        await Category.findOneAndUpdate({id}, {name});

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



export { getCategory ,getAllCategory, addCategory, deleteCategory, updateCategory}

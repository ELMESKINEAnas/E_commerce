import Product from "../models/product";
import Category from "../models/category";

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
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1).populate("category").populate("brand").populate("store_id");
      } else if (qCategory) {
        products = await Product.find({
          category: {
             $in : await Category.findOne({ name: qCategory }).then(category => {
                return category._id;
            })
          },
        }).populate("category").populate("brand").populate("store_id");
      } else {
        products = await Product.find().populate("category").populate("brand").populate("store_id");   
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
    
} 

const addProduct = async (req, res) => {

    const newProduct = new Product(req.body);

    try {
      const product = await newProduct.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
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

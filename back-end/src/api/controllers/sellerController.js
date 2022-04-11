import User from "../models/user.js"
import Seller from "../models/seller"
import Store from "../models/store"
const logger = require('../../config/winston');
const EmailSend = require('../helpers/email')


const createSeller = (req, res) => {

    const {
        firstName,
        lastName,
        email,
        document,
        password,
        Address,
        nameStore,
        phone,
    } = req.body;

    const UserData = {
        firstName,
        lastName,
        Address,
        phone,
        email,
        password,
        role: "SELLER",

    }

    const user = new User(UserData);
    user.save((err, User) => {
        if (err) {
            // logger.error(err);
            return res.status(400).send(err)

        }
        const SellerData = {
            document: document,
            nameStore:nameStore,
            user: user._id,
            _id: user._id, 

        }
        const seller = new Seller(SellerData);
        seller.save(async (err, seller) => {

            if (err) {
                const user = await User.findById({
                    _id: user._id
                })
                user.remove()
                // logger.error(err);
                return res.status(400).send(err)
            }
            user.hashed_password=undefined
            user.salt=undefined
            
            // logger.info(`Costumer user:${req.body.username} created!`);
            return res.json({
                user,
                seller
            })
        })

    })
}
const updateSeller = async (req, res) => {
    console.log(req.body)
    try {
       if (req.body.username) {
          await Seller.findOneAndUpdate({ _id: req.params.id }, req.body);
       }
       if (req.body.email || req.body.password) {
          await User.findOneAndUpdate({ _id: req.params.id }, req.body.email)
       }
       logger.info(`Seller user:${req.body.username} Updated!`);
       res.status(200).json({
          status: true,
          message: "Updated successfuly"
       })
    } catch (err) {
        logger.error(err);
       res.status(400).json({
          status: false,
          message: err
       })
    }
 }
const removeSeller = async (req, res) => {

    const {
        id,
    } = req.params
    const seller = await Seller.findById({
        _id: id
    })
    seller.remove((err,result)=>{
        if(err){
            logger.error(err);
        }
        logger.info(`Seller user:${seller.username} deleted!`);
        res.status(200).json({
            status: true,
            message: "Deleted successfully"
         })
    })
    
}
const searchSeller = async (req, res) => {
    let sortBy=req.query.sortBy ? req.query.sortBy : '_id'
    let order = req.query.order ? req.query.order : 'asc'
    let limit =req.query.limit ? parseInt(req.query.limit):100
    let skip = parseInt(req.body.skip)
    let findArgs = {}
for(let key in req.body.filters){
    if(req.body.filters[key].length > 0){
        
    }
}

    const {
        id,
    } = req.params
    const seller = await Seller.findById({
        _id: id
    })
    seller.remove((err,result)=>{
        if(err){
            logger.error(err);
        }
        logger.info(`Seller user:${seller.username} deleted!`);
        res.status(200).json({
            status: true,
            message: "Deleted successfully"
         })
    })
    
}

const getAllSellers = async (req, res) => {
    try {
        const sellers = await Seller.find().populate("user")
        res.status(200).json({
            status: true,
            sellers

        })
    } catch (err) {
        res.status(400).json({
            status: false,
            msg: err
        })
    }
}

const getSeller = async (req, res) => {
    const id = req.params.id
    try {
        const seller = await Seller.findById({
            _id: id
        }).populate("user")
        res.status(200).json({
            status: true,
            seller
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            msg: err
        })
    }
}
const getSellerStatus = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await Seller.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
}

const confirmAccount = async (req, res) => {

    try {
    const { id } = req.params;
    let doc = await Seller.findOneAndUpdate({id}, {"isVerified":true},{new: true });
    if(!doc){
        return res.status(400).json({
            status: false,
            msg: "Invalid id"
        })
    }
    const store = new Store({
        name: doc.nameStore,
        seller: doc._id,
        _id: doc._id,
    })
    await store.save()

    res.status(200).json({
        status: true,
        message: "Your Account is now Verified"
    })

    } catch (e) {
    res.status(400).json({
        status: false,
        message: e.message
        })
    }
}



export { createSeller, removeSeller, searchSeller, updateSeller, getAllSellers, getSeller,getSellerStatus,confirmAccount }
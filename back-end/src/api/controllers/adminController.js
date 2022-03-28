import User from "../models/user.js"
import Admin from "../models/admin"
const logger = require('../../config/winston');
const EmailSend = require('../helpers/email')


const createAdmin = (req, res) => {

    const {
        username,
        email,
        password,
    } = req.body;

    const UserData = {
        email,
        password,
        role: "ADMIN",

    }

    const user = new User(UserData);
    user.save((err, User) => {
        if (err) {
            logger.error(err);
            return res.status(400).send(err)

        }
        const AdminData = {
            username: username,
            user: user._id,
            _id: user._id

        }
        const admin = new Admin(AdminData);
        admin.save(async (err, Admin) => {
            if (err) {
                const user = await User.findById({
                    _id: user._id
                })
                user.remove()
                logger.error(err);
                return res.status(400).send(err)
            }
            user.hashed_password=undefined
            user.salt=undefined
            let subj = "Your Login Info";
            let msg = ` email : ${email}
                password : ${password}`;
                
            EmailSend.mail(email, subj, msg)
            logger.info(`Admin user:${req.body.username} created!`);
            return res.json({
                user,
                admin
            })
        })

    })
}
const updateAdmin = async (req, res) => {
    console.log(req.body)
    try {
       if (req.body.username) {
          await Admin.findOneAndUpdate({ _id: req.params.id }, req.body);
       }
       if (req.body.email || req.body.password) {
          await User.findOneAndUpdate({ _id: req.params.id }, req.body.email)
       }
       logger.info(`Admin user:${req.body.username} Updated!`);
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
const removeAdmin = async (req, res) => {

    const {
        id,
    } = req.params
    const admin = await Admin.findById({
        _id: id
    })
    admin.remove((err,result)=>{
        if(err){
            logger.error(err);
        }
        logger.info(`Admin user:${admin.username} deleted!`);
        res.status(200).json({
            status: true,
            message: "Deleted successfully"
         })
    })
    
}
const searchAdmin = async (req, res) => {
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
    const admin = await Admin.findById({
        _id: id
    })
    admin.remove((err,result)=>{
        if(err){
            logger.error(err);
        }
        logger.info(`Admin user:${admin.username} deleted!`);
        res.status(200).json({
            status: true,
            message: "Deleted successfully"
         })
    })
    
}

const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().populate("user")
        res.status(200).json({
            status: true,
            admins

        })
    } catch (err) {
        res.status(400).json({
            status: false,
            msg: err
        })
    }
}

const getAdmin = async (req, res) => {
    const id = req.params.id
    try {
        const admin = await Admin.findById({
            _id: id
        }).populate("user")
        res.status(200).json({
            status: true,
            admin
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            msg: err
        })
    }
}


export { createAdmin, removeAdmin, searchAdmin, updateAdmin, getAllAdmins, getAdmin }
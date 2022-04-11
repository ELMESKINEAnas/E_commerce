import Admin from "../models/admin"
const logger = require('../../config/winston');
const EmailSend = require('../helpers/email');


const createAdmin = (req, res) => {
    const {
        username,
        email,
        password,
    } = req.body

        const admin = new Admin({username,email,password});
        admin.save(async (err, admin) => {
            if (err) {
                logger.error(err);
                return res.status(400).send(err)
            }
            admin.hashed_password=undefined
            admin.salt=undefined
            let subj = "Your Login Info";
            let msg = ` email : ${admin.email}
                password : ${admin.password}`;
                
            EmailSend.mail(admin.email, subj, msg)
            logger.info(`Admin user:${admin.username} created!`);
            return res.json({
                admin,
                msg: "Admin Created Successfully" 
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
        const admins = await Admin.find()
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
        })
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
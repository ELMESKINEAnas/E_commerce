import SuperAdmin from "../models/superadmin"
const logger = require('../../config/winston');
const EmailSend = require('../helpers/email');


const createSuperAdmin = (req, res) => {
    const {
        username,
        email,
        password,
    } = req.body

        const superadmin = new SuperAdmin({username,email,password});
        superadmin.save(async (err, superadmin) => {
            if (err) {
                logger.error(err);
                return res.status(400).send(err)
            }
            superadmin.hashed_password=undefined
            superadmin.salt=undefined
            let subj = "Your Login Info";
            let msg = ` email : ${superadmin.email}
                password : ${superadmin.password}`;
                
            EmailSend.mail(superadmin.email, subj, msg)
            logger.info(`Super Admin user:${superadmin.username} created!`);
            return res.json({
                admin,
                msg: "Super Admin Created Successfully" 
            })
        })
}
const updateSuperAdmin = async (req, res) => {
    console.log(req.body)
    try {
       if (req.body.username) {
          await SuperAdmin.findOneAndUpdate({ _id: req.params.id }, req.body);
       }
       if (req.body.email || req.body.password) {
          await User.findOneAndUpdate({ _id: req.params.id }, req.body.email)
       }
       logger.info(`Super Admin user:${req.body.username} Updated!`);
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
const getSuperAdmin = async (req, res) => {
    const id = req.params.id
    try {
        const superadmin = await SuperAdmin.findById({
            _id: id
        })
        res.status(200).json({
            status: true,
            superadmin
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            msg: err
        })
    }
}


export { createSuperAdmin, updateSuperAdmin, getSuperAdmin }
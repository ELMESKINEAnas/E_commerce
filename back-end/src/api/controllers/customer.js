import Customer from "../models/customer";
import User from "../models/user";
import EmailSend from "../helpers/email";


const createCustomer = (req, res) => {
    

    const {
        firstName,
        lastName,
        email,
        password,
        Address,
        zipCode,
        phone,
        city
    } = req.body;

    const UserData = {
        firstName,
        lastName,
        email,
        password,
        role: "CUSTOMER",

    }

    const user = new User(UserData);
    user.save((err, User) => {
        if (err) {
            // logger.error(err);
            return res.status(400).send(err)

        }
        const CostumerData = {
            Address: Address,
            city: city,
            zipCode : zipCode,
            phone : phone,
            user: user._id,
            _id: user._id, 

        }
        const costumer = new Customer(CostumerData);
        costumer.save(async (err, Manager) => {

            if (err) {
                const user = await User.findById({
                    _id: user._id
                })
                user.remove()
                // logger.error(err);
                return res.status(400).send(err)
            }
            

            //Email Verification
            const { id } = user._id;

            let subj = "Please Verify Your Account";
            let msg = ` email : ${email}
                confirm_email : http://localhost:3030/api/admin/confirmEmail/${id}`;
            EmailSend.mail(email, subj, msg)
            
            user.hashed_password=undefined
            user.salt=undefined
            
            // logger.info(`Costumer user:${req.body.username} created!`);
            return res.json({
                user,
                costumer
            })
        })

    })
}

const confirmEmail = async (req, res) => {

            try {
            const { id } = req.params;
            await User.findOneAndUpdate({id}, {"isVerified":true});

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




export {createCustomer,confirmEmail}
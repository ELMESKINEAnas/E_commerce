const SuperAdmin = require('../../models/superadmin')
import { createToken } from "../../helpers";

// const signup = (req, res) => {

//     const superAdmin = new SuperAdmin(req.body);
//     superAdmin.save((err, superAdmin) => {
//         if (err) {
//             return res.status(400).send(err)
//         }
//         res.send(superAdmin)
//     })

// }
const loginSuperAdmin = (req, res) => {

    const {
        email,
        password
    } = req.body;

    SuperAdmin.findOne({
        email
    }, (err, superAdmin) => {
        if (err || !superAdmin) {
            return res.status(400).json({
                isLogged: false,
                error: 'User not Found with this email@'
            })
        }
        if (!superAdmin.authenticate(password)) {
            return res.status(401).json({
                isLogged: false,
                error: 'Email and Password dont Match !'
            })
        }

        const token = createToken({ superAdmin }, "SUPERADMIN");
        res.cookie('tokenSuperAdmin', token, {
            expires: new Date(Date.now() + 4 * 3600000)
        })
        return token
            ? res.status(200).json({ isLogged: true, token,superAdmin })
            : res.status(500).json({ isLogged: false, error: "cant create token" });
    })


}
const logoutSuperAdmin = (req, res) => {
    res.clearCookie('tokenSuperAdmin');
    res.json({
        message: "Logout"
    })
}
export {
    loginSuperAdmin,
    logoutSuperAdmin
}
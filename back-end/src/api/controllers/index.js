
export {login,logout}
from "./authController"

export { getCategory ,getAllCategory, addCategory, deleteCategory, updateCategory}
from "./categoryController";

export { getShippingCompany ,getAllShippingCompany, addShippingCompany, deleteShippingCompany, updateShippingCompany}
from "./shippingCompanyContoller";


export { getProduct ,getAllProduct, addProduct, deleteProduct, updateProduct}
from "./productController";


export { createSeller, removeSeller, searchSeller, updateSeller, getAllSellers, getSeller }
from "./sellerController";

export { createAdmin, removeAdmin, searchAdmin, updateAdmin, getAllAdmins, getAdmin }
from "./adminController";

export {loginAdmin,logoutAdmin}
from "./Auth/auth_AdminController";

export {loginSuperAdmin,logoutSuperAdmin}
from "./Auth/auth_SuperAdminController";

export {createCustomer,confirmEmail,createOrder} 
from "./customerController";
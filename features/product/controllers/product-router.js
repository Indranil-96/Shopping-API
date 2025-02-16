//Import express
import express from "express";
import ProductController from "./product-controllers";

// Initialize express router..
const router=express.Router();
const productrouter = new ProductController();

//All the paths to controller methods....
// localhost/api/products

router.get('/',productrouter.getAllProduct);





export default router;
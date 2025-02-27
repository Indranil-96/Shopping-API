//Import express
import express from "express";
import ProductController from "./product-controllers.js";
import upload from "../../../middlewares/File-Upload.js";

// Initialize express router..
const router=express.Router();
const productController = new ProductController();

//All the paths to controller methods....
// localhost/api/products -- our url params will look like that.

router.get('/',productController.getAllProduct);
router.post('/',upload.single("imageURL"),productController.addProduct);

router.get('/filter', productController.filterProduct); // Here we will get data from query parameter.
//localhost:3300//api/product/filter?minPrice=200&maxPrice=400&catagory=book

router.get('/:id',productController.getOneProduct);

router.post('/rate', productController.rateProduct);






export default router;
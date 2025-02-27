import productDB from "./product-model.js";

class ProductController{

    getAllProduct(req,res){
        const products=productDB.getAll();
        res.status(201).send(products);
    }

    addProduct(req,res){
        const {name,des,catagory,price,size}= req.body;
        const newproduct={
            name,
            des,
            catagory,
            price:parseFloat(price),
            imageURL: req.file.filename,
            size:size.split(',')
        }
       const record= productDB.add(newproduct);
       res.status(201).send(record);
    }

    rateProduct(req,res){
        const {userID, productID, rating}=req.query;

        const err=productDB.rateProduct(userID, productID, rating);

        if(err){
            return res.status(400).send(err);
        }else{
            return res.status(200).send('Rating Done');
        }
    }

    getOneProduct(req,res){
        const id= req.params.id;
        const product= productDB.get(id);
        if(!product){
            res.status(401).send('Product Not found');
        }else{
            res.status(200).send(product);
        }
    }

    filterProduct(req,res){
        // we will get data from query parameter which is a part of req object same as params
        const minPrice= req.query.minPrice;
        const maxPrice= req.query.maxPrice;
        const catagory= req.query.catagory;

        const result=productDB.filter(minPrice,maxPrice,catagory);

        res.status(200).send(result);
    }
}

export default ProductController;
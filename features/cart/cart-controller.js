import CartModel from "./cart-model.js";
class CartItemController{
    
    add(req,res){
        const {productID, quantity}=req.query;
        console.log(req);
        const userID=req.userID;
        CartModel.add(productID,userID,quantity);

        return res.status(201).send("Item added to Cart");
    }

    get(req,res){
        const userID=req.userID();
        const Items=CartModel.get(userID);
        return res.status(200).send(Items);
    }
}

export default CartItemController;
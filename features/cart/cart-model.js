class CartModel{
    constructor(productID, userID, quantity, id){
        this.productID=productID;
        this.userID=userID;
        this.quantity=quantity;
        this.id=id;
    }

    static add(productID, userID, quantity){
        const newItem= new CartModel(productID, userID, quantity);
        newItem.id=cartItems.length+1;
        cartItems.push(newItem);
        return newItem;
    }

    static get(userID){
        return cartItems.filter((i)=> i.userID == userID);
    }
}

const cartItems=[
    new CartModel(2,1,1,1)
];

export default CartModel;
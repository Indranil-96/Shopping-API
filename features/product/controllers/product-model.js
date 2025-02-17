
class productDB{

    constructor(id, name, des,imageURl, catagory, price, size){
        this.id=id;
        this.name=name;
        this.des=des;
        this.imageURl=imageURl;
        this.catagory=catagory;
        this.price=price;
        this.size=size;
    }
    static getAll(){
        return products;
    }

    static add(product){
        product.id=products.length+1;
        products.push(product);
        return products;
    }

    static get(id){
        const product=products.find( (i)=> i.id == id);
        return product;
    }

    static filter(minPrice, maxPrice, catagory){
        const result=products.filter((product)=>{
           return (product.price >= minPrice && product.price <= maxPrice && product.catagory == catagory)
        });

        return result;
    }

}

let products=[
    new productDB(1,"Onyx Storm","Book","https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446357i/209439446._SX300_.jpg","Book",100),
    new productDB(2,"Onyx Storm","Book","https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446357i/209439446._SX300_.jpg","Book",200),
    new productDB(3,"Onyx Storm","Book","https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446357i/209439446._SX300_.jpg","Book",300),
    new productDB(4,"Onyx Storm","Book","https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446357i/209439446._SX300_.jpg","Book",400)
    
]

export default productDB;
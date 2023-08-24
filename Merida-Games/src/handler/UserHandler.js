import { UserService} from "../service/UserServices";

export const UserHandler = {
    // addProduct(newProduct){
    //     // console.log(newProduct);
    //     if (!newProduct) {
    //         return;
    //     }

    //     let product = {
    //         "name": newProduct.productName,
    //         "price": newProduct.price,
    //         "img": newProduct.productPicture,
    //         "category": newProduct.category,
    //         "productStatus": newProduct.productState,
    //         "unit": newProduct.units,
    //         "description": newProduct.description,
    //         "date": new Date(),
    //         "id": ""

    //     }
    //     return ProductService.submitProduct(product);
        //return product;
    // },
    loadUsers(){
        return UserService.getAllUsers();
    }
   
}

export default UserHandler
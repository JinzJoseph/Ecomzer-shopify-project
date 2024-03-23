import axios from "axios";

export async function productsData() {
    // Make a GET request to the fake store API
    const products = await axios.get("https://fakestoreapi.com/products");
    
    // Return the product data
    return products;
}
export const load = async (loadEvent) =>{
    console.log("This is from page.js");
    const title = "List of available products";
    const {fetch} = loadEvent;
    const response = await fetch("http://localhost:4000/items");
    const products = await response.json();
    return{
        title,
        products
    }
}
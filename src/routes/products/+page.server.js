export const load = async (serverLoadEvent) =>{
    console.log("This is from page.server.js");
    const title = "List of available products";
    const {fetch} = serverLoadEvent;
    const response = await fetch("http://localhost:4000/items");
    const products = await response.json();
    return{
        title,
        products
    }
}
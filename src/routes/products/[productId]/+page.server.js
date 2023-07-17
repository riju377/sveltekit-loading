import {error, redirect} from "@sveltejs/kit";
export const load = async (serverLoadEvent)=>{
    const {fetch, params} = serverLoadEvent;
    const response = await fetch(`http://localhost:4000/items/${params.productId}`);
    const product = await response.json();
    const notification = "End of season sale, 50% Off!!"

    if (JSON.stringify(product) === '{}') {
        // throw error(404, {
        //     message: 'Oops, Looks like the page does not exist!!',
        //     hint: "Check the url and try again"
        // });
        throw redirect(307,'/products')
    }

    const title = "Product Details";
    console.log(product)
    

    return {
        product,
        title,
        notification
    }
}
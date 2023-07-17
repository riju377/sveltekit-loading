export const load = async (loadEvent) => {
    const {fetch, parent} = loadEvent;
    const response = await fetch(`http://localhost:4000/featured-product`);
    const products = await response.json();
    const title = "Featured Products";
    const parentData = await parent();
    const {username} = parentData;
    const notification = "End of season sale!!"

    return {
        products,
        title,
        username,
        notification
    }
}

// export const ssr = false;
export const csr = false;
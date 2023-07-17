<script>
    export let data;
    const products = data.products;
    const title = data.title;
</script>

<h1>{title}</h1>

{#each products as product}
<h2>Name: {product.name}</h2>
<h2>Price: {product.price}</h2>
<hr>
{/each}
<script>
  export let data;
  const featuredProduct = data.products;
</script>

<slot />

<h2>{data.title} for {data.username}</h2>

<div class="container">
  {#each featuredProduct as product}
    <div class="product-item">
      <h2>{product.name}</h2>
      <h2>{product.description}</h2>
    </div>
  {/each}
</div>

<style>
  .product-item {
    display: inline-block;
    width: 200px;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  .container {
    text-align: center;
  }
</style>

<script>
  export let data;
  const product = data.product;
</script>

<h1>{data.title}</h1>
<h2>{product.name} - ${product.price}</h2>
<h4>{product.description}</h4>
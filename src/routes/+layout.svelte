<script>
  import { page } from "$app/stores";
  export let data;
</script>

<h3 class="user-welcome">Welcome, {data.username}</h3>
{#if $page.data.notification}
<h2>{$page.data.notification}</h2>
{/if}

<slot />

<style>
  .user-welcome {
    display: inline-block;
    border: 1px solid blue;
    padding: 5px;
  }
</style>

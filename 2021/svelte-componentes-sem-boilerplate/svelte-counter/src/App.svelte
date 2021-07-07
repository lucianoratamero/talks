<script>
  let name = "world";
  let count = 0;
</script>

<p>Hello {name}!</p>
<p>
  <input type="text" bind:value={name} />
  <button type="button" on:click={() => count = count + 1}>
    count is: {count}
  </button>
</p>

<style>
  p,
  input,
  button {
    font-size: 3rem;
  }

  p {
    text-align: center;
  }
</style>

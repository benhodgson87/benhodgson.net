<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message
      }
    };
  }
</script>

<script lang="ts">
  export let status: string;
  export let message: string;
</script>

<h2>Error: {status}</h2>
<p>{message}</p>
<p><a href="/">Go to homepage &raquo;</a></p>

<style>
  h2 {
    margin-bottom: 20px;
  }

  p:not(:last-of-type) {
    margin-bottom: 20px;
  }

  a {
    color: #333;
  }
  a:hover {
    color: #00d0ff;
  }
</style>

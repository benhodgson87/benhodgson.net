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
  import Layout from '../components/Layout.svelte';

  export let status: string;
  export let message: string;
</script>

<Layout noLogoOnTheFoam>
  <h2>Error: {status}</h2>
  <p>{message}</p>
  <p><a href="/">Go to homepage &raquo;</a></p>
</Layout>

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

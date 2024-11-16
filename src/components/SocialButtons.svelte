<script lang="ts">
  import type { ServiceTypes } from './SocialButton.svelte';
  import SocialButton from './SocialButton.svelte';

  let networks: Array<{
    id: ServiceTypes;
    name: string;
    url: string;
  }> = [
    { id: 'github', name: 'Github', url: 'https://github.com/benhodgson87' },
    { id: 'codepen', name: 'Codepen', url: 'https://codepen.io/bh' },
    { id: 'linkedin', name: 'LinkedIn', url: 'https://uk.linkedin.com/in/bhodgson' },
    { id: 'bluesky', name: 'Bluesky', url: 'https://bsky.app/profile/benhodgson.net' }
  ];
</script>

<section>
  <ul class="social-buttons">
    {#each networks as network}
      <SocialButton service={network.id} href={network.url}>{network.name}</SocialButton>
    {/each}
  </ul>
</section>

<style>
  .social-buttons {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 40px;
  }
</style>

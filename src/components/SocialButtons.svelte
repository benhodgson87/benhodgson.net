<script>
  import SocialButton from './SocialButton.svelte';

  let networks = [
    { id: 'github', name: 'Github', url: 'https://github.com/benhodgson87' },
    { id: 'codepen', name: 'Codepen', url: 'https://codepen.io/bh' },
    { id: 'linkedin', name: 'LinkedIn', url: 'https://uk.linkedin.com/in/bhodgson' },
    { id: 'twitter', name: 'Twitter', url: 'https://twitter.com/benhodgson' },
    { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/ben_hodgson' },
    { id: 'songkick', name: 'Songkick', url: 'https://www.songkick.com/users/benhodgson' },
    { id: 'spotify', name: 'Spotify', url: 'https://open.spotify.com/user/ben.hodgson' },
    { id: 'soundcloud', name: 'Soundcloud', url: 'https://soundcloud.com/benhodgson/likes' }
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

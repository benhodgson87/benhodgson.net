<script>
  import SocialButton from './SocialButton.svelte';
</script>

<section>
  <ul class="social-buttons">
    <SocialButton service="github" href="https://github.com/benhodgson87">Github</SocialButton>
    <SocialButton service="codepen" href="https://codepen.io/bh">Codepen</SocialButton>
    <SocialButton service="linkedin" href="https://uk.linkedin.com/in/bhodgson">LinkedIn</SocialButton>
    <SocialButton service="twitter" href="https://twitter.com/benhodgson">Twitter</SocialButton>
    <SocialButton service="instagram" href="https://instagram.com/ben_hodgson">Instagram</SocialButton>
    <SocialButton service="songkick" href="https://www.songkick.com/users/benhodgson">Songkick</SocialButton>
    <SocialButton service="spotify" href="https://open.spotify.com/user/ben.hodgson">Spotify</SocialButton>
    <SocialButton service="soundcloud" href="https://soundcloud.com/benhodgson/likes">Soundcloud</SocialButton>
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

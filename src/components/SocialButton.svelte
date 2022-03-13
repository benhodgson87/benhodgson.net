<script context="module" lang="ts">
  export type ServiceTypes =
    | 'github'
    | 'codepen'
    | 'linkedin'
    | 'twitter'
    | 'instagram'
    | 'songkick'
    | 'spotify'
    | 'soundcloud';
</script>

<script lang="ts">
  export let service: ServiceTypes;
  export let href: string;
</script>

<li class="social-button social-button--{service}">
  <a class="social-button__inner" {href}>
    <slot />
  </a>
</li>

<style>
  .social-button {
    flex: 0 0 50%;
  }

  @media (min-width: 920px) {
    .social-button {
      flex: 0 0 25%;
    }
  }

  .social-button > .social-button__inner {
    display: block;
    margin: 5px;
    padding: 10px 10px 10px 25%;
    background-color: #fff;
    background-size: 10%;
    background-repeat: no-repeat;
    background-position: 10% center;
    color: #fff;
    font-family: 'Assistant', sans-serif;
    font-display: fallback;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
  }

  .social-button > .social-button__inner:hover {
    color: #fff;
    opacity: 0.8;
  }

  @media (max-width: 719px) {
    .social-button:nth-child(2n + 1) > .social-button__inner {
      margin-left: 0;
    }
    .social-button:nth-child(2n) > .social-button__inner {
      margin-right: 0;
    }
  }

  @media (min-width: 920px) {
    .social-button:nth-child(4n + 1) > .social-button__inner {
      margin-left: 0;
    }
    .social-button:nth-child(4n) > .social-button__inner {
      margin-right: 0;
    }
  }

  .social-button--twitter .social-button__inner {
    background-color: #1da1f2;
    background-image: url('/img/social/twitter.svg');
  }
  .social-button--linkedin .social-button__inner {
    background-color: #0077b5;
    background-image: url('/img/social/linkedin.svg');
  }
  .social-button--instagram .social-button__inner {
    background-color: #405de6;
    background-image: url('/img/social/instagram.svg');
  }
  .social-button--spotify .social-button__inner {
    background-color: #1db954;
    background-image: url('/img/social/spotify.svg');
  }
  .social-button--soundcloud .social-button__inner {
    background-color: #f30;
    background-image: url('/img/social/soundcloud.svg');
  }
  .social-button--songkick .social-button__inner {
    background-color: #f80046;
    background-image: url('/img/social/songkick.svg');
  }
  .social-button--github .social-button__inner {
    background-color: #4078c0;
    background-image: url('/img/social/github.svg');
  }
  .social-button--codepen .social-button__inner {
    background-color: #1e1e1e;
    background-image: url('/img/social/codepen.svg');
  }
</style>

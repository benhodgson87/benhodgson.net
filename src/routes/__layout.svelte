<div class="flex">
  <div class="flex__positioner">
    <div class="flex__content">
      <slot />
    </div>
  </div>
</div>

<style>
  .flex {
    display: flex;
    height: 100vh;
  }
  @media (min-width: 720px) {
    .flex__positioner {
      display: flex;
      align-items: center;
      box-pack: center;
      flex: 1;
      overflow-y: scroll;
      width: 75%;
    }
  }

  .flex__content {
    margin: auto;
    padding: 20px;
    max-width: 980px;
  }

  @media (min-width: 720px) {
    .flex__content {
      width: 75%;
    }
  }
</style>

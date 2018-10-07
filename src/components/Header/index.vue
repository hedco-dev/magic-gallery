<template>
  <header class="navbar">
    <aside class="logo-container">
      <img src="/static/images/camera.svg" />
      <strong>Magic Gallery</strong>
    </aside>
    <aside class="action-side">
      <slot></slot>
    </aside>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  .navbar {
    background: rgba(255, 255, 255, 0.9);
    opacity: 0.7;
    padding: 15px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    line-height: 30px;
    display: flex;

    aside {
      flex: 1;
    }
    aside.action-side {
      text-align: right;
    }

    aside.logo-container {
      display: flex;

      strong {
        font-family: sans-serif;
      }
      
      img {
        height: 27px;
        margin-right: 6px;
      }
    }

    button {
      height: 30px;
      border: none;
      width: 40px;
      background-color: transparent;
      outline: none;
      cursor: pointer;
    }
  }

  .refreshing {
    -webkit-animation: rotation 2s infinite linear;
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
</style>

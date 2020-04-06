<template>
  <div id="app">
    <transition name="bounce" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
  body,#app{
    padding: 0;
    margin: 0;
    height: 100vh;
    overflow: hidden;
  }
  #app{
    background: url("/static/back.jpg");
    background-size: 100% 100%;
  }
</style>

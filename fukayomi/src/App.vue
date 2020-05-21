// どのページにも共通して現れるっぽい
// なので、ヘッダーとして活用する
// できればハンバーガーメニューにする
<template>
  <div id="app">
    <header id="nav">
      <h1 class="title">Fukayomi</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/discuss">Discuss</router-link> |
      <router-link to="/api">API</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
  display: flex;
  background-color: #2c3e50;

  a {
    font-weight: bold;
    color:white;
    margin:auto 30px;
    text-align: center;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  h1 {
    font-weight: bold;
    color:white;
    margin:0 30px;
  }
}
</style>

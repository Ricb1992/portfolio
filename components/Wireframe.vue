<template>
  <div class="wireframe-container">
    <WireframeNavBar></WireframeNavBar>
    <WireframeCopertina></WireframeCopertina>
    <div class="main">
      <div class="sidebar"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<style scoped>
.wireframe-container {
  width: 100%;
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
}
.header {
  height: 50px;
  background: #ddd;
}
.main {
  display: flex;
  flex: 1;
}
.sidebar {
  width: 20%;
  background: #ccc;
}
.content {
  flex: 1;
  background: #fff;
}
</style>

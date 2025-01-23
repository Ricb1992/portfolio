<template>
  <div class="vscode-container">
    <div class="header">
      <div class="buttons">
        <span class="close"></span>
        <span class="minimize"></span>
        <span class="maximize"></span>
      </div>
      <span class="title">Portfolio di Riccardo Basso</span>
    </div>
    <div class="editor md:text-center flex items-center h-screen w-full">
      <div class="block">
        <code ref="codeLine" class="md:text-3xl"
          ><span class="text-[#CE9178]">console</span>.<span>log</span>(<span
            class="text-[#800000]"
            >'hello world'</span
          >);</code
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const codeLine = ref(null);

onMounted(() => {
  gsap.registerPlugin(TextPlugin);

  if (codeLine.value) {
    const text = codeLine.value.innerText;
    codeLine.value.innerText = "";
    gsap.to(codeLine.value, {
      opacity: 1,
      duration: text.length * 0.1,
      text: { value: text },
      ease: "none",
      delay: 0.5,
    });
  } else {
    console.error("codeLine reference is not set.");
  }
});
</script>

<style scoped>
.vscode-container {
  width: 100%;
  height: 100vh;
  background-color: #1e1e1e;
  color: #d4d4d4;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
}
.header {
  height: 30px;
  background-color: #333;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
}
.buttons {
  display: flex;
  gap: 5px;
}
.buttons span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.close {
  background: #ff5f56;
}
.minimize {
  background: #ffbd2e;
}
.maximize {
  background: #27c93f;
}
.editor {
  flex: 1;
  padding: 20px;
}
code {
  opacity: 1;
}
</style>

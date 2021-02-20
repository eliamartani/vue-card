<template>
  <h1>vue-card</h1>

  <div class="app-card">
    <Card :constrain="constrain" :perspective="perspective" />
  </div>

  <div class="config">
    <label>
      Constrain:
      <input
        type="number"
        name="constrain"
        placeholder="Constrain (number)"
        title="Constrain (number)"
        v-model="constrain"
      />
    </label>

    <label>
      Perspective:
      <input
        type="text"
        name="perspective"
        placeholder="Perspective size"
        title="Perspective size"
        v-model="perspective"
      />
    </label>

    <a :href="repositoryUrl" target="_blank" rel="noopener noreferrer">
      GitHub
      <img src="./assets/open.svg" alt="Open in a new tab" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { repository } from "../package.json";
import Card from "./components/Card.vue";

export default defineComponent({
  components: {
    Card,
  },

  setup() {
    const constrain = ref(40);
    const perspective = ref("30rem");
    const repositoryUrl = ref(repository.url);

    return {
      constrain,
      perspective,
      repositoryUrl,
    };
  },
});
</script>

<style lang="scss">
body {
  font-family: sans-serif;
  margin: 0;
}

h1 {
  color: rgba(22, 31, 39, 0.42);
  content: attr(data-title);
  font-size: 2rem;
  left: 1rem;
  margin: 0;
  position: fixed;
  top: 1rem;
  z-index: -1;
}

.app-card {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  .vue-card {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;

    &__container {
      background: url("https://source.unsplash.com/random");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 10px;
      box-shadow: rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
        rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
      height: 30rem;
      overflow: hidden;
      width: 30rem;

      @media screen and (max-width: 1024px) {
        height: 25rem;
        width: 25rem;
      }

      @media screen and (max-width: 768px) {
        height: 15rem;
        width: 15rem;
      }

      img {
        height: 100%;
      }
    }
  }
}

.config {
  bottom: 1rem;
  position: fixed;
  right: 1rem;

  font-size: 12px;

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid #000;
    font-size: inherit;
    width: 2.5rem;
  }

  label + a {
    &::before {
      content: "";
      margin-left: 1rem;
    }
  }
}
</style>

<template>
  <div class="vue-card" v-on="events">
    <div class="vue-card__container" :style="containerStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, ref } from "vue";

type Rotation = [number, number];

interface MouseMoveEvent {
  target: HTMLElement;
}

function approxDegree(event: MouseMoveEvent, constrain: number): Rotation {
  const box = event.target.getBoundingClientRect();
  const calcX = Math.ceil(
    -(event.clientY - box.y - box.height / 2) / constrain
  );
  const calcY = Math.ceil((event.clientX - box.x - box.width / 2) / constrain);

  return [calcX, calcY];
}

export default defineComponent({
  name: "Card",

  props: {
    constrain: Number,
    perspective: String,
  },

  setup(props, { slots }) {
    const rotationRef = ref<Rotation>([0, 0]);
    const containerStyle = computed<CSSProperties>(() => ({
      transform: `perspective(${props.perspective}) rotateX(${rotationRef.value[0]}deg) rotateY(${rotationRef.value[1]}deg)`,
    }));
    const events = {
      mouseleave: () => (rotationRef.value = [0, 0]),
      mousemove: (e: MouseMoveEvent) =>
        (rotationRef.value = approxDegree(e, props.constrain)),
    };

    return {
      containerStyle,
      events,
    };
  },
});
</script>

<style lang="scss">
.vue-card {
  &__container {
    box-sizing: border-box;
    height: 100%;
    position: relative;
    transition: transform 0.2s ease-out;
    width: 100%;
  }
}
</style>

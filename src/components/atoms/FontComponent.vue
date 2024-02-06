<template>
  <div :style="[fontStyle]">
    <!-- slot: chldren과 거의 유사 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FontComponent",
  props: {
    fontFamily: {
      type: String,
      default: "NeoDunggeunmo",
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    color: {
      type: String,
      default: "black",
    },
    additionalStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    fontStyle() {
      return {
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
        color: this.color,
        ...this.additionalStyles,
      };
    },
  },
};
</script>

<style></style>

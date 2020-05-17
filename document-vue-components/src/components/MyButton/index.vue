<template>
  <button type="button" :class="[color, size]">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    color: {
      type: String,
      default: 'green',
      validator(value) {
        return ['red', 'green', 'blue'].includes(value)
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
.small {
  font-size: 16px;
}
.medium {
  font-size: 20px;
}
.large {
  font-size: 24px;
}
</style>

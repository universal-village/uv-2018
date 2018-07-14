<template>
  <div>
    <transition name="slide-fade-submission" mode="out-in">
      <router-view name="MySubmissions"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Submissions'
}
</script>

<style scoped>

</style>

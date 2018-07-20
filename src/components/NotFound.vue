<template>
  <a-layout-content style="padding: 0 50px">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
        <a-alert
          message="404 Not Found"
          description="We cannot find the page you've trying to access. Check your URL Address and try again. If you believe this is an error, please contact us."
          type="warning"
          showIcon
        />
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>

</style>

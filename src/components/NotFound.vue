<template>
  <a-layout-content style="padding: 0 50px">
    <a-layout style="padding: 0 24px 24px; background: rgba(255, 255, 255, .75);">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item v-for="navPage in this.$store.state.navPageList" :key="navPage">
          {{ navPage | capitalize }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '24px', margin: 0, minHeight: '280px' }">
        <div class="ant-alert ant-alert-info" style="min-width: 10vw; max-width: 300px;"><i class="anticon anticon-info-circle ant-alert-icon"></i><span class="ant-alert-message">Page is still in construction.</span></div>
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

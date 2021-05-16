<template>
  <div class="entrance">
    <div class="entrance__topic">
        <i class="fas fa-heart fa-9x entrance__logo"></i>
      <h1 class="entrance__title">健康自我狀況評估表</h1>
      <router-link to="/survey">
        <el-button type="primary">
          開始填寫
        </el-button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss" scoped>
@import '../assets/var.scss';

.entrance {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $white;
  color: $primary;

  &__topic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }
}
</style>

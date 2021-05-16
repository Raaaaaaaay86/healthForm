<template>
<div class="result">
  <div class="sheet header">
    <h1 class="header__title">
      自我況評估結果
    </h1>
    <p class="header__content text--center lineHeight--15">
      以下的狀況是從身體發出的簡訊，了解自己營養缺失的狀況：
    </p>
  </div>
  <div class="sheet result__info">
    <h2 class="result__info__title">基本資料</h2>
    <ul class="result__info__list">
      <li>姓名：{{ filledForm.name }}</li>
      <li>性別：{{ filledForm.gender }}</li>
      <li>手機號碼：{{ filledForm.phone }}</li>
      <li>生日：{{ formatedBirthday }}</li>
      <li>身高：{{ filledForm.height + 'cm' }}</li>
      <li>體重：{{ filledForm.weight + 'kg' }}</li>
      <li>工作型態：{{ isInfoProvided(filledForm.work) }}</li>
      <li>早餐時間：{{ isInfoProvided(filledForm.breakfastTime) }}</li>
      <li>三餐型態：{{ isInfoProvided(filledForm.mealType) }}</li>
      <li>就寢時間：{{ isInfoProvided(filledForm.bedTime) }}</li>
      <li>飲用水：{{ isInfoProvided(filledForm.waterType) }}</li>
      <li>服用營養補充食品習慣：
        {{
          filledForm.supplementsHabit ?
          '有' :
          filledForm.supplementsHabit === null ?
          '未提供' :
          '沒有'
        }}
      </li>
      <li class="result__info__list__fillDate">填寫日期: {{ today }}</li>
    </ul>
  </div>
  <div class="sheet result__info">
    <h2 class="result__info__title">營養缺失狀況</h2>
    <el-table :data="needsTable">
      <el-table-column prop="name" label="營養名稱"></el-table-column>
      <el-table-column prop="level" label="缺少等級"></el-table-column>
    </el-table>
  </div>
</div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, defineComponent, ref } from 'vue';
import jsonData from '../assets/data.json';

export default defineComponent({
  setup() {
    const store = useStore();
    const needList = ref<NeedList>(jsonData.needList);
    const filledForm = computed(() => store.state.filledForm);
    const today = computed(() => {
      const current = new Date();
      return `${current.getFullYear()}年${current.getMonth() + 1}月${current.getDate()}日`;
    });
    const formatedBirthday = computed(() => {
      const unformat = filledForm.value.birthday;
      const formated = `${unformat.getFullYear()}年${unformat.getMonth() + 1}月${unformat.getDate()}日`;
      return formated;
    });
    const isInfoProvided = (info: null | string) => {
      if (info === null) {
        return '未提供';
      }
      return info;
    };

    const translateToZh = (key: string): string => {
      console.log(key);
      return needList.value[key];
    };

    const needsTable = computed(() => {
      const result: ElementTableItem[] = [];
      const original: string[] = filledForm.value.needs;
      const map: any = {};
      original.forEach((element: string) => {
        if (map[element] === undefined) {
          map[element] = 1;
          return;
        }
        map[element] += 1;
      });

      Object.entries(map).forEach(([key, value]: [string, unknown|number]) => {
        const data: ElementTableItem = {
          name: translateToZh(key),
          level: value,
        };
        result.push(data);
      });
      result.sort((a, b) => {
        const firstA = a.name.split('')[0].toLowerCase();
        const firstB = b.name.split('')[0].toLowerCase();
        if (firstA > firstB) return 1;
        return -1;
      });
      return result;
    });
    return {
      filledForm,
      formatedBirthday,
      isInfoProvided,
      needsTable,
      today,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../assets/var.scss';

.result {
  background-color: $light;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__info {
    &__title {
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    &__list {
      line-height: 1.5;

      &__fillDate {
        font-size: 0.8em;
        text-align: right;
        margin-top: 1rem;
      }
    }
  }
}
</style>

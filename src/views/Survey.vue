<template>
  <div>
    <el-form class="survey" :model="healthForm" ref="ruleForm" :rules="rules">
      <div class="sheet header">
        <h1 class="header__title">
          健康自我況評估表
        </h1>
        <p class="header__intro">
          這是一次難得的機會，來檢視我們的飲食習慣。我們確信多數疾病的發生與日常生活作息、飲食習慣是息息相關;
          以下狀況如果存在，代表您的飲食習慣與生活作息恐怕有修正的必要了。
        </p>
        <p class="header__caution">
          (請填妥問卷，我們將與您分享有關營養的資訊)
        </p>
      </div>
      <div class="sheet">
        <h2 class="info__title">基本資料：</h2>
        <el-form-item label="姓名" size="small" prop="name">
          <el-input
            type="text"
            size="small"
            v-model="healthForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="聯絡電話" size="small" prop="phone">
          <el-input type="tel" size="small" v-model="healthForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="性別" size="small" prop="gender">
          <el-radio label="男" size="small" v-model="healthForm.gender"></el-radio>
          <el-radio label="女" size="small" v-model="healthForm.gender"></el-radio>
        </el-form-item>
        <el-form-item label="生日" size="small" prop="birthday">
          <el-date-picker
            type="date"
            size="small"
            format="YYYY 年 MM 月 DD 日"
            v-model="healthForm.birthday"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="身高(cm)" size="small" prop="height">
          <el-input type="number" size="small" v-model="healthForm.height"></el-input>
        </el-form-item>
        <el-form-item label="體重(kg)" size="small" prop="weight">
          <el-input type="number" size="small" v-model="healthForm.weight"></el-input>
        </el-form-item>
      </div>
      <div class="sheet">
        <h2 class="info__title">生活習慣(單選)：</h2>
        <el-form-item label="工作型態：" class="divide--bottom life">
          <el-radio-group class="life__radioGroup" v-model="healthForm.work">
            <el-radio label="上班族" size="small" class="life_radio"></el-radio>
            <el-radio label="企業家" size="small" class="life_radio"></el-radio>
            <el-radio label="家庭主婦" size="small" class="life_radio"></el-radio>
            <el-radio label="學生" size="small" class="life_radio"></el-radio>
            <el-radio label="工程人員" size="small" class="life_radio"></el-radio>
            <el-radio label="銀髮族" size="small" class="life_radio"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="早餐時間：" class="divide--bottom life">
          <el-radio-group class="life__radioGroup" v-model="healthForm.breakfastTime">
            <el-radio label="6:00~7:00" size="small" class="life_radio"></el-radio>
            <el-radio label="7:00~8:00" size="small" class="life_radio"></el-radio>
            <el-radio label="8:00~9:00" size="small" class="life_radio"></el-radio>
            <el-radio label="9:00以後" size="small" class="life_radio"></el-radio>
            <el-radio label="沒吃早餐" size="small" class="life_radio"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="三餐型態：" class="divide--bottom life">
          <el-radio-group class="life__radioGroup" v-model="healthForm.mealType">
            <el-radio label="外食" size="small" class="life_radio"></el-radio>
            <el-radio label="自己煮" size="small" class="life_radio"></el-radio>
            <el-radio label="偏好飲食" size="small" class="life_radio"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="飲水型態：" class="divide--bottom life">
          <el-radio-group class="life__radioGroup" v-model="healthForm.waterType">
            <el-radio label="自來水" size="small" class="life_radio"></el-radio>
            <el-radio label="電解水" size="small" class="life_radio"></el-radio>
            <el-radio label="純水" size="small" class="life_radio"></el-radio>
            <el-radio label="山泉水" size="small" class="life_radio"></el-radio>
            <el-radio label="能量水" size="small" class="life_radio"></el-radio>
            <el-radio label="其他" size="small" class="life_radio"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="就寢時間：" class="divide--bottom life">
          <el-radio-group class="life__radioGroup" v-model="healthForm.bedTime">
            <el-radio label="22:00~23:00" size="small" class="life_radio"></el-radio>
            <el-radio label="23:00~00:00" size="small" class="life_radio"></el-radio>
            <el-radio label="00:00~01:00" size="small" class="life_radio"></el-radio>
            <el-radio label="01:00以後" size="small" class="life_radio"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="服用營養補充品習慣：" class="life">
          <el-radio-group class="life__radioGroup" v-model="healthForm.supplementsHabit">
            <el-radio :label="true" size="small" class="life_radio">
              有
            </el-radio>
            <el-radio :label="false" size="small" class="life_radio" >
              沒有
            </el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <div class="sheet">
        <h2 class="symptons__title">如您曾有以下感覺，請勾選 (複選)：</h2>
        <el-checkbox-group class="symptons__grid" v-model="checkedSymptons">
          <el-checkbox
            v-for="(sympton, index) in symptonData.symptons"
            :key="`${sympton.sympton}${index}`"
            :label="sympton.display"
            size="mini"
            class="symptons__check"
            @change="checkSympton($event, sympton.lackElements)"
          />
        </el-checkbox-group>
      </div>
      <div class="submitArea">
        <el-button type="primary" @click.prevent="submitSurvey">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  ref,
  defineComponent,
} from 'vue';

import { useStore } from 'vuex';
import router from '../router/index';
import symptonsData from '../assets/data.json';

export default defineComponent({
  setup() {
    const store = useStore();
    const symptonData = ref<SymptonsJson>(symptonsData);
    const checkedSymptons = ref<string[]>([]);
    const ruleForm = ref<any>();
    const healthForm: HealthFormData = reactive({
      needs: [],
      work: null,
      breakfastTime: null,
      bedTime: null,
      mealType: null,
      waterType: null,
      supplementsHabit: null,
      height: null,
      weight: null,
      name: '',
      phone: '',
      gender: '',
      birthday: '',
    });
    const rules = reactive({
      name: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      phone: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      gender: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      birthday: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      height: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      weight: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      work: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      breakfastTime: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      bedTime: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      mealTime: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      waterType: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
      supplementsHabit: [
        { required: true, message: '必填欄位', trigger: 'blur' },
      ],
    });

    const checkSympton = (eventValue: boolean, lackElements: string[]): void => {
      if (eventValue === true) {
        healthForm.needs = healthForm.needs.concat(lackElements);
        return;
      }

      lackElements.forEach((el: string):void => {
        const index: number = healthForm.needs.findIndex((item: string) => item === el);
        healthForm.needs.splice(index, 1);
      });
    };

    const submitSurvey = ():void => {
      ruleForm.value.validate((valid: boolean) => {
        if (valid) {
          store.commit('SET_FILLED_FORM', healthForm);
          router.push('/result');
          return;
        }
        alert('缺少必填欄位');
      });
    };

    return {
      healthForm,
      symptonData,
      checkSympton,
      checkedSymptons,
      submitSurvey,
      ruleForm,
      rules,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/var.scss";
.divide {

  &--bottom {
    border-bottom: 1px solid rgb(204, 204, 204);
  }
}

.survey {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: $light;

}

.life {
  padding-bottom: 1rem;

  &__radioGroup {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: .5rem;
    place-items: left;
  }

  &_radio {
    margin: 0;
  }
}

.symptons {

  &__title {
    margin-bottom: 1rem;
  }

  &__grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: .5rem;
  }

  &__check {
    word-wrap: break-word;
    margin: 0;
  }
}

.submitArea {
  display: flex;
}
</style>

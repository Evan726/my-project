<template>
  <div>
    <base-layout v-if="pageActive === 'layout'"></base-layout>
    <base-container v-if="pageActive === 'container'"></base-container>
    <base-icon v-if="pageActive === 'icon'"></base-icon>
    <base-button v-if="pageActive === 'button'"></base-button>
    <form-radio v-if="pageActive === 'radio'"></form-radio>
    <form-checkbox v-if="pageActive === 'checkbox'"></form-checkbox>
    <form-input v-if="pageActive === 'input'"></form-input>
    <form-input-number v-if="pageActive === 'inputnumber'"></form-input-number>
    <form-select v-if="pageActive === 'select'"></form-select>
  </div>
</template>

<script>
  import BaseLayout from '../components/vue/BaseLayout.vue'
  import BaseContainer from '../components/vue/BaseContainer.vue'
  import BaseIcon from '../components/vue/BaseIcon.vue'
  import BaseButton from '../components/vue/BaseButton.vue'

  import FormRadio from '../components/vue/FormRadio.vue'
  import FormCheckbox from '../components/vue/FormCheckbox.vue'
  import FormInput from '../components/vue/FormInput.vue'
  import FormInputNumber from '../components/vue/FormInputNumber.vue'
  import FormSelect from '../components/vue/FormSelect.vue'

  export default {
    name: 'VueComponentsDetailsPage',
    data: function () {
      return {
        pageActive: ''
      }
    },
    components: {
      BaseLayout,
      BaseContainer,
      BaseIcon,
      BaseButton,
      FormRadio,
      FormCheckbox,
      FormInput,
      FormInputNumber,
      FormSelect
    },
    mounted: function () {
      this.pageActive = this.$route.params.componentName
    },

    watch: {
      '$route' (to, tofrom) {
        this.pageActive = to.params.componentName
      }
    }
  }
</script>

<style>

</style>

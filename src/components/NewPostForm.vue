<template>
  <v-form ref="form" v-model="isFormValid" >
    <v-textarea
        filled
        auto-grow
        v-model="inputText"
        :rules="[rules.textarea]"
    ></v-textarea>
    <v-btn @click="$emit('add-post', inputText)" color="primary" :disabled="!isFormValid">Send</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    isFormValid: false,
    inputText: '',
    rules: {
      textarea: v => (v || '').length > 0 || ''
    }
  }),
  methods: {
    resetForm() {
      this.$refs.form.reset();
    }
  }
}
</script>
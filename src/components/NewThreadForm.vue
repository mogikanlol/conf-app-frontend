<template>
  <v-form ref="form" v-model="isFormValid" >
    <v-text-field
        v-model="title"
        :rules="[rules.text]"
        filled
        label="Title"
    ></v-text-field>
    <v-textarea
        filled
        auto-grow
        v-model="content"
        label="Content"
        :rules="[rules.text]"
    ></v-textarea>
    <v-btn @click="addThread()" color="primary" :disabled="!isFormValid">Send</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    title: '',
    isFormValid: false,
    content: '',
    rules: {
      text: v => (v || '').length > 0 || ''
    }
  }),
  methods: {
    addThread() {
      const thread = {
        title: this.title,
        shortContent: this.content
      };
      this.$emit('add-thread', thread);
    },
    resetForm() {
      this.$refs.form.reset();
    }
  }
}
</script>
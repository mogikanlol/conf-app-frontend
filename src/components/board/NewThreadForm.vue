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
    <v-file-input v-model="image" accept="image/png, image/jpeg, image/bmp" label="File input"></v-file-input>
    <v-btn @click="addThread()" color="primary" :disabled="!isFormValid">Send</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    title: '',
    content: '',
    image: null,
    isFormValid: false,
    rules: {
      text: v => (v || '').length > 0 || ''
    }
  }),
  methods: {
    addThread() {
      const thread = {
        title: this.title,
        content: this.content,
        image: this.image
      };
      this.$emit('add-thread', thread);
    },
    resetForm() {
      this.$refs.form.reset();
    }
  }
}
</script>
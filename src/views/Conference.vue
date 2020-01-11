<template>
  <div>
    <v-card width="800px" class="mx-auto mb-4">
      <v-card-text>
        <div>Id: {{this.conference.id}}</div>
        <div>Title: {{this.conference.title}}</div>
        <div>Acronym: {{this.conference.acronym}}</div>
        <div>Web Page: {{this.conference.webPage}}</div>
        <div>Expiration Date: {{this.conference.expirationDate}}</div>
        <div>City: {{this.conference.city}}</div>
        <div>Country: {{this.conference.country}}</div>
      </v-card-text>
    </v-card>
      <div class="text-center">
        <v-btn @click="goBack()">Back</v-btn>
      </div>
  </div>
</template>

<script>
import ConferenceService from "@/service/ConferenceService";

export default {
  data: () => ({
      conference: {}
  }),
  created() {
    ConferenceService.getConference(this.$route.params.id)
      .then(response => {
          console.log(response.data);
          this.conference = response.data
      });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
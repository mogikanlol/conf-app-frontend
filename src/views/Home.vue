<template>
  <div>
    <div class="d-flex flex-column mb-6">
      <v-card
        v-for="(item, index) in items" :key="index"
        class="mx-auto pa-2"
        outlined
        tile
        width="800px"
      >
          {{item.title}} {{item.id}}
      </v-card>
    </div>
  </div>
</template>

<script>
import ConferenceService from "@/service/ConferenceService";

export default {
  name: "home",
  data: () => ({
    items: []
  }),
  mounted() {
    ConferenceService.getConferences()
      .then(response => {
        console.log(response.data);
        this.items = response.data.content;
      });
  }
};
</script>

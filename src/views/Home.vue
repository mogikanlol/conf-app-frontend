<template>
  <div>
    <v-list width="800px" class="mx-auto">
      <v-list-item-group>
        <router-link
          v-for="(item, index) in items" 
          :key="index"
          :to="{name: 'conferencePage', params: { id: item.id}}" 
        >
          <v-list-item>
            <v-list-item-content>
                {{item.title}}
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import ConferenceService from "@/service/ConferenceService";

export default {
  name: "home",
  data: () => ({
    items: []
  }),
  created() {
    ConferenceService.getConferences()
      .then(response => {
        console.log(response.data);
        this.items = response.data.content;
      });
  }
};
</script>

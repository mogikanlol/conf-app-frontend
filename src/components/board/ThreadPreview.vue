<template>
  <div>

    <div class="thread-preview">
      <div class="header">{{thread.title}}</div>
      <div class="main">
        <!-- <img width="auto" height="200px" :src=thread.imageUrl> -->
        <img class="image-preview" width="100px" height="100px" :src=thread.imageUrl>
        <div>{{ thread.content }}</div>
        <div class="button">
          <router-link :to="{name: 'thread', params: {id: thread.id} }" class="wtf">
              In The Thread
          </router-link>
        </div>
      </div>
    </div>



    <!-- <v-card>
      <v-card-title>
        {{thread.title}}
      </v-card-title>
      <v-container> 
        <v-img width="100px" height="100px" :src=thread.imageUrl></v-img>
        <div>
          {{thread.content}}
        </div>
        <div>
          <router-link :to="{name: 'thread', params: {id: thread.id} }">
            <v-btn color="primary">In The Thread</v-btn> 
          </router-link>
        </div>
      </v-container>
    </v-card> -->
  </div>
</template>

<script>
export default {
  props: {
    thread: {}
  }
}
</script>

<style scoped>

.thread-preview {
  background-color: white;
  /* border: solid 1px; */
  box-shadow: 2px 2px 10px rgb(218, 217, 217);
  padding: 20px;
  margin-bottom: 10px;
}

.header {
  font-size: 18px;
  margin-bottom: 20px;
}

.image-preview {
  object-fit: cover;
}

.button {

  /* margin: 5px; */
  /* border: black solid 1px; */

  margin-top: 10px;

  /* color: white; */
  /* border-radius: 5px; */
  /* padding-top: 7px; */
  /* padding-bottom: 7px; */
  /* padding-left: 15px; */
  /* padding-right: 15px; */
  /* width: fit-content; */
  /* background-color: #1976d2; */
  /* box-shadow: 1px 1px 1px grey; */

  /* background-color: rgb(106, 7, 219); */
  /* background-color: #48fa1c; */

  /* margin: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
  border-radius: 5px; */
}

.wtf {
  text-decoration: none;
  color: white;


  color: white;
  border-radius: 5px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  width: fit-content;
  background-color: #1976d2;
  box-shadow: 1px 1px 1px grey;
}


</style>
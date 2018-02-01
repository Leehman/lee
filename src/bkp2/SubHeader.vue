<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat tile>
        <v-toolbar color=“cyan” dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Grid List</v-toolbar-title>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md class="grey lighten-4">
          <v-subheader>Server &amp; Ops Management</v-subheader>
          <v-layout row wrap>
            <v-flex xs4 v-for="card in cards1" :key="card.title">
              <v-card>
                <v-card-media height="300px" src="https://picsum.photos/200/300?image=586">
                  <span class="headline white--text pl-3 pt-3" v-text="card.title"></span>
                </v-card-media>
                <v-card-actions class=“white”>
                  <v-spacer></v-spacer>
                  <v-btn icon fab color="blue darken-1 white--text">
                    <v-icon size="16px" >fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon fab color="blue white--text">
                    <v-icon>fa-linkedin</v-icon>
                  </v-btn>
                  <v-btn icon fab color="grey darken-4 white--text">
                    <v-icon>fa-instagram</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
          <v-subheader>Places to See </v-subheader>
          <v-layout row wrap>
            <v-flex xs4 v-for="card in cards1" :key="card.title">
              <v-card>
                <v-card-media height="300px" src="https://picsum.photos/200/300?image=594">
                  <span class="headline white--text   pl-3 pt-3" v-text="card.title"></span>
                </v-card-media>
                <v-card-actions class=“white”>
                  <v-spacer></v-spacer>
                  <v-btn icon fab color="blue darken-1 white--text">
                    <v-icon size="16px">fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon fab color="red darken-1 white--text">
                    <v-icon>fa-google-plus</v-icon>
                  </v-btn>
                  <v-btn icon fab color="blue lighten-2 white--text">
                    <v-icon>fa-twitter</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    cards1: [
      {
        title: "Best "
      },
      {
        title: "Good"
      },
      {
        title: "Finest"
      }
    ]
  })
};
</script>

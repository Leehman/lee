<template>
  <v-footer height="auto" class="d-block">
    <v-card flat tile>
      <v-card-text class="white--text grey darken-2 ">
        <v-layout>
          <v-flex
            v-for="(col, i) in rows"
            :key="i"
            xs3
          >
            <span class="body-2" v-text="col.title.toUpperCase()"></span>
            <div
              v-for="(child, i) in col.children"
              :key="i"
              v-text="child"
            ></div>
          </v-flex>
        </v-layout>
        <div class="white--text text-xs-center">
          Register for free
          <v-btn round color="pink" dark>
            <v-icon dark></v-icon>SIGN UP!
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
           v-for="icon in icons"
           :key="icon"
           icon
           dark
           class="mx-3"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </div>
      </v-card-text>
      <v-card-actions class="white--text grey darken-3">
        <v-spacer></v-spacer>
        <span>&copy; 2018 Copyright:</span>
        <strong class="white--text">Vuetifyjs.com</strong>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: ['fa-facebook color="red lighten-2"', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-instagram'],
      rows: [
        {
          title: 'FOOTER CONTENT',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        },
        {
          title: 'LINKS',
          children: ['Link 1', 'Link 2', 'Link 3', 'Link 4']
        },
        {
          title: 'LINKS',
          children: ['Link 1', 'Link 2', 'Link 3', 'Link 4']
        },
        {
          title: 'LINKS',
          children: ['Link 1', 'Link 2', 'Link 3', 'Link 4']
        }
      ]
    })
  }
</script>

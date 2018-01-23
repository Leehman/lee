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
      <v-container fluid grid-list-md text-xs-center class="grey lighten-4">
          <v-subheader >Management  </v-subheader>
          <v-layout row wrap>
              <v-spacer></v-spacer>
                <v-flex xs4
                  v-bind="{ [`xs${card.flex}`]: true }"
                  v-for="card in cards1"
                  :key="card.title"
                >
                <v-card>
                    <v-card-media
                      height="300px"
                       :src="`https://picsum.photos/200/300?image=6`"

                    >
                   <span class="headline white--text" v-text="card.title"><v-icon>fa-bath</v-icon> </span>
                   </v-card-media>

                   <v-card-actions class=“white” >
                     <v-spacer></v-spacer>
                     <v-btn icon fab color="blue">
                       <v-icon size="16px">fa-facebook</v-icon>
                     </v-btn>
                     <v-btn icon fab color="red">
                       <v-icon>fa-google-plus</v-icon>
                     </v-btn>
                     <v-btn icon fab color="pink">
                       <v-icon>fa-twitter</v-icon>
                     </v-btn>
                   </v-card-actions>
                 </v-card>
               </v-flex>
              </v-layout>
              <v-subheader >Server Items  </v-subheader>
          </v-container >
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
 export default {
   data: () => ({
     cards1: [
       { title: 'Best ' ,  flex: 3 },
       { title: 'Good' ,  flex: 3},
       { title: 'Finest' ,  flex: 3}
     ]
   })
 }
</script>

<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat tile>
        <v-toolbar color="cyan" dark>
         <v-toolbar-side-icon></v-toolbar-side-icon>
         <v-toolbar-title>Inbox</v-toolbar-title>
         <v-btn icon>
           <v-icon>search</v-icon>
         </v-btn>
       </v-toolbar>

          <v-list two-line>
           <template v-for="(item, index) in items">
             <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
             <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
              <v-list-tile avatar v-else @click="" :key="item.title">
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

           </template>

          </v-list>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      items: [
         { header: 'For Sale' },
         { avatar: 'https://picsum.photos/200/300?image=6',
           title: 'Best',
           subtitle: "<span class='text--primary'>Butch</span> &mdash; Open for Review"
         },
         { divider: true, inset: true },
         { header: 'In Stock' },
         { avatar: 'https://picsum.photos/200/300?image=3',
           title: 'Better',
           subtitle: "<span class='text--primary'>Sandy</span> &mdash; Be right Back?"
         },
         { divider: true, inset: true },
         { header: 'Wanted and Looking' },
         { avatar: 'https://picsum.photos/200/300?image=0',
           title: 'Good',
           subtitle: "<span class='text--primary'>Joey</span> &mdash; Say it ain't so!"
         },
         { divider: true, inset: true },
      ]
    })
  }
</script>

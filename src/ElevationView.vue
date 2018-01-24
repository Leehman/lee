<template>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex  xs3 offset-xs1>
          <v-slider v-model="selected" prepend-icon="fa-arrows-h" min="0" max="24" thumb-label>

          </v-slider>
        </v-flex>

        <v-flex xs3 offset-xs1>
          <v-card v-bind:class="{ [`elevation-${selected}`]: true }" >
            <v-card-text text-xs-center ma-0>
               <!--p.text-xs-center.ma-0 Elevation {{ selected }} -->
               <div>Elevation {{ selected }}</div>
            </v-card-text>
          </v-card>
        </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'ElevationView',

    data () {
      return {

        selected: 0
      }
    }
  }
</script>

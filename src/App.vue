<template>
  <v-app>
    <v-content>
      <indigo-footer></indigo-footer>
      <teal-footer></teal-footer>

    </v-content>
  </v-app>
 </template>


<script>
  import IndigoFooter from './IndigoFooter'
  import TealFooter from './TealFooter'

  export default {
    components: {
      IndigoFooter,
      TealFooter
    }
  }
</script>

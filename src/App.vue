<template>
  <v-app>
    <v-content>
      <indigo-footer></indigo-footer>
      <teal-footer></teal-footer>
      <advanced-footer></advanced-footer>
    </v-content>
  </v-app>
 </template>


<script>
  import IndigoFooter from './IndigoFooter'
  import TealFooter from './TealFooter'
  import AdvancedFooter from './AdvancedFooter'

  export default {
    components: {
      IndigoFooter,
      AdvancedFooter,
      TealFooter
    }
  }
</script>

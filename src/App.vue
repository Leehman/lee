<template>
  <v-app>
    <v-content>
      <company-footer></company-footer>
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
  import CompanyFooter from './CompanyFooter'

  export default {
    components: {
      IndigoFooter,
      AdvancedFooter,
      CompanyFooter,
      TealFooter
    }
  }
</script>

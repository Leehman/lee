<template>

  <v-app>
    <v-content>
      <!-- <Gl-Subheader></Gl-Subheader> -->
      <Divider-List></Divider-List>
      <Image-View></Image-View>
      <Elevation-View></Elevation-View>
      <Text-View></Text-View>
      <Sub-Header></Sub-Header>
    </v-content>
  </v-app>
  <!--
  <v-app>
    <v-content>
      <company-footer></company-footer>
      <indigo-footer></indigo-footer>
      <teal-footer></teal-footer>
      <advanced-footer></advanced-footer>
    </v-content>
  </v-app>-->
 </template>


<script>
  //import GlSubheader from './GlSubheader'
  import SubHeader from './SubHeader'
  import ElevationView from './ElevationView'
  import TextView from './TextView'
  import ImageView from './ImageView'
  import DividerList from './DividerList'
  //import TealFooter from './TealFooter'
  //import AdvancedFooter from './AdvancedFooter'
  //import CompanyFooter from './CompanyFooter'

  export default {
    components: {
      //IndigoFooter,
      //AdvancedFooter,
      //CompanyFooter,
      //GlSubheader,
      SubHeader
      , ElevationView
      , TextView
      , ImageView
      , DividerList
    }
  }
</script>

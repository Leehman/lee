<template>

  <v-app>
    <v-content>
      <!--<Divider-List-Portrait></Divider-List-Portrait>
      <Divider-List></Divider-List>-->
      <ChatBottom-Sheet></ChatBottom-Sheet>
      <!--<Bottom-Sheet2></Bottom-Sheet2>
        <Sub-Header></Sub-Header>-->
  <!--
      <Image-View></Image-View>
      <Elevation-View></Elevation-View>
      <Text-View></Text-View>-->

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
  //import SubHeader from './SubHeader'
  //import ElevationView from './ElevationView'
  //import TextView from './TextView'
  //import ImageView from './ImageView'
  //import DividerList from './DividerList'
  //import BottomSheet2 from './BottomSheet2'
  import ChatBottomSheet from './ChatBottomSheet'
  //import DividerListPortrait from './DividerListPortrait'
  //import TealFooter from './TealFooter'
  //import AdvancedFooter from './AdvancedFooter'
  //import CompanyFooter from './CompanyFooter'

  export default {
    components: {
      //IndigoFooter,
      //AdvancedFooter,
      //CompanyFooter,
      //GlSubheader,
      //SubHeader
      //ElevationView
      ///, TextView
      //, ImageView
      //DividerList
      //, DividerListPortrait
      ChatBottomSheet
      //, BottomSheet2
    }
  }
</script>

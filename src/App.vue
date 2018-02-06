<template>

  <v-app>
    <v-content>
      <divider-Portrait></divider-Portrait>
      <divider-List></divider-List>
      <!--<ChatBottom-Sheet/>-->
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
import dividerList from './dividerList'
//import BottomSheet2 from './BottomSheet2'
//import ChatBottomSheet from './ChatBottomSheet';
import dividerPortrait from './dividerPortrait'
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
    dividerList
    , dividerPortrait
    //ChatBottomSheet
    //, BottomSheet2
  }
};
</script>

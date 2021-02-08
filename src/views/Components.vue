<template>
    <div>
        <stickyNav v-if="enableStickyNav" />
        <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel>
    </div>
</template>

<script>
import StickyNav from '../layout/StickyHeader';
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "components",
  components: {
    StickyNav,
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection
  },
  data() {
        return {
        enableStickyNav: null
        }
    },
    mounted() {
        // console.log('Index page created')
        // console.log('Sticky Nav mounted')
        window.addEventListener('scroll', this.handleNavDisplay)
    },
    // created() {},
    destroyed() {
        window.addEventListener('scroll', this.handleNavDisplay)
    },
    methods: {
        handleNavDisplay() {
        var y = window.scrollY
        if (y > 100 && !this.enableStickyNav) {
            // console.log ('Display New Menu')
            this.enableStickyNav = true
        } else if (y < 100 && this.enableStickyNav) {
            // console.log('Hide sticky Nav')
            this.enableStickyNav = false
        }
        }
    }
};
</script>

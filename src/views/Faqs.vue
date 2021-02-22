<template>
  <div>
      <stickyNav v-if="enableStickyNav" />
        <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 bg-gradient-info">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg-md">
                <div class="row text-center justify-content-center">
                    <h3 class="display-3 text-white">Frequently Asked Questions
                    </h3>
                    <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non illum ab, ducimus numquam voluptate, 
                        eaque earum voluptatibus necessitatibus dolore quis nulla harum optio corporis. Delectus iste molestias ipsa error?</p>
                </div>
            </div>
        </section>

        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-10">
                    <VueFaqAccordion 
                        :items="myItems"
                    />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import StickyNav from '../layout/StickyHeader';
import VueFaqAccordion from 'vue-faq-accordion'
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
 
export default {
  components: {
    VueFaqAccordion,
    Tabs,
    TabPane,
    StickyNav
  },
  data () {
    return {
      enableStickyNav: null,
      myItems: [
          {
            title: 'How many time zones are there in all?',
            value: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur animi nesciunt corrupti maiores iusto officiis voluptatem? Quos facere eum soluta quia neque assumenda. Perferendis, qui fugiat! Atque temporibus',
            category: 'Suite'
          },
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
            category: 'Suite'
          },
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
            category: 'Suite'
          },
          {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
            category: 'Suite'
          },
          {
            title: 'How long is a day and year on Venus?',
            value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
            category: 'Enterprise'
          },
          {
            title: 'What animal smells like popcorn?',
            value: 'Binturongs smell like popcorn.',
            category: 'Merchants & Dealers'
          },
          {
            title: 'What animal smells like popcorn?',
            value: 'Binturongs smell like popcorn.',
            category: 'Merchants & Dealers'
          },
          {
            title: 'What animal smells like popcorn?',
            value: 'Binturongs smell like popcorn.',
            category: 'Merchants & Dealers'
          }
        ]
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
}
</script>

<style>

</style>
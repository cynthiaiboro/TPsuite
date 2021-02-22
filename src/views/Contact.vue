<template>
  <div>
      <stickyNav v-if="enableStickyNav" />
        <section class="section section-shaped section-lg my-0">
            <div class="shape shape-style-1 bg-gradient-default">
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
                    <h3 class="display-3 text-white">Contact Us
                    </h3>
                    <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non illum ab, ducimus numquam voluptate, 
                        eaque earum voluptatibus necessitatibus dolore quis nulla harum optio corporis. Delectus iste molestias ipsa error?</p>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <!-- <div class="card bg-light shadow border-0 py-5">
                            <img src="img/theme/woman.jpg" height="300px" />
                        </div> -->
                        <img v-lazy="'img/theme/woman.jpg'" alt="Rounded image" class="img-fluid rounded shadow"
                            style="height: 350px;">
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <h3 class="display-3">Need a quick answer?</h3>
                            <p>TopupBox Help Desk has</p>
                            <ul class="list-unstyled mt-2">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Frequently Asked Questions</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Medium Blog</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">API documentation for developers</h6>
                                    </div>
                                </li>
                            </ul>
                            <p>Still need help? Fill the form below</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section mt-lg-5 pt-5">
            <div class="container px-5">
                <card gradient="secondary" shadow body-classes="p-lg-5">
                    <h4 class="mb-1">Want to work with us?</h4>
                    <p class="mt-0">Your project is very important to us.</p>
                    <base-input class="mt-5"
                                alternative
                                placeholder="Your name"
                                addon-left-icon="ni ni-user-run">
                    </base-input>
                    <base-input alternative
                                placeholder="Email address"
                                addon-left-icon="ni ni-email-83">
                    </base-input>
                    <base-input class="mb-4">
                            <textarea class="form-control form-control-alternative" name="name" rows="4"
                                        cols="80" placeholder="Type a message..."></textarea>
                    </base-input>
                    <base-button type="default" round block size="lg">
                        Send Message
                    </base-button>
                </card>
            </div>
        </section>
  </div>
</template>

<script>
import StickyNav from '../layout/StickyHeader';

export default {
  name: "contact",
  components: {
    StickyNav,
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
<template>
    <div>
        <stickyNav v-if="enableStickyNav" />
        <div class="position-relative">
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="shape-container">
                    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <b-carousel id="carousel1"
                                :interval="4000"
                                controls
                                fade>
                        <!-- Text slides with image -->
                        <b-carousel-slide>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>USSD</h4>
                                        <p>With simplified access to telco infrastructure, developers use our powerful SMS, USSD, 
                                        Voice, Airtime and Payments APIs to bring their ideas to life, as they build and sustain scalable businesses</p>
                                        <div class="row mt-5">
                                            <div class="col-8">
                                                <base-input alternative
                                                placeholder="Phone number"
                                                type="number"
                                                addon-left-icon="fa fa-phone"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-4">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/NKvkfTT.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>SMS</h4>
                                        <p>With simplified access to telco infrastructure, developers use our powerful SMS, USSD, 
                                        Voice, Airtime and Payments APIs to bring their ideas to life, as they build and sustain scalable businesses</p>
                                        <div class="row mt-5">
                                            <div class="col-4">
                                                <base-button tag="a"
                                                href="#"
                                                class="mb-3 mb-sm-0"
                                                type="info">
                                                Get Started
                                            </base-button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/NKvkfTT.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                            </div>
                        </b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-check-bold" size="lg" type="info" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">SMS</h6>
                                    <p class="description mt-3">Engage easily and effectively with your customers through text our messaging feature.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-istanbul" size="lg" type="info" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Build Something</h6>
                                    <p class="description mt-3">Engage easily and effectively with your customers through text our messaging feature.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-planet" size="lg" type="info" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Airtime</h6>
                                    <p class="description mt-3">Incentivise or make micro payments to your users by instantly sending virtual airtime.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center mt-5">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-check-bold" size="lg" type="info" shadow rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Download Argon</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                        that includes the most important components and features.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-istanbul" size="lg" type="info" shadow rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Build Something</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-planet" size="lg" type="info" shadow rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="info" shadow
                                  rounded></icon>
                            <h3>Making money can be difficult. Spending it shouldn’t be!</h3>
                            <p>You deserve a bank that offers you simple, reliable and convenient access to your money. With Eyowo, your money goes everywhere you go. We have got you covered!</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="info" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Easy Steps</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="info" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Safe and Secure</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="info" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">24hrs Service</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="info" shadow
                                  rounded></icon>
                            <h3>Making money can be difficult. Spending it shouldn’t be!</h3>
                            <p>You deserve a bank that offers you simple, reliable and convenient access to your money. With Eyowo, your money goes everywhere you go. We have got you covered!</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="info" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                                        <h6 class="mb-0">Easy Steps</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="info" circle class="mr-3" icon="ni ni-html5"></badge>
                                        <h6 class="mb-0">Safe and Secure</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="info" circle class="mr-3" icon="ni ni-satisfied"></badge>
                                        <h6 class="mb-0">24hrs Service</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-1">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/img-1-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                                <p class="lead text-italic text-white">The Arctic Ocean freezes every winter and much of
                                    the sea-ice then thaws every summer, and that process will continue whatever
                                    happens.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>Our customers</h3>
                            <p class="lead">Don't let your uses guess by attaching tooltips and popoves to any element.
                                Just make sure you enable them first via JavaScript.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <p>The kit comes with three pre-built pages to help you get started faster. You can change
                                the text and images and you're good to go.</p>
                            <a href="#" class="font-weight-bold text-warning mt-5">A beautiful UI Kit for impactful
                                websites</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-primary shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Why Choose Us?</h4>
                                <p class="text-white">We are the best in our field and here's why</p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="info" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">Security</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-primary">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="info" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">Accesibility</h5>
                                    <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                        every summer, and that process will continue whatever happens.</p>
                                    <a href="#" class="text-primary">Learn more</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row justify-content-center text-center mb-lg">
                    <div class="col-lg-8">
                        <h2 class="display-3">Our Channels</h2>
                        <p class="lead text-muted">All your devices are Welcome !</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/icons/common/mobile.png'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 150px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Mobile App</span>
                                    <small class="h6 text-muted">Available on the Android and iOS stores.</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/icons/common/laptop.svg'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 150px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Web App</span>
                                    <small class="h6 text-muted">Available at topupbox.com</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/icons/common/mobile.png'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 150px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">USSD</span>
                                    <small class="h6 text-muted">Dial *347*76# on your phone to begin.</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-4">
                            <img v-lazy="'img/icons/common/mobile.png'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 150px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">IVR</span>
                                    <small class="h6 text-muted">Call 01-7001511 and follow the instructions.</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import StickyNav from '../layout/StickyHeader';
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import AirtimeModal from './components/TopupBox/AirtimeModal.vue';

export default {
  name: "home",
  components: {
    BCarousel,
    BCarouselSlide,
    StickyNav,
    AirtimeModal,
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

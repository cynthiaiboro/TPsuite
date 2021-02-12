<template>
    <div>
        <stickyNav v-if="enableStickyNav" />
         <div>
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-landing shape-skew">
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
                <div class="py-5">
                    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <b-carousel id="carousel1"
                                :interval="4000"
                                controls
                                fade>
                        <!-- Text slides with image -->
                        <!-- <b-carousel-slide> -->
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-7 col-12 mt-5">
                                        <h4 class="text-default" data-aos="fade-right" data-aos-delay="800" data-aos-easing="ease-out-cubic" data-aos-duration="1000">PAYMENTS MADE EASY</h4>
                                        <p  class="text-default" data-aos="fade-right" data-aos-delay="1100" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Buy airtime, pay for your cable and clectricity bills and fund your wallet with our topup quick service.
                                           All at a go and make direct payment instantly. It's just too easy.</p>
                                        <div class="row mt-5" >
                                            <div class="col-md-8 col-12" data-aos-delay="1400" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                                <base-input alternative
                                                placeholder="Phone number"
                                                type="number"
                                                addon-left-icon="fa fa-phone"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                        <div class="d-flex mt-4">
                                            <img src="img/theme/playstore.svg" class="img-fluid">
                                            <img src="img/theme/appstore.svg" class="img-fluid mx-3">
                                            <img src="img/theme/code.svg" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 mb-5 floating pl-5" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                                        <img src="img/theme/airtime-hero.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                                
                            </div>
                        <!-- </b-carousel-slide> -->
                        <!-- <b-carousel-slide >
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-7 col-12 mt-5 order-md-1 order-2">
                                        <h4 class="text-default">CABLE</h4>
                                        <p  class="text-default">With our simplified payment, subscribe to your favourite cable station.
                                          Fill in your cable number and you're good to go.</p>
                                        <div class="row mt-5">
                                            <div class="col-md-8 col-12">
                                                <base-input alternative
                                                placeholder="Cable number"
                                                type="number"
                                                addon-left-icon="fa fa-phone"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-md-4 col-12">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 mb-5 pl-5">
                                        <img src="img/theme/why-us.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                            </div>
                        </b-carousel-slide> -->
                        </b-carousel>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <!-- <div class="text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-white">Our Products</h2>
                        <p class="lead mb-5">We offer a wide range of products and services.</p>
                    </div>
                </div> -->
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-12">
                        <div class="row row-grid" data-aos="fade-up" data-aos-delay="2000" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Enterprise</h6>
                                    <p class="description mt-3">Let your customers experience the very best. Register as a merchant to begin</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-istanbul" size="lg" type="primary" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Custom Page</h6>
                                    <p class="description mt-3">Engage easily and effectively with your customers through our messaging feature.</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-planet" size="lg" type="primary" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Mobile</h6>
                                    <p class="description mt-3">Available on mobile devices. Andriod and IOS inclusive.</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">USSD</h6>
                                    <p class="description mt-3">Easy steps and no internet required. Simply dial *347*76#</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-istanbul" size="lg" type="primary" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Unicard</h6>
                                    <p class="description mt-3">Engage easily and effectively with your customers through feature.</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-planet" size="lg" type="primary" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">API</h6>
                                    <p class="description mt-3">We provide APIs for simple Integration into your own apllication.</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
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
                    <div class="col-md-6 order-md-2 transform-perspective-right">
                        <img src="img/theme/humans.png" class="img-fluid rounded shadow-lg floating">
                    </div>
                    <div class="col-md-6 order-md-1" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="default" shadow
                                  rounded></icon>
                            <h3>Safe and Secure</h3>
                            <p>Using cutting-edge technology, we have built our application to ensure outmost safety</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Transparency</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Interaction</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">24hrs Service</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="default" shadow
                                  rounded></icon>
                            <h3>Hassle Free</h3>
                            <p>Accessible on varioud platforms and devices. Easy payment for your bills.</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Airtime</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Cable</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="default" circle class="mr-3" icon="ni ni-check-bold"></badge>
                                        <h6 class="mb-0">Electricity</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-1 transform-perspective-left">
                        <img src="img/theme/humans2.png" class="img-fluid rounded shadow-lg floating">
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-light shadow border-0">
                            <code>
                              <pre>
                                   # import package
                                    import africastalking

                                    #initialize SDK
                                    username = "YOUR_USERNAME"

                                    # Initialize a service e.g. airtime
                                    airtime = africastalking.AIRTIME

                                    # Use the service synchronously
                                    response = airtime.send([{
                                        phoneNumber: "+2547XXXXXXXX",
                                        amount: "KES 200"
                                    }])

                                    print(response)
                              </pre>
                            </code>
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>

                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-5" size="lg" type="default" shadow rounded></icon>

                            <h3>Learn and Build</h3>
                            <p class="lead">Developers' Guide</p>
                            <p>We have documented a set of developer tools that will make it easier for you to learn how to work with our APIs. These resources will help you build faster and test your applications before you deploy them to your users.</p>
                            <base-button tag="a" href="#" type="default" class="mt-4">
                                Learn more
                            </base-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
                            <img src="img/theme/why-us.png" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-building" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Our values</h4>
                                <!-- <p class="text-white">We are the best in our field and here's why</p> -->
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-bulb-61" gradient="info" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">Innovation</h5>
                                    <p>Goes to the core of providing the best possible solutions always – produce new technology.</p>
                                    <a href="#" class="text-primary">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-briefcase-24" gradient="info" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">Integrity</h5>
                                    <p>Encompasses honesty, truthfulness, reliability and honour. We strive to ensure easy accessibility and be very accommodative.</p>
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
                <div class="row justify-content-center text-center mb-4">
                    <div class="col-lg-8">
                        <h2 class="display-3">Our Channels</h2>
                        <p class="lead text-muted">All your devices are Welcome !</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-2" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="100" data-aos-duration="1000">
                            <img v-lazy="'img/icons/common/mobile.svg'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 100px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Mobile App</span>
                                    <small class="h6 text-muted">Available on the Android and iOS stores.</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-2" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="300" data-aos-duration="1000">
                            <img v-lazy="'img/icons/common/laptop.svg'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 100px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Web App</span>
                                    <small class="h6 text-muted">Available at <br /><a href="#">topupbox.com</a></small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-2" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="500" data-aos-duration="1000">
                            <img v-lazy="'img/icons/common/ussd.svg'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 100px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">USSD</span>
                                    <small class="h6 text-muted">Dial <a href="#">*347*76#</a> on your phone to begin.</small>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
                        <div class="px-2" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-delay="700" data-aos-duration="1000">
                            <img v-lazy="'img/icons/common/chatbot.svg'"
                                 class="img-center img-fluid shadow-lg-hover"
                                 style="width: 100px;">
                            <div class="pt-4 text-center">
                                <h5 class="title">
                                    <span class="d-block mb-1">Chat Bot</span>
                                    <small class="h6 text-muted">Chat with us live via our website</small>
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

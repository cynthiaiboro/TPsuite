<template>
    <div>
        <stickyNav v-if="enableStickyNav" />
        <section class="section section-lg section-shaped overflow-hidden my-0">
            <div class="shape shape-style-1 shape-dark shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container shape-container">
                <div class="row row-grid justify-content-between align-items-center">
                    <div class="col-lg-6">
                        <div class="row">
                            <h3 class="display-3 text-white">ENTERPRISE SERVICE
                                <span class="text-text-white">Integration for businessess</span>
                            </h3>
                            <p class="lead text-white">With our Merchant and Enterprise platforms using our well-detailed API documentation,
                                you can integrate airtime purchase for vending credit and data for all telecomms.</p>
                            <div class="btn-wrapper">
                                <router-link to="/login" class="btn btn-white">
                                    Become a Dealer
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 mb-lg-auto">
                        <div class="">
                            <img slot="icon" src="img/theme/business.png">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pb-5">
            <div class="container">
                <div class="text-center justify-content-center">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-dark">Customer Accessibility</h2>
                        <p class="lead mb-5">We offer a wide range of products and services.</p>
                    </div>
                </div>
                <div class="row row-grid align-items-center pb-md-5">
                    <div class="col-md-6 order-md-2" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <div class="pr-md-5">
                            <icon name="ni ni-bulb-61" class="mb-4" size="lg" type="default" shadow
                                  rounded></icon>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, adipisci id repellat veritatis explicabo 
                                asperiores dolorem incidunt cumque quis voluptatibus ipsum atque, recusandae necessitatibus, 
                                dolor iste? Quas provident eius maiores?
                            </p>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, adipisci id repellat veritatis explicabo 
                                asperiores dolorem incidunt cumque quis voluptatibus ipsum atque, recusandae necessitatibus, 
                                dolor iste? Quas provident eius maiores?
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-1 transform-perspective-left">
                        <img src="img/theme/humans2.png" class="img-fluid rounded shadow-lg floating">
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 bg-light-blue">
            <div class="container">
                <div class="container pt-lg">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-dark">Use Cases</h2>
                        <p class="lead text-dark">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent
                            tihs year down to low ice.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="default"></icon>
                        <h5 class="text-dark mt-3">Building tools</h5>
                        <p class="text-dark mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="default"></icon>
                        <h5 class="text-dark mt-3">Grow your market</h5>
                        <p class="text-dark mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="default"></icon>
                        <h5 class="text-dark mt-3">Launch time</h5>
                        <p class="text-dark mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section class="section bg-white">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow text-white border-0 py-5">
            <code>
                <pre>
                    # import package
                    import topupbox

                    #initialize SDK
                    username = "YOUR_USERNAME"

                    # Initialize a service e.g. airtime
                    airtime = topupbox.AIRTIME

                    # Use the service synchronously
                    response = airtime.send([{
                        beneficiary: "+2547XXXXXXXX",
                        amount: "200"
                    }])

                    print(response)
                </pre>
            </code>
                           
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-settings" class="mb-3" size="lg" type="default" shadow rounded></icon>

                            <h3>All you need to build</h3>
                            <p class="lead">Integrate our APIs</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fuga nihil non doloremque nemo assumenda blanditiis dolorem voluptatem? Alias, autem debitis.</p>
                            <base-button tag="a" href="#" type="default" class="mt-4">
                                Learn more
                            </base-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import StickyNav from '../layout/StickyHeader';

export default {
  name: "enterprise",
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

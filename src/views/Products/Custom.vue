<template>
    <div>
        <stickyNav v-if="enableStickyNav" />
        <section class="section section-lg section-shaped overflow-hidden my-0">
            <div class="shape shape-style-1 shape-default shape-skew">
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
                            <h3 class="display-3 text-white">CUSTOM PAGE
                                <span class="text-text-white">Lorem ipsum dolor sit amet</span>
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
                <!-- <div class="text-center justify-content-center">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-default">Product Features</h2>
                        <p class="lead mb-5">We offer a wide range of products and services.</p>
                    </div>
                </div>
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-12">
                        <div class="row row-grid" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div class="col-lg-4">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="xs" type="default" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-default text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">Let your customers experience the very best. Register as a merchant to begin</p>
                                        </div>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="xs" type="default" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-default text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">Let your customers experience the very best. Register as a merchant to begin</p>
                                        </div>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="xs" type="default" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-default text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">Let your customers experience the very best. Register as a merchant to begin</p>
                                        </div>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div> -->


                <div class="text-center justify-content-center">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-default">Customer Accessibility</h2>
                        <p class="lead mb-5">We offer a wide range of products and services.</p>
                    </div>
                </div>
                <div class="row justify-content-center pb-5" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-check-bold" size="lg" type="default" shadow class="mb-4">
                                </icon>
                                <h6 class="text-default text-uppercase">USSD</h6>
                                <p class="description mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe corrupti cum deserunt. 
                                    Quisquam expedita nisi, maiores voluptas magnam cumque aut in non rem placeat vero amet eos unde. Quis, id!</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-check-bold" size="lg" type="default" shadow class="mb-4">
                                </icon>
                                <h6 class="text-default text-uppercase">USSD</h6>
                                <p class="description mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Voluptas fugiat commodi dicta voluptate quaerat consectetur pariatur officiis suscipit eum, voluptatem tempora doloribus. 
                                    Quas dolores eaque quod totam, repellat numquam cupiditate.</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-check-bold" size="lg" type="default" shadow class="mb-4">
                                </icon>
                                <h6 class="text-default text-uppercase">USSD</h6>
                                <p class="description mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ea itaque soluta cupiditate consequatur voluptates, inventore amet vel nihil iste est quia? Similique minus exercitationem 
                                    autem voluptatum harum dicta sint odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-light shadow border-0 py-5">
                            
            <pre>
                <code>
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
                </code>
            </pre>
                            
                            <!-- <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>

                            </blockquote> -->
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

        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="container pt-lg">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3 text-default">Use Cases</h2>
                        <p class="lead text-default">According to the National Oceanic and Atmospheric Administration,
                            Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent
                            tihs year down to low ice.</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="default"></icon>
                        <h5 class="text-default mt-3">Building tools</h5>
                        <p class="text-default mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="default"></icon>
                        <h5 class="text-default mt-3">Grow your market</h5>
                        <p class="text-default mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="default"></icon>
                        <h5 class="text-default mt-3">Launch time</h5>
                        <p class="text-default mt-3">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import StickyNav from '../../layout/StickyHeader';

export default {
  name: "custom",
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
<template>
  <div>
      <div class="position-relative">
            <section class="my-0">
                <!-- <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> -->
                <div class="">
                    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <b-carousel id="carousel1"
                                :interval="4000"
                                controls
                                fade>
                        <!-- Text slides with image -->
                        <b-carousel-slide class="airtime-slide">
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>AIRTIME</h4>
                                        <p>Buy Airtime and make instant payment for yourself, friends and family.
                                           All you have to do is simply put in the beneficiary number below</p>
                                        <div class="row mt-5">
                                            <div class="col-md-8 col-12">
                                                <base-input alternative
                                                placeholder="Phone number"
                                                type="number"
                                                addon-left-icon="fa fa-phone"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-md-4 col-12 action-btn">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 mb-5">
                                        <img src="img/theme/airtime-hero.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                                <!-- <div class="row justify-content-center align-items-center">
                                    <div class="col-lg-7 text-center pt-lg">
                                        <h4>AIRTIME</h4>
                                        <p class="">With simplified access to telco infrastructure, developers use our powerful SMS, USSD, 
                                        Voice, Airtime and Payments APIs to bring their ideas to life, as they build and sustain scalable businesses</p>
                                        <div class="btn-wrapper">
                                            <base-button tag="a"
                                                        href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                                        class="mb-3 mb-sm-0"
                                                        type="info"
                                                        icon="fa fa-code">
                                                Components
                                            </base-button>
                                            <base-button tag="a"
                                                        href="https://www.creative-tim.com/product/vue-argon-design-system"
                                                        class="mb-3 mb-sm-0"
                                                        type="white"
                                                        icon="ni ni-cloud-download-95">
                                                Download Vue
                                            </base-button>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide class="cable-slide">
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4 class="text-right">CABLE</h4>
                                        <p>With our simplified payment, subscribe to your favourite cable station.
                                          Fill in your cable number and you're good to go.
                                        </p>
                                        <div class="row mt-5">
                                            <div class="col-md-8 col-12">
                                                <base-input alternative
                                                placeholder="Cable number"
                                                type="number"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-md-4 col-12 action-btn">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 mb-5">
                                        <img src="img/theme/hero-cable.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide class="electricity-slide">
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>ELECTRICTY</h4>
                                        <p>Why should bills payment be a hassle?
                                            Simply buy and pay for your electricity needs now!
                                        </p>
                                        <div class="row mt-5">
                                            <div class="col-md-8 col-12">
                                                <base-input alternative
                                                placeholder="Meter number"
                                                type="number"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-md-4 col-12 action-btn">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1 mb-5"><img src="img/theme/light.png" class="mx-auto" alt="slide">
                                    </div>
                                </div>
                            </div>
                        </b-carousel-slide>
                        <b-carousel-slide class="fund-slide">
                            <div class="container">
                                <div class="row mb-5">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>FUND WALLET</h4>
                                        <p>Need to Fund your wallet?
                                           Fill in your mobile number and proceed.
                                           It's as easy as can be!
                                        </p>
                                        <div class="row mt-5">
                                            <div class="col-md-8 col-12">
                                                <base-input alternative
                                                placeholder="Wallet number"
                                                type="number"
                                                >
                                                </base-input>
                                            </div>
                                            <div class="col-md-4 col-12 action-btn">
                                                <airtime-modal />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-12 mb-5"><img src="img/theme/hero-wallet.png" class="mx-auto" alt="slide">
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
                <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 footer-bg shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-300">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3">Products</h2>
                        <p class="lead mb-5">We offer a wide range of products and services.</p>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-check-bold" size="lg" type="info" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Enterprise</h6>
                                    <p class="description mt-3">Let your customers experience the very best. Register as a merchant to begin</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-istanbul" size="lg" type="info" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Custom Page</h6>
                                    <p class="description mt-3">Engage easily and effectively with your customers through our messaging feature.</p>
                                    <base-button tag="a" href="#" type="info" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <icon name="ni ni-planet" size="lg" type="info" shadow class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase">Mobile</h6>
                                    <p class="description mt-3">Available on mobile devices. Andriod and IOS inclusive.</p>
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
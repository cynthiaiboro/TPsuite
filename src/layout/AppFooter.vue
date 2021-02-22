<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="default"
                      no-body
                      shadow-size="lg"
                      class="border-0 floating"
                      >
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">Get Started Now</h3>
                                <p class="lead text-white mt-3">Begin to enoy our variety of services hassle free and from the comfort of your homes!</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <base-button tag="a" href="https://www.creative-tim.com/product/vue-argon-design-system"
                                             type="white" block size="lg">
                                    Get Started
                                </base-button>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
           </section>
        </div>
        <div class="container">
            <div class="footerBg">
                <section id="footer">
                <div class="container">
                    <div class="row mb-5">
                    <div class="col-md-4 col-sm-12 mb-4">
                        <router-link slot="brand" class="mr-lg-5" to="/">
                            <img src="img/brand/blue-logo.png" alt="logo" class="img-fluid" width="180px">
                        </router-link>
                        <p class="mt-4 pr-md-3 footer-text-link">
                            163B Sinari Danajiro Str, <br>
                            Victoria Island, <br>
                            Lagos, Nigeria.
                        </p>
                    
                        <div class="mt-1">
                            <i class="fa fa-twitter footer-text-link" style="font-size: 16px">
                            </i>
                            <i class="fa fa-facebook mx-4 footer-text-link" style="font-size: 16px">
                            </i>
                            <i class="fa fa-instagram footer-text-link" style="font-size: 16px">
                            </i>
                        </div>


                    </div>
                    <div class="col-md-6 col-xs-12 py-4">
                        <div class="row">
                        <div class="col-xs-6 col-6">
                            <!-- Product -->
                            <h6 class="mb-4 footer-header">
                            <span>PRODUCTS</span>
                            </h6>
                            <p class="my-3">
                            <router-link to="/enterprise" class="footer-text-link">Enterprise</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/custom" class="footer-text-link">Custom Page</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/ussd" class="footer-text-link">USSD</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/mobile" class="footer-text-link">Mobile</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/unicard" class="footer-text-link">Unicard</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/api" class="footer-text-link">API</router-link>
                            </p>
                            

                        </div>
                        <div class="col-xs-6 col-6">
                            <h6 class="mb-4 footer-header">
                            <span>RESOURCES</span>
                            </h6>
                            <p class="my-3">
                            <router-link to="/pricing" class="footer-text-link">Pricing</router-link>
                            </p>
                            <p class="my-3">
                            <a href="" class="footer-text-link" target="blank">Developers</a>
                            </p>
                            <p class="my-3">
                            <router-link to="/business" class="footer-text-link">Businesses</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/merchants" class="footer-text-link">Merchants</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/resellers" class="footer-text-link">Resellers</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/banks" class="footer-text-link">Banks</router-link>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-xs-12 mb-4 py-4">
                        <div class="row">
                        <div class="col-xs-6 col-12">
                            <h6 class="mb-4 footer-header">
                            <span>LEGAL</span>
                            </h6>
                            <p class="my-3">
                            <router-link to="/terms-and-conditions" class="footer-text-link">Terms & Conditions</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Learn</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/faqs" class="footer-text-link">FAQs</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/contact-us" class="footer-text-link">Contact Us</router-link>
                            </p>
                            <p class="my-3 footer-text-link">
                              support@topupbox.com
                            </p>
                            <p class="my-3 footer-text-link">
                            +234 800 0000 000
                            </p>

                                    
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener" class="text-dark font-weight-bold">TopupBox.</a> All Right Reserved
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="nav nav-footer justify-content-end">
                        <!-- <li class="nav-item">
                            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Creative Tim</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                        </li>
                        <li class="nav-item">
                            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                               class="nav-link" target="_blank" rel="noopener">MIT License</a>
                        </li> -->
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>

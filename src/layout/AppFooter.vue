<template>
    <footer class="footer has-cards">
        <div class="container container-lg">
            <section class="section section-lg pt-0">
            <div class="container">
                <card gradient="primary"
                      no-body
                      shadow-size="lg"
                      class="border-0 floating">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">Experience TopUp Box</h3>
                                <p class="lead text-white mt-3">Join over 3,000,000 people who spend, send, receive, save and borrow money with just their phone number.</p>
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
            <!-- <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                    <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/creativetimofficial"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div> -->
            <div class="footerBg">
                <section id="footer">
                <div class="container">
                    <div class="row mb-5">
                    <div class="col-md-4 col-sm-12 footer-jiggle-head mb-4">
                        <router-link slot="brand" class="mr-lg-5" to="/">
                            <img src="img/brand/blue-logo.jpg" alt="logo" height="100px" width="300px">
                        </router-link>
                    
                        <div class="mt-4">
                            <base-button tag="a" href="#" type="info" icon="fa fa-twitter" rounded
                                icon-only></base-button>
                            <base-button tag="a" href="#" type="primary" icon="fa fa-facebook" rounded
                                icon-only></base-button>
                            <base-button tag="a" href="#" type="danger" icon="fa fa-instagram" rounded
                                icon-only></base-button>
                        </div>


                    </div>
                    <div class="col-md-6 col-xs-12 py-4">
                        <div class="row">
                        <div class="col-xs-6 col-6 footer-jiggle">
                            <!-- Product -->
                            <h6 class="mb-4 footer-header">
                            <span>PRODUCTS</span>
                            </h6>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">USSD</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Enterprise</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Custom Page</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Mobile</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Unicard</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">API</router-link>
                            </p>
                            

                        </div>
                        <div class="col-xs-6 col-6 footer-jiggle">
                            <h6 class="mb-4 footer-header">
                            <span>RESOURCES</span>
                            </h6>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Pricing</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Use Cases</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Developers</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Learn</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">FAQs </router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Contact US</router-link>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-xs-12 mb-4 py-4">
                        <div class="row">
                        <div class="col-xs-6 col-12 footer-jiggle">
                            <h6 class="mb-4 footer-header">
                            <span>LEGAL</span>
                            </h6>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Terms & Conditions</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Privacy</router-link>
                            </p>
                            <p class="my-3">
                            <router-link to="/" class="footer-text-link">Guidelines</router-link>
                            </p>
                            <p class="my-3 footer-text-link text-primary">
                            support@topupbox.com
                            </p>
                            <p class="my-3 footer-text-link text-primary">
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
                        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">TopUp Box.</a> All Right Reserved
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

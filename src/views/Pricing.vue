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
                    <h3 class="display-3 text-white">Pricing
                    </h3>
                    <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias non illum ab, ducimus numquam voluptate, 
                        eaque earum voluptatibus necessitatibus dolore quis nulla harum optio corporis. Delectus iste molestias ipsa error?</p>
                </div>
            </div>
        </section>
        <section class="section bg-secondary pt-lg-5">
            <div class="container pt-5">
                <div class="text-center justify-content-center">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-dark mb-4">Products</h2>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-4 col-xs-12 my-sm-3">
                        <div class="card pricing-card text-center py-5 ">
                            <div class="card-body pricing-card-body px-5">
                                <h5 class="card-title">ENTERPRISE</h5>
                                <p class="users" style="font-size:13px">1 - 48 users</p>
                                <hr class="hr-primary">
                                <p style="font-size:12px" class="card-text pt-2 pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam delectus eius, est rerum incidunt cum rep</p>
                                <base-button tag="a" href="#" type="info" class="mt-4">
                                    Contact Us
                                </base-button>
                            </div>
                            </div>
                    </div>
                    <div class="col-md-4 col-xs-12 my-sm-3">
                        <div class="card pricing-card text-center py-5 ">
                            <div class="card-body pricing-card-body px-5">
                                <h5 class="card-title">MERCHANTS</h5>
                                <p class="users" style="font-size:13px">1 - 48 users</p>
                                <hr class="hr-primary">
                                <p style="font-size:12px" class="card-text pt-2 pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam delectus eius, est rerum incidunt cum rep</p>
                                <base-button tag="a" href="#" type="info" class="mt-4">
                                    Contact Us
                                </base-button>
                            </div>
                            </div>
                    </div>
                    <div class="col-md-4 col-xs-12 my-sm-3">
                        <div class="card pricing-card text-center py-5 ">
                            <div class="card-body pricing-card-body px-5">
                                <h5 class="card-title">RESELLERS</h5>
                                <p class="users" style="font-size:13px">1 - 48 users</p>
                                <hr class="hr-primary">
                                <p style="font-size:12px" class="card-text pt-2 pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, numquam delectus eius, est rerum incidunt cum rep</p>
                                <base-button tag="a" href="#" type="info" class="mt-4">
                                    Contact Us
                                </base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-5">
            <div class="container">
                <h4 class="display-3 mb-5 text-dark">Commissions</h4>
                <table class="table telco-table text-center">
                    <thead class="table-light">
                        <tr>
                        <th scope="col">Telco</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Deposit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">MTN</th>
                            <td>30%</td>
                            <td>#5,000</td>
                        </tr>
                        <tr>
                            <th scope="row">GLO</th>
                            <td>30%</td>
                            <td>#5,000</td>
                        </tr>
                        <tr>
                            <th scope="row">AIRTEL</th>
                            <td>30%</td>
                            <td>#5,000</td>
                        </tr>
                        <tr>
                            <th scope="row">9MOBILE</th>
                            <td>30%</td>
                            <td>#5,000</td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </section>
  </div>
</template>

<script>
import StickyNav from '../layout/StickyHeader';
 
export default {
  name: "pricing",
  components: {
    StickyNav
  },
  data () {
    return {
      enableStickyNav: null,
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

<style scoped>
.naira {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
</style>
<template>
    <div class="row mt-5" >
        <div class="col-md-8 col-12" data-aos-delay="1400" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <base-input alternative
            placeholder="Phone number"
            type="number"
            v-model="beneficiary"
            addon-left-icon="fa fa-phone"
            >
            </base-input>
        </div>
        <div class="col-md-4 col-12">
          <div>
            <base-button block type="primary" class=" mb-3" @click="modals.modal3 = true">
                TopUp
            </base-button>

            <modal :show.sync="modals.modal3"
                    body-classes="p-0"
                    modal-classes="modal modal-dialog-centered modal-sm h-100vh">
                <card type="secondary" shadow
                        header-classes="bg-white pb-5"
                        body-classes="px-lg-5 py-lg-5"
                        class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Quick Topup</small>
                        </div>
                        <form role="form input-group">
                            <base-input alternative
                                        class="mb-3"
                                        v-model="beneficiary"
                                        placeholder="Phone number"
                                        addon-left-icon="ni ni-phone">
                            </base-input>
                            <select v-model="billerId" class="form-control mb-3" placeholder="Network">
                              <option v-for="option in options" :value="option.value" :key="option.value">{{option.text}}</option>
                            </select>
                            <base-input alternative
                                        type="number"
                                        v-model="amount"
                                        placeholder="Amount"
                                        addon-left-icon="ni ni-money">
                            </base-input>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="buyAirtime()">Topup</base-button>
                            </div>
                        </form>
                    </template>
                    <!-- <paystack
                      :amount="amounttobuy"
                      :email="email"
                      :paystackkey="paystackkey"
                      :reference="reference"
                      :callback="processPayment"
                      :close="close"
                    >
                      Make Payment
                  </paystack> -->
                </card>
            </modal>
        </div>
      </div>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import paystack from 'vue-paystack';

export default {
  name: "airtime-modal",
  components: {
    Modal,
    paystack
  },
  data() {
    return {
      modals: {
        modal3: false
      },
      beneficiary: "",
      amount: "",
      billerId: "",
      options: [
        { value: 'mtn', text: 'MTN' },
        { value: 'glo', text: 'GLO' },
        { value: 'airtel', text: 'AIRTEL' },
        { value: '9mobile', text: 'MOBILE' }
      ]
    };
  },

  methods: {
    async buyAirtime() {
      try {
          await this.$http.post(
              '/payforward/initialise-direct-transaction',
              {
                beneficiary: this.beneficiary,
                amount: this.amount,
                billerId: this.billerId,
                paymentChannel: "PAYSTACK",
                rechargeType: 'airtime',
              }
          );   
      } catch (error) {
          console.log(error);
          if (!error.response) {
              console.log('Something went wrong!')
          }
      }
    }
  }
};
</script>
<style>
</style>
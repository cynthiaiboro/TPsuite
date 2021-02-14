<template>
    <div>
        <base-button block type="primary" class=" mb-3" @click="modals.modal3 = true">
            TopUp
        </base-button>

        <modal :show.sync="modals.modal3"
                body-classes="p-0"
                modal-classes="modal modal-dialog-centered modal-sm">
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
                        <select v-model="rechargeType" class="form-control mb-3" placeholder="Network">
                          <option v-for="option in options" :key="option.value">{{option.text}}</option>
                        </select>
                        <base-input alternative
                                    type="number"
                                    v-model="amount"
                                    placeholder="Amount"
                                    addon-left-icon="ni ni-money">
                        </base-input>
                        <div class="text-center">
                            <base-button type="primary" class="my-4" @click="alert()">Topup</base-button>
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
</template>

<script>
import Modal from "@/components/Modal.vue";
import paystack from 'vue-paystack';

export default {
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
      rechargeType: "",
      options: [
        { value: 'mtn', text: 'MTN' },
        { value: 'glo', text: 'GLO' },
        { value: 'airtel', text: 'AIRTEL' },
        { value: '9mobile', text: 'MOBILE' }
      ],
      paystackkey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxx", //paystack public key
      email: "foobar@example.com", // Customer email
      amounttobuy: 1000000 // in kobo
    };
  },

  methods: {
    alert(){
      console.log(process.env.BASE_URL)
    },
    async buyAirtime() {
      try {
          await this.$http.post(
              '/payforward/initialise-direct-transaction',
              {
                beneficiary: this.beneficiary,
                amount: this.amount,
                rechargeType: this.rechargeType
              }
          );   
      } catch (error) {
          console.log(error);
          if (!error.response) {
              this.$notify({
                  type: "error",
                  text:
                      "We are having issues connecting to the internet. Check your internet",
                  duration: -5000
              });
          }
      }
    }
  }
};
</script>
<style>
</style>
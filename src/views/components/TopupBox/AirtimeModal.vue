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
                                    placeholder="Phone number"
                                    addon-left-icon="ni ni-phone">
                        </base-input>
                        <select class="form-control mb-3" placeholder="Network">
                          <option>MTN</option>
                          <option>Airtel</option>
                          <option>Glo</option>
                        </select>
                        <base-input alternative
                                    type="number"
                                    placeholder="Amount"
                                    addon-left-icon="ni ni-money">
                        </base-input>
                        <div class="text-center">
                            <base-button type="primary" class="my-4">Topup</base-button>
                        </div>
                    </form>
                </template>
            </card>
        </modal>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        modal3: false
      }
    };
  }
};
</script>
<style>
</style>
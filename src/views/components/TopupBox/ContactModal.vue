<template>
    <div class="row mt-5" >
        <!-- <div class="col-md-8 col-12" data-aos-delay="1400" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <base-input alternative
            placeholder="Phone number"
            type="number"
            v-model="beneficiary"
            addon-left-icon="fa fa-phone"
            >
            </base-input>
        </div> -->
        <!-- <div class="col-md-4 col-12">
          
      </div> -->
      <div>
            <base-button block type="primary" class=" mb-3" @click="modals.modal2 = true">
                Learn more
            </base-button>

            <modal :show.sync="modals.modal2"
                body-classes="p-0"
                modal-classes="modal modal-dialog-centered modal-sm h-100vh">
                <card gradient="secondary" shadow body-classes="p-lg-5">
                    <small class="mb-1 text-default text-center text-muted" >Want to work with us?</small>
                    <base-input class="mt-4"
                                alternative
                                placeholder="Your name"
                                addon-left-icon="ni ni-user-run">
                    </base-input>
                    <base-input alternative
                                placeholder="Email address"
                                addon-left-icon="ni ni-email-83">
                    </base-input>
                    <base-input class="mb-4">
                            <textarea class="form-control form-control-alternative" name="name" rows="4"
                                    cols="80" placeholder="Type a message..."></textarea>
                    </base-input>
                    <base-button type="default" round block size="lg">
                        Send Message
                    </base-button>
                </card>
            </modal>
        </div>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "contact-modal",
  components: {
    Modal,
  },
   data() {
    return {
      modals: {
        modal2: false
      },
    }
   }
};
</script>
<style>
</style>
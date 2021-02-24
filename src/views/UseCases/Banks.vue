<template>
    <div>
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
                        <h3 class="display-3 text-white">Banks
                            <span class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                        </h3>
                        <p class="lead text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur animi nesciunt corrupti </p>
                    </div>
                    <div class="col-lg-5 mb-lg-auto">
                        <div class="">
                            <img slot="icon" src="img/theme/business.png">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg pt-lg-0">
            <div class="container">
                <div class="text-center justify-content-center">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-default">Features</h2>
                        <p class="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veniam repudiandae enim placeat.</p>
                    </div>
                </div>
                <div class="row justify-content-center mb-4">
                    <div class="col-lg-12">
                        <div class="row row-grid" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div class="col-lg-6">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-primary text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta doloremque eum placeat quisquam, 
                                                quibusdam aut rerum omnis eaque voluptatum sunt sapiente, 
                                                beatae porro tenetur excepturi, minus sint ut dolorum.
                                            </p>
                                        </div>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-6">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-primary text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta doloremque eum placeat quisquam, 
                                                quibusdam aut rerum omnis eaque voluptatum sunt sapiente, 
                                                beatae porro tenetur excepturi, minus sint ut dolorum.
                                            </p>
                                        </div>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-12">
                        <div class="row row-grid" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <div class="col-lg-6">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-primary text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta doloremque eum placeat quisquam, 
                                                quibusdam aut rerum omnis eaque voluptatum sunt sapiente, 
                                                beatae porro tenetur excepturi, minus sint ut dolorum.
                                            </p>
                                        </div>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-6">
                                <card class="border-0" shadow body-classes="py-5">
                                    <div class="row">
                                        <div class="col-3 d-flex justify-content-center align-items-center">
                                            <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                            </icon>
                                        </div>
                                        <div class="col-9">
                                            <h6 class="text-primary text-uppercase">Enterprise</h6>
                                            <p class="description mt-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dicta doloremque eum placeat quisquam, 
                                                quibusdam aut rerum omnis eaque voluptatum sunt sapiente, 
                                                beatae porro tenetur excepturi, minus sint ut dolorum.
                                            </p>
                                        </div>
                                    </div>
                                </card>
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

         <section class="py-5">
            <div class="container">
                <div class="text-center justify-content-center">
                    <div class="col-lg-12">
                        <h2 class="display-3 text-default">Impact</h2>
                        <p class="lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veniam repudiandae enim placeat.</p>
                    </div>
                </div>
                <div class="row justify-content-center" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                </icon>
                                <h6 class="text-primary text-uppercase">USSD</h6>
                                <p class="description mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe corrupti cum deserunt. 
                                    Quisquam expedita nisi, maiores voluptas magnam cumque aut in non rem placeat vero amet eos unde. Quis, id!</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                </icon>
                                <h6 class="text-primary text-uppercase">USSD</h6>
                                <p class="description mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Voluptas fugiat commodi dicta voluptate quaerat consectetur pariatur officiis suscipit eum, voluptatem tempora doloribus. 
                                    Quas dolores eaque quod totam, repellat numquam cupiditate.</p>
                            </div>
                            <div class="col-lg-4 text-center">
                                <icon name="ni ni-check-bold" size="lg" type="primary" shadow class="mb-4">
                                </icon>
                                <h6 class="text-primary text-uppercase">USSD</h6>
                                <p class="description mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ea itaque soluta cupiditate consequatur voluptates, inventore amet vel nihil iste est quia? Similique minus exercitationem 
                                    autem voluptatum harum dicta sint odio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section class="section section-lg">
            <div class="container">
                
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2 transform-perspective-right">
                        <img src="img/theme/humans.png" class="img-fluid rounded shadow-lg floating">
                    </div>
                    <div class="col-md-6 order-md-1" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <div class="pr-md-5">
                            <icon name="ni ni-bulb-61" class="mb-5" size="lg" type="default" shadow
                                  rounded></icon>
                            <h3>Safe and Secure</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sunt impedit ullam quae adipisci consequuntur blanditiis eligendi ipsam. 
                                In ducimus consectetur repellat temporibus soluta tenetur corrupti commodi! Autem, dignissimos quod!</p>
                        </div>
                    </div>
                </div>

                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <div class="pr-md-5">
                            <icon name="ni ni-bulb-61" class="mb-5" size="lg" type="default" shadow
                                  rounded></icon>
                            <h3>Hassle Free</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam quisquam iste nemo praesentium velit repudiandae commodi, 
                                tempora consequatur mollitia, voluptates reprehenderit quo est quasi suscipit provident, alias necessitatibus ipsa.</p>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-1 transform-perspective-left">
                        <img src="img/theme/humans2.png" class="img-fluid rounded shadow-lg floating">
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
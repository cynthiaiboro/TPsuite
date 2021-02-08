<template>
    <div>
        <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <!-- <img src="img/brand/white.png" alt="logo"> -->
                <h2 class="text-white text-bold">TopUp Box</h2>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <!-- <img src="img/brand/blue.png"> -->
                        TopUp Box
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link nav-link-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Products</span>
                    </a>
                    <router-link to="/" class="dropdown-item">Enterprise</router-link>
                    <router-link to="/" class="dropdown-item">Custom Page</router-link>
                    <router-link to="/" class="dropdown-item">Mobile</router-link>
                    <router-link to="/" class="dropdown-item">USSD</router-link>
                    <router-link to="/" class="dropdown-item">Unicard</router-link>
                    <router-link to="/" class="dropdown-item">API</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link nav-link-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">TopUp Now</span>
                    </a>
                    <router-link to="/" class="dropdown-item">Airtime</router-link>
                    <router-link to="/" class="dropdown-item">Electricity</router-link>
                    <router-link to="/" class="dropdown-item">Cable</router-link>
                    <router-link to="/" class="dropdown-item">Fund Wallet</router-link>
                </base-dropdown>
                <li class="nav-item">
                    <router-link to="/landing" class="nav-link nav-link-icon">Pricing</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip">
                        Developers
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip">
                        Use Cases
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip">
                        Learn
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                    <span class="btn-inner--icon">
                    </span>
                        <span class="nav-link-inner--text">Get Started</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
    </div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
    components: {
        BaseNav,
        CloseButton,
        BaseDropdown
    }
};
</script>
<style>
</style>

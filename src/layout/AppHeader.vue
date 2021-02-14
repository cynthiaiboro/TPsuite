<template>
    <div>
        <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="" to="/">
                <img src="img/brand/blue-logo.png" alt="logo" class="img-fluid" width="180px">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue-logo.png" alt="logo" class="img-fluid" width="120px">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-inner--text" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip">
                        Enterprise
                    </a>
                </li>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link nav-link-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Products</span>
                    </a>
                    <router-link to="/component" class="dropdown-item">Custom Page</router-link>
                    <router-link to="/component" class="dropdown-item">Mobile</router-link>
                    <router-link to="/component" class="dropdown-item">USSD</router-link>
                    <router-link to="/component" class="dropdown-item">Unicard</router-link>
                    <router-link to="/component" class="dropdown-item">API</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link nav-link-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Use Cases</span>
                    </a>
                    <router-link to="/component" class="dropdown-item">Businesses</router-link>
                    <router-link to="/component" class="dropdown-item">Merchants</router-link>
                    <router-link to="/component" class="dropdown-item">Resellers</router-link>
                    <router-link to="/component" class="dropdown-item">Banks</router-link>
                </base-dropdown>
                <li class="nav-item">
                    <router-link to="/landing" class="nav-link nav-link-inner--text">Pricing</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-inner--text" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip">
                        Developers
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                    <span class="btn-inner--icon">
                    </span>
                        <span class="">Get Started</span>
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

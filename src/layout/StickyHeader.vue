<template>
    <div>
        <header class="header-global">
        <base-nav class="navbar-main shadow" transparent type="" id="navigation" effect="light" expand>
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
                    <router-link to="/enterprise" class="nav-link nav-link-inner--text text-default">Enterprise</router-link>
                </li>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link nav-link-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text text-default">Products</span>
                    </a>
                    <router-link to="/custom" class="dropdown-item">Custom Page</router-link>
                    <router-link to="/mobile" class="dropdown-item">Mobile</router-link>
                    <router-link to="/ussd" class="dropdown-item">USSD</router-link>
                    <router-link to="/unicard" class="dropdown-item">Unicard</router-link>
                    <router-link to="/api" class="dropdown-item">API</router-link>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link nav-link-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text text-default">Use Cases</span>
                    </a>
                    <router-link to="/business" class="dropdown-item">Businesses</router-link>
                    <router-link to="/merchants" class="dropdown-item">Merchants</router-link>
                    <router-link to="/resellers" class="dropdown-item">Resellers</router-link>
                    <router-link to="/banks" class="dropdown-item">Banks</router-link>
                </base-dropdown>
                <li class="nav-item">
                    <router-link to="/pricing" class="nav-link nav-link-inner--text text-default">Pricing</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-inner--text text-default" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip">
                        Developers
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link to="/register" class="btn btn-default btn-icon">
                    <span class="btn-inner--icon">
                    </span>
                        <span class="">Get Started</span>
                    </router-link>
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

<style scoped>
#navigation {
    position: fixed;
    background-color: #fff !important;
}
</style>
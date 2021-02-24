import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import WhiteHeader from "./layout/WhiteHeader";
import AppFooter from "./layout/AppFooter";
import Enterprise from "./views/Enterprise.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Custom from "./views/Products/Custom.vue";
import Api from "./views/Products/Api.vue";
import Mobile from "./views/Products/Mobile.vue";
import Unicard from "./views/Products/Unicard.vue";
import Ussd from "./views/Products/Ussd.vue";
import Banks from "./views/UseCases/Banks.vue";
import Business from "./views/UseCases/Business.vue";
import Merchants from "./views/UseCases/Merchants.vue";
import Resellers from "./views/UseCases/Resellers.vue";
import Pricing from "./views/Pricing.vue";
import Faqs from "./views/Faqs.vue";
import Contact from "./views/Contact.vue";
import TermsConditions from "./views/TermsConditions.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/enterprise",
      name: "enterprise",
      components: {
        header: WhiteHeader,
        default: Enterprise,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: WhiteHeader,
        default: Login,
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/custom",
      name: "custom",
      components: {
        header: WhiteHeader,
        default: Custom,
        footer: AppFooter
      }
    },
    {
      path: "/unicard",
      name: "unicard",
      components: {
        header: AppHeader,
        default: Unicard,
        footer: AppFooter
      }
    },
    {
      path: "/mobile",
      name: "mobile",
      components: {
        header: AppHeader,
        default: Mobile,
        footer: AppFooter
      }
    },
    {
      path: "/ussd",
      name: "ussd",
      components: {
        header: AppHeader,
        default: Ussd,
        footer: AppFooter
      }
    },
    {
      path: "/api",
      name: "api",
      components: {
        header: AppHeader,
        default: Api,
        footer: AppFooter
      }
    },
    {
      path: "/banks",
      name: "banks",
      components: {
        header: AppHeader,
        default: Banks,
        footer: AppFooter
      }
    },
    {
      path: "/business",
      name: "business",
      components: {
        header: WhiteHeader,
        default: Business,
        footer: AppFooter
      }
    },
    {
      path: "/merchants",
      name: "merchants",
      components: {
        header: AppHeader,
        default: Merchants,
        footer: AppFooter
      }
    },
    {
      path: "/resellers",
      name: "resellers",
      components: {
        header: AppHeader,
        default: Resellers,
        footer: AppFooter
      }
    },
    {
      path: "/pricing",
      name: "pricing",
      components: {
        header: WhiteHeader,
        default: Pricing,
        footer: AppFooter
      }
    },
    {
      path: "/faqs",
      name: "faqs",
      components: {
        header: WhiteHeader,
        default: Faqs,
        footer: AppFooter
      }
    },
    {
      path: "/contact-us",
      name: "contact",
      components: {
        header: WhiteHeader,
        default: Contact,
        footer: AppFooter
      }
    },
    {
      path: "/terms-and-conditions",
      name: "terms",
      components: {
        header: WhiteHeader,
        default: TermsConditions,
        footer: AppFooter
      }
    }

  ],
  // scrollBehavior: to => {
  //   if (to.hash) {
  //     return { selector: to.hash };
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});

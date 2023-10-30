import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import FAQ from "../views/FAQ.vue";
import Shop from "../components/Cart/Shop.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../components/Cart/Cart.vue";
import Checkout from "../components/Cart/CheckOut.vue";
import Wishlist from "../components/Cart/WishList.vue";
import OrderSuccess from "../components/Cart/OrderSuccess.vue";
import Login from "../auth/Login.vue";
import Register from "../auth/Register.vue";
import UserProfile from "../user/UserProfile.vue";
import UserSetting from "../user/UserSetting.vue";
import Orders from "../components/Cart/Orders.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },
    {
      path: "/shop/:id",
      name: "singleProduct",
      component: SingleProduct,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: Wishlist,
    },
    {
      path: "/order-success",
      name: "order-success",
      component: OrderSuccess,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/user-profile",
      name: "user-profile",
      component: UserProfile,
    },
    {
      path: "/user-setting",
      name: "user-setting",
      component: UserSetting,
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;

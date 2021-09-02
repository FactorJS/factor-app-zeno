import { addFilter, setting, addRoutes } from "@factor/api"

if (setting("headTags") != "") {
  addFilter({
    key: "addZenoFont",
    hook: "factor_head",
    callback: (_: []) => {
      return [..._, setting("headTags.font")]
    },
    priority: 200,
  })
}

// CONTENT ROUTES

addRoutes({
  key: "zenoRoutes",
  routes: [
    {
      path: "/",
      component: setting("home.component"),
      meta: { nav: true },
    },
    {
      path: "/about",
      component: (): Promise<any> => import("./v-about.vue"),
      meta: { nav: true },
    },
    {
      path: "/contact",
      component: (): Promise<any> => import("./v-contact.vue"),
      meta: { nav: true },
    },
    {
      path: "/pricing",
      component: (): Promise<any> => import("./v-pricing.vue"),
      meta: { nav: true },
    },
  ],
})

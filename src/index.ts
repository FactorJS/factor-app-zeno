import { UserConfigApp } from "@factor/api"

export const setup = (): UserConfigApp => {
  return {
    routes: [
      {
        path: "/",
        component: (): Promise<any> => import("./home/PageHome.vue"),
        meta: { nav: true },
      },
      {
        path: "/about",
        component: (): Promise<any> => import("./PageAbout.vue"),
        meta: { nav: true },
      },
      {
        path: "/contact",
        component: (): Promise<any> => import("./PageContact.vue"),
        meta: { nav: true },
      },
      {
        path: "/pricing",
        component: (): Promise<any> => import("./PagePricing.vue"),
        meta: { nav: true },
      },
    ],
  }
}

<template>
  <main class="bg-gray-100">
    <Hero
      :align="`left`"
      subheadline="About Theme Zeno"
      headline="Built with Factor CMS"
      class="text-left"
    >
      <template v-slot:hero-content>
        <div class="content entry-content">
          Zeno is a minimalist theme suited for the needs of IT companies and
          tech startups. Zeno styles are powered by Tailwind, a low-level CSS
          framework.
        </div>
      </template>
    </Hero>

    <section class="max-w-6xl mx-auto px-4 py-16 md:px-8">
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <div class="w-full relative w-full lg:w-2/5">
          <img :src="ValuesImg1" class="w-full shadow-xl rounded" />
          <img
            :src="ValuesImg2"
            class="
              w-full
              relative
              mt-8
              bottom-0
              right-auto
              left-0
              shadow-xl
              rounded
              lg:w-2/3 lg:mt-0 lg:absolute lg:-ml-20
            "
          />
        </div>
        <div class="w-full pt-8 lg:pt-0 md:pl-16 lg:w-3/5">
          <div
            class="
              relative
              z-10
              px-4
              py-6
              rounded
              bg-white
              shadow-lg
              md:px-4 md:mx-8
            "
          >
            <h2
              class="
                font-normal
                tracking-tight
                leading-tight
                text-2xl text-purple-500
                md:text-3xl
              "
            >
              A company with core values:
            </h2>
          </div>

          <div
            class="
              rounded-lg
              -mt-8
              p-8
              pt-12
              border-solid border-2 border-purple-500
              flex flex-col
              md:flex-row md:flex-wrap
            "
          >
            <div
              v-for="(item, index) in values"
              :key="index"
              class="w-full my-2"
            >
              <h2
                v-if="item.title"
                class="font-normal tracking-tight text-2xl text-purple-900"
              >
                {{ item.title }}
              </h2>
              <div
                v-if="item.content"
                v-html="item.content"
                class="text-lg text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-8">
        <div class="max-w-4xl mx-auto pb-6 text-center md:pb-12 md:w-full">
          <h3 class="custom-uppercase text-purple-500">Meet the Minds</h3>
          <h1
            class="
              font-normal
              tracking-tight
              text-3xl
              lg:text-4xl
              text-purple-900
            "
          >
            The Team
          </h1>
        </div>

        <!-- Members List -->
        <div class="max-w-3xl mx-auto flex flex-col">
          <section
            v-for="(member, index) in members"
            :key="index"
            class="flex flex-col rounded mb-12 p-8 bg-gray-100 md:flex-row"
          >
            <div class="w-full md:w-2/5">
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="
                  w-full
                  rounded
                  mx-auto
                  mb-8
                  border-solid border border-gray-300
                  md:w-4/5
                "
              />
            </div>
            <div class="w-full bg-gray-100 md:w-3/5">
              <h2
                v-if="member.title"
                v-html="member.title"
                class="block text-left custom-uppercase mb-0 text-purple-500"
              />
              <h1
                v-if="member.name"
                v-html="member.name"
                class="block text-left font-normal tracking-tight mb-3 text-2xl"
              />
              <div
                v-if="member.content"
                v-html="member.content"
                class="text-lg text-gray-600"
              />
              <div class="transition-all flex mt-4 -ml-2">
                <template v-for="(item, i) in member.links">
                  <router-link
                    :to="item.path"
                    :target="item.target"
                    class="
                      transition-all
                      mx-2
                      h-8
                      w-8
                      rounded
                      leading-loose
                      text-center
                      shadow-lg
                      hover:text-purple-500 hover:bg-white
                    "
                  >
                    {{ item.name }}
                  </router-link>
                </template>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <SiteCta />
  </main>
</template>

<script lang="ts" setup>
import SiteCta from "./el/Cta.vue"
import Hero from "./el/Hero.vue"

import ValuesImg1 from "./img/about1.jpg"
import ValuesImg2 from "./img/about2.jpg"

const values = [
  {
    _item: "simplicity",
    title: "Simplicity",
    content:
      "Do more with less. Given the choice, choose minimization over maximization.",
  },
  {
    _item: "karma",
    title: "Karma",
    content:
      "Be as altruistic as possible. History has proven that karma works in mysterious ways.",
  },
  {
    _item: "humility",
    title: "Humility",
    content:
      "Continually assess and reassess the things you believe & actions you're taking. Never assume.",
  },
]

import MemberImg1 from "./img/member1.jpg"
import MemberImg2 from "./img/member2.jpg"
import MemberImg3 from "./img/member3.jpg"
import MemberImg4 from "./img/member4.jpg"
import MemberImg5 from "./img/member5.jpg"
import MemberImg6 from "./img/member6.jpg"
const members = [
  {
    _item: "member_1",
    photo: MemberImg1,
    title: "Co-Founder",
    name: "Zeno Elea 1",
    content:
      "custom element Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
    links: [
      {
        path: "https://www.linkedin.com/",
        name: "LinkedIn",
        target: "_blank",
      },
      {
        path: "https://github.com/",
        name: "Github",
        target: "_blank",
      },
      {
        path: "https://angel.co/",
        name: "AngelList",
        target: "_blank",
      },
    ],
  },
  {
    _item: "member_2",
    photo: MemberImg2,
    title: "Co-Founder",
    name: "Zeno Elea",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    _item: "member_3",
    photo: MemberImg3,
    title: "Managing Partner",
    name: "Zeno Elea",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    _item: "member_4",
    photo: MemberImg4,
    title: "Managing Partner",
    name: "Zeno Elea",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    _item: "member_5",
    photo: MemberImg5,
    title: "Managing Partner",
    name: "Zeno Elea",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
  {
    _item: "member_6",
    photo: MemberImg6,
    title: "Managing Partner",
    name: "Zeno Elea",
    content:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit",
  },
]
// export default {
//   components: {
//     factorLink,
//     factorIcon,
//     "el-member": () => import("./el/member.vue"),
//     "el-hero": () => import("./el/hero.vue"),
//     "site-cta": () => import("./el/Cta.vue"),
//   },
//   data() {
//     return {
//       loading: true,
//       active: false,
//       aboutHero: setting("about.hero"),
//       aboutHeroPretitle: setting("about.hero.pretitle"),
//       aboutHeroTitle: setting("about.hero.title"),
//       aboutHeroContent: setting("about.hero.content"),
//       aboutTeamPretitle: setting("about.team.pretitle"),
//       aboutTeamTitle: setting("about.team.title"),
//       aboutTeamLayout: setting("about.team.layout"),
//       aboutTeamMembers: setting("about.team.members"),
//     }
//   },
//   methods: {
//     setting,
//   },
//   metaInfo() {
//     return {
//       title: setting("about.meta.title"),
//       description: setting("about.meta.description"),
//       image: setting("about.meta.image"),
//     }
//   },
// }
</script>

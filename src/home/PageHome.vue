<template>
  <div>
    <HomeIntro />
    <section class="section-2 bg-gray-100 px-8 py-12">
      <div class="max-w-6xl mx-auto">
        <h1 class="custom-uppercase text-center text-purple-500">
          Working with the following clouds:
        </h1>
        <div class="flex flex-wrap items-center justify-center mt-8">
          <template v-for="(item, index) in logos">
            <factor-link
              v-if="item.link"
              :key="index"
              :path="item.link"
              :target="item.target"
              class="block w-full px-4 py-6 sm:w-1/3"
            >
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.alt"
                class="mx-auto"
              />
            </factor-link>
            <div v-else-if="item.image" class="block w-full px-4 py-6 sm:w-1/3">
              <img :src="item.image" :alt="item.alt" class="mx-auto" />
            </div>
          </template>
        </div>
      </div>
    </section>

    <section
      id="solutions"
      class="section-3 relative bg-cover bg-center bg-purple-900 px-8 py-16"
    >
      <div
        class="
          relative
          z-20
          max-w-6xl
          mx-auto
          flex flex-col
          bg-white
          rounded
          shadow-xl
          md:flex-row md:flex-wrap
        "
      >
        <div
          v-for="(item, index) in process"
          :key="index"
          class="w-full even:bg-gray-100 md:w-1/3"
        >
          <div class="p-10">
            <img v-if="item.icon" :src="item.icon" :alt="item.title" />
            <h2
              v-if="item.title"
              class="font-normal tracking-tight text-3xl text-purple-900 mt-5"
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
    </section>

    <section
      id="software-as-a-service"
      class="section-4 bg-cover bg-center bg-white"
    >
      <div
        class="
          max-w-6xl
          mx-auto
          flex flex-col
          py-8
          md:flex-row
          lg:pt-12 lg:pb-24
        "
      >
        <div class="flex flex-col p-8 justify-center md:w-3/5">
          <h3 class="custom-uppercase text-purple-500">
            Software-as-a-Service
          </h3>
          <h1
            class="
              font-normal
              tracking-tight
              text-3xl
              lg:text-4xl
              text-purple-900
            "
          >
            The last software you'll need!
          </h1>
          <div class="mt-2 text-base leading-relaxed text-gray-600 lg:text-xl">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
          </div>
          <div class="mt-8">
            <ElemButton to="/contact">Contact Us</ElemButton>
          </div>
        </div>
        <FigureDevops />
      </div>
    </section>

    <section class="section-5 overflow-hidden relative bg-gray-100">
      <div class="max-w-6xl mx-auto px-8 pt-16 lg:pt-24 lg:pb-12">
        <div class="flex flex-col md:flex-row md:flex-wrap">
          <div class="pb-12 md:w-full">
            <h3 class="custom-uppercase text-center text-purple-500">
              Open Source
            </h3>
            <div class="flex items-center justify-center">
              <h1
                class="
                  font-normal
                  tracking-tight
                  text-center text-3xl
                  lg:text-4xl
                  text-purple-900
                "
              >
                Product A + Product B =
                <img :src="CustomHeart" class="inline-block lg:ml-2" />
              </h1>
            </div>
          </div>
          <div class="relative z-10 pb-8 md:pb-0 md:pr-8 md:w-3/5">
            <template v-for="(item, index) in prod">
              <div
                class="
                  mb-10
                  p-10
                  transition-all
                  rounded
                  bg-white
                  custom-card-left
                  md:mb-20
                "
              >
                <img v-if="item.image" :src="item.image" :alt="item.alt" />
                <div
                  v-if="item.content"
                  v-html="item.content"
                  class="
                    text-base
                    mt-4
                    leading-relaxed
                    text-gray-600
                    lg:text-xl
                  "
                />
              </div>
            </template>
          </div>
          <div
            class="
              relative
              z-0
              max-h-full
              w-full
              top-auto
              right-0
              bottom-0
              left-auto
              md:pt-40 md:absolute md:w-1/2
            "
          >
            <FigureInfra title="mycode.ts" class="md:pt-24" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-6">
      <div class="max-w-6xl mx-auto px-8 py-16 lg:py-24">
        <div class="max-w-xs mx-auto">
          <h3 class="custom-uppercase text-center text-purple-500">
            Success Stories
          </h3>
          <h1
            class="
              mt-2
              text-normal
              tracking-tight
              leading-tight
              text-3xl text-center text-purple-900
              lg:text-4xl
            "
          >
            "Our customers love what we do!"
          </h1>
        </div>
        <div
          class="
            flex flex-col
            text-base
            mt-6
            md:flex-row md:flex-wrap
            lg:text-xl
          "
        >
          <template v-for="(item, index) in testimonials">
            <div class="w-full p-8 md:w-1/2">
              <blockquote v-if="item.content" class="relative inline-block">
                <span
                  class="
                    absolute
                    text-6xl text-purple-600
                    font-serif
                    -ml-10
                    -mt-6
                  "
                  >&ldquo;</span
                >
                <span
                  v-html="item.content"
                  class="leading-relaxed text-gray-600"
                />
              </blockquote>
              <footer class="flex items-center mt-6">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.author + ' - ' + item.info"
                  class="
                    rounded-full
                    h-10
                    w-10
                    ml-auto
                    shadow-lg
                    md:h-16 md:w-16
                  "
                />
                <div class="ml-4 text-base">
                  <cite v-if="item.author" class="block">{{
                    item.author
                  }}</cite>
                  <cite v-if="item.info" class="block">{{ item.info }}</cite>
                </div>
              </footer>
            </div>
          </template>
        </div>
      </div>
    </section>

    <SiteCta />
  </div>
</template>

<script lang="ts" setup>
import SiteCta from "../el/Cta.vue"
import HomeIntro from "./HomeIntro.vue"
import ElemButton from "@factor/ui/ElemButton.vue"
import FigureDevops from "../el/FigureDevops.vue"
import FigureInfra from "../el/FigureInfra.vue"

import DigitalOcean from "../img/digital-ocean.svg"
import GoogleCloud from "../img/google-cloud-platform.svg"
import Aws from "../img/aws.svg"

import Member4 from "../img/member4.jpg"
import Member3 from "../img/member3.jpg"
import CustomHeart from "../img/custom-heart.svg"

const logos = [
  {
    _item: "aws",
    link: "https://aws.amazon.com/",
    target: "_blank",
    image: Aws,
    alt: "Amazon Web Services",
  },
  {
    _item: "google",
    link: "https://cloud.google.com/",
    target: "_blank",
    image: GoogleCloud,
    alt: "Google Cloud Platform",
  },
  {
    _item: "digitalocean",
    link: "https://www.digitalocean.com/",
    target: "_blank",
    image: DigitalOcean,
    alt: "Digital Ocean",
  },
]

const testimonials = [
  {
    _item: "testimonial_1",
    content: `@Zeno designed and fully managed our migration to #productA and on-premises enterprise deployments. They've been absolutely fantastic!`,
    image: Member4,
    author: "Kate Brennan",
    info: "CEO, Lorem ipsum",
  },
  {
    _item: "testimonial_2",
    content: `@Zeno designed and fully managed our migration to #productB and on-premises enterprise deployments. They've been absolutely fantastic!`,
    image: Member3,
    author: "Sebastian Hodges",
    info: "CEO, SedLaudantium",
  },
]

import PlanImg from "../img/plan.svg"
import BuildImg from "../img/build.svg"
import ManageImg from "../img/manage.svg"
import GearsImg from "../img/gears.svg"
import CloudsImg from "../img/clouds.svg"
import SecurityImg from "../img/security.svg"
const process = [
  {
    _item: "plan",
    icon: PlanImg,
    title: "Plan",
    content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
  },
  {
    _item: "build",
    icon: BuildImg,
    title: "Build",
    content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
  },
  {
    _item: "manage",
    icon: ManageImg,
    title: "Manage",
    content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
  },
  {
    _item: "gears",
    icon: GearsImg,
    title: "Automation",
    content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
  },
  {
    _item: "clouds",
    icon: CloudsImg,
    title: "Cloud",
    content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
  },
  {
    _item: "security",
    icon: SecurityImg,
    title: "Security",
    content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
  },
]

import LogoProductA from "../img/logo-producta.svg"
import LogoProductB from "../img/logo-productb.svg"
const prod = [
  {
    _item: "producta",
    image: LogoProductA,
    alt: "Product A",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
  },
  {
    _item: "productb",
    image: LogoProductB,
    alt: "Product B",
    content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
  },
]
// export default {

//   data() {
//     return {
//       loading: true,
//       section1Title: setting("home.intro.title"),
//       section1Content: setting("home.intro.content"),
//       section1Buttons: setting("home.intro.buttons"),
//       section1Figure: setting("home.intro.figure"),
//       section2Title: setting("home.logos.title"),
//       section2List: setting("home.logos.list"),
//       section3Items: setting("home.section3.items"),
//       section4Pretitle: setting("home.section4.pretitle"),
//       section4Title: setting("home.section4.title"),
//       section4Content: setting("home.section4.content"),
//       section4Buttons: setting("home.section4.buttons"),
//       section5Pretitle: setting("home.section5.pretitle"),
//       section5Title: setting("home.section5.title"),
//       section5TitleIcon: setting("home.section5.titleIcon"),
//       section5Items: setting("home.section5.items"),
//       section6Pretitle: setting("home.testimonials.pretitle"),
//       section6Title: setting("home.testimonials.title"),
//       section6Items: setting("home.testimonials.items"),
//     }
//   },

//   metaInfo() {
//     return {
//       title: setting("home.meta.title"),
//       description: setting("home.meta.description"),
//       image: setting("home.meta.image"),
//     }
//   },
// }
</script>

<style lang="less">
.section-3 {
  &:after {
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 30%;
    background: #fff;
  }
}
.section-3 {
  background-image: url(../img/light-pattern.svg);
}
.section-4 {
  background-image: url(../img/lighter-pattern.svg);
}
</style>

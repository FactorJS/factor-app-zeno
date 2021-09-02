<template>
  <div>
    <Hero
      subheadline="Pricing that scales with your business."
      headline="Awesome Plans"
      class="text-left md:pb-40"
    >
      <template v-slot:hero-content>
        <div class="content entry-content">
          Choose the plan that suits your needs.
        </div>
      </template>
    </Hero>

    <section class="p-8 bg-gray-100 lg:py-12">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row">
        <template v-for="(item, index) in packages">
          <div class="w-full mt-4 md:-mt-32 md:w-4/12">
            <div
              class="
                rounded
                bg-white
                shadow
                transition-all
                hover:shadow-xl
                md:mx-4
              "
              :class="item.classes"
            >
              <div class="px-8 py-4">
                <h1
                  v-if="item.name"
                  class="
                    font-normal
                    tracking-tight
                    leading-tight
                    text-3xl text-primary-900
                    lg:text-4xl
                  "
                >
                  {{ item.name }}
                </h1>
                <p
                  v-if="item.description"
                  v-html="item.description"
                  class="text-gray-600"
                />
              </div>
              <ul class="text-base lg:text-lg">
                <li
                  v-if="item.price"
                  v-html="item.price"
                  class="
                    px-8
                    py-4
                    text-3xl
                    font-normal
                    tracking-tight
                    leading-tight
                    text-primary-900
                    bg-gray-100
                  "
                />
                <template v-for="(listItem, i) in item.list">
                  <li class="px-8 py-4">
                    <span v-html="listItem.content" />
                  </li>
                </template>
              </ul>
              <div class="relative z-10 flex justify-center py-6">
                <ElemButton :to="item.buttonLink" :class="item.buttonClasses">
                  {{ item.buttonText }}
                </ElemButton>
              </div>
            </div>
          </div>
        </template>
      </div>
      <p class="text-xs text-center mt-8">* 10 day money back guarantee</p>
    </section>

    <section class="py-8 lg:py-12 bg-white">
      <div class="max-w-3xl mx-auto">
        <h3
          class="
            font-normal
            leading-tight
            tracking-tight
            text-center text-3xl
            lg:text-4xl
            text-primary-900
          "
        >
          FAQs
        </h3>
        <div class="mt-6 mx-6">
          <template v-for="(question, ind) in questions">
            <Accordion :title="question.title" class="bg-gray-100 rounded-lg">
              <div
                v-html="question.content"
                class="text-base leading-relaxed lg:text-xl"
              />
            </Accordion>
          </template>
        </div>
      </div>
    </section>
    <Cta />
  </div>
</template>
<script lang="ts" setup>
import Accordion from "./el/Accordion.vue"
import Hero from "./el/Hero.vue"
import Cta from "./el/Cta.vue"
import ElemButton from "@factor/ui/ElemButton.vue"
const packages = [
  {
    classes: "md:mt-6",
    name: "Starter",
    description: "All the basics for businesses that are just getting started.",
    price: `$199 <span class="text-base">per month</span>`,
    list: [
      {
        content: "At vero eos et accusamus",
      },
      {
        content: "Et iusto odio dignissimos",
      },
      {
        content: `Ducimus qui blanditiis`,
      },
      {
        content: "Lorem ipsum dolor sit",
      },
      {
        content: "Omnis iste natus error sit",
      },
    ],
    buttonLink: "/contact",
    buttonText: "Contact Us",
    buttonClasses:
      "btn btn-ol border-primary-500 text-primary-500 hover:text-primary-700  hover:border-primary-500",
  },
  {
    name: "Pro",
    description:
      "Better insights for growing businesses that want more customers.",
    price: `$499 <span class="text-base">per month</span>`,
    list: [
      {
        content: "Voluptatem accusantium",
      },
      {
        content: "Omnis iste natus error",
      },
      {
        content: "Sed ut perspiciatis unde",
      },
      {
        content: "Lorem ipsum dolor sit",
      },
      {
        content: "Incididunt ut labore et dolore magna aliqua",
      },
    ],
    buttonLink: "/contact",
    buttonText: "Contact Us",
    buttonClasses: "btn text-primary-100 bg-primary-500 hover:bg-primary-600",
  },
  {
    classes: "md:mt-6",
    name: "Business",
    description: "Advanced features for pros who need more customization.",
    price: `$899 <span class="text-base">per month</span>`,
    list: [
      {
        content: "Nam libero tempore",
      },
      {
        content: "Soluta nobis est eligendi",
      },
      {
        content: `Optio cumque nihil`,
      },
      {
        content: "Lorem ipsum dolor sit",
      },
      {
        content: "Consectetur adipiscing elit amet",
      },
    ],
    buttonLink: "/contact",
    buttonText: "Contact Us",
    buttonClasses:
      "btn btn-ol border-primary-500 text-primary-500 hover:text-primary-700  hover:border-primary-500",
  },
]

const questions = [
  {
    _item: "q1",
    title: "Can I buy a lower tier and upgrade later?",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  },
  {
    _item: "q2",
    title: "What if I don't like it?",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  },
  {
    _item: "q3",
    title: "Can I cancel at anytime?",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  },
  {
    _item: "q4",
    title: "What happens if I go over my plans included hours?",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  },
  {
    _item: "q5",
    title: "Who is this for?",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  },
  {
    _item: "q6",
    title: "Are there any discounts available?",
    content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
  },
]
</script>

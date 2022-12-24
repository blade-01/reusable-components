<template>
  <div class="my-6">
    <div class="flex justify-center items-center sm:space-x-4 flex-wrap">
      <a
        href="https://greensock.com/get-started/"
        target="_blank"
        class="rc-link"
      >
        GSAP BASICS <span class="mdi mdi-open-in-new"></span>
      </a>
    </div>
    <div>
      <div class="mb-3 box box-one h-10 w-10 rounded-md bg-green-400"></div>
      <div class="mb-3 box box-two h-10 w-10 rounded-md bg-purple-400"></div>
      <div class="mb-3 box box-three h-10 w-10 rounded-md bg-blue-400"></div>
      <div class="mb-3 box box-four h-10 w-10 rounded-md bg-pink-400"></div>
      <div class="mb-3 box box-five h-10 w-10 rounded-md bg-yellow-400"></div>
      <div class="mb-3 box box-six h-10 w-10 rounded-md bg-gray-400"></div>

      <div class="flex justify-center flex-wrap gap-3">
        <button class="btn" @click="playTimeline">play</button>
        <button class="btn" @click="pauseTimeline">pause</button>
        <button class="btn" @click="reverseTimeline">reverse</button>
        <button class="btn" @click="seekTimeline">seek</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue-demi";
const timeline = gsap.timeline({ defaults: { duration: 1, x: 200 } }); // Run one animation after the end of the previous one
const playTimeline = () => {
  timeline.play();
};
const pauseTimeline = () => {
  timeline.pause();
};
const reverseTimeline = () => {
  timeline.reverse();
};
const seekTimeline = () => {
  timeline.seek(0.2);
};
onMounted(() => {
  timeline
    .to(".box", {
      scale: 0.85,
      stagger: 0.2, // Time between one animation an another
      ease: "back",
    })
    .to(".box-one", {
      ease: "power1",
      onComplete: () => {
        gsap.to(".box-three", {
          rotate: 360,
          repeat: -1,
          duration: 2,
          ease: "back",
          yoyo: true,
        });
      },
    })
    .to(
      ".box-two",
      {
        ease: "power2",
        onComplete: () => {
          gsap.fromTo(
            ".box-four",
            {
              repeat: -1,
              y: -4,
              duration: 2,
              ease: "bounce",
              yoyo: true,
            },
            {
              repeat: -1,
              y: 4,
              ease: "bounce",
              yoyo: true,
            }
          );
        },
      },
      2
    )
    .to(
      ".box-three",
      {
        ease: "power3",
      },
      "+=1"
    )
    .to(".box-four", {
      ease: "power4",
    })
    .to(".box-five", {
      ease: "elastic",
    })
    .to(".box-six", {
      ease: "bounce",
      onComplete: () => {
        gsap.to(".box-one", {
          rotate: 360,
          ease: "rough",
        });
      },
    });
});
</script>

<style lang="scss" scoped></style>

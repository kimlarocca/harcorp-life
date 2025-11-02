<template>
  <footer class="container text-center mb-8">
    <Divider class="pt-4 pb-7" />
    <nuxt-link to="/" class="plain">
      <img src="/images/logo.png" class="logo" alt="harcorp logo" />
    </nuxt-link>
    <div class="m-auto flex w-fit gap-2 mt-3 mb-4">
      <a
        v-for="social in socialLinks"
        :key="social.label"
        :href="social.url"
        :aria-label="social.label"
        target="_blank"
      >
        <img
          v-if="social.icon === 'custom'"
          :src="social.iconSrc"
          :alt="social.label"
          class="custom"
        />
        <i v-else :class="social.icon" class="text-2xl"></i>
      </a>
    </div>
    <div class="lg:flex justify-content-center mt-4 mb-3">
      <p>Tele: <a href="tel:202-964-3692" class="mr-4">202-964-3692</a></p>
      <p>
        Email:
        <a href="mailto:info@harcorplife.com" target="_blank" class="mr-4">
          info@harcorplife.com
        </a>
      </p>
      <p>Address: 80 M ST SE Washington, DC 20003</p>
    </div>
    <p class="mb-2">
      Company License #3002162539 <span class="mx-2">|</span> Company NPN: 20472977
    </p>
    <p>Copyright © {{ year }} Harcorp Life LLC. All Rights Reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const socialLinks = [
  {
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/hc-life-information-749330388/",
    label: "LinkedIn",
  },
  {
    icon: "custom",
    iconSrc: "/tiktok.svg",
    url: "https://www.tiktok.com/@hclife39",
    label: "TikTok",
  },
  {
    icon: "pi pi-instagram",
    url: "https://www.instagram.com/harcorplifellc/",
    label: "Instagram",
  },
  // {
  //   icon: "pi pi-youtube",
  //   url: "https://www.youtube.com/@PeopleArePeopleNJ",
  //   label: "YouTube",
  // },
]
</script>

<style lang="scss">
.icon-link {
  display: flex;
  align-items: center;
}
.custom {
  max-width: 23px;
  width: 23px;
  height: 23px;
  rect {
    fill: var(--blue);
  }
}
</style>

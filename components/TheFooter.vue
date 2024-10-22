<template>
  <footer class="container text-center mb-8">
    <Divider class="pt-4 pb-7" />
    <nuxt-link to="/" class="plain">
      <img src="/images/logo.png" class="logo" alt="harcorp logo" />
    </nuxt-link>
    <div class="lg:flex justify-content-center mt-4 mb-3">
      <p>Tele: <a href="tel:202-422-2453" class="mr-4">202-422-2453 </a></p>
      <p>
        Email:
        <a href="mailto:info@harcorplife.com" target="_blank" class="mr-4">
          info@harcorplife.com
        </a>
      </p>
      <p>Address: 80 M ST SE Washington, DC 20003</p>
    </div>
    <p class="mb-2">
      Company License #3002162539 <span class="mx-2">|</span> Company NPN:
      20472977
    </p>
    <p>Copyright © {{ year }} Harcorp Life LLC. All Rights Reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <header>
    <div class="container">
      <Menubar :model="items">
        <template #start>
          <nuxt-link to="/" class="plain flex">
            <img src="/images/logo.png" class="logo" alt="harcorp life logo" />
          </nuxt-link>
        </template>
      </Menubar>
    </div>
  </header>
</template>

<script setup>
const router = useRouter()
const items = ref([
  {
    label: 'Personal',
    command: () => {
      router.push('/personal')
    }
  },
  {
    label: 'Commercial',
    command: () => {
      router.push('/commercial')
    }
  },
  {
    label: 'Employee Benefits',
    command: () => {
      router.push('/group')
    }
  },
  {
    label: 'Financial Education',
    command: () => {
      router.push('/education')
    }
  },
  {
    label: 'About Us',
    command: () => {
      router.push('/about')
    }
  },
  {
    label: 'Contact Us',
    command: () => {
      router.push('/contact')
    }
  }
])
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: var(--white);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.logo {
  max-height: 50px;
}
.pi-bars {
  font-size: 2rem;
}
.p-menubar .p-menubar-root-list,
.p-menubar .p-menubar-button {
  margin-left: auto;
}
</style>

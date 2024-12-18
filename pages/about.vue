<template>
  <div class="secondary">
    <Html lang="en">
      <Head>
        <Title>Harcorp Life LLC | About Us</Title>
      </Head>
    </Html>
    <section class="secondary-hero mb-8">
      <div class="container grid">
        <div class="col">
          <h1>About Us</h1>
        </div>
      </div>
    </section>
    <section class="container mb-5">
      <div class="grid">
        <div class="col-12 lg:col box1 p-5 mb-4">
          <h2 class="mb-4">Our Mission</h2>
          <p class="mb-4">
            Harcorp Life specializes in the implementation of benefit
            enrollments with small or large organizations. Our mission is to
            educate and inform eligible employees of the health options
            available to them. We accomplish this by meeting in person or
            virtually with employees to discuss how their plan selection would
            work.
          </p>
        </div>
      </div>
    </section>
    <section class="mb-5">
      <div class="grid">
        <div class="col-12 lg:col mb-4">
          <img
            alt="person holding paper cutouts of an umbrella over a family"
            src="/images/umbrella-insurance.jpg"
          />
        </div>
        <div class="col-12 lg:col-7 p-4 lg:px-8 lg:py-6">
          <h3 class="mb-4">Our Offering</h3>
          <p class="mb-4">
            We are looking to work with major medical carriers to help with the
            education of their health plans to individuals and employees. This
            service is provided through health fairs, webinars and ongoing
            orientations for employees that focuses on health education,
            financial wellness, and wellness.
          </p>
          <h3 class="mb-3">Areas Of Coverage</h3>
          <p class="mb-4">
            DC - District of Columbia &bull; MD - Maryland &bull; NJ - New
            Jersey &bull; PA - Pennsylvania
          </p>
        </div>
      </div>
    </section>
    <section class="dark lg:text-center p-6 mb-7">
      <h2 class="white mb-4">Company Background</h2>
      <p class="white lg:w-9 m-auto mb-4">
        Founded in 2022, Harcorp Life LLC is an insurance consulting and
        management agency. Our specialty is to support our clients’ needs in
        navigating the insurance marketplace. As a premier insurance agency, we
        specializing in tailoring value-driven insurance plans for individuals,
        professionals, homeowners, and businesses. Our commitment lies in
        safeguarding assets and mitigating liabilities, all while offering some
        of the most competitive rates in the local market.
      </p>
    </section>
    <section class="container">
      <div class="grid mb-4">
        <Card class="col-12 lg:col mb-4">
          <template #title>Core Competencies</template>
          <template #content>
            <ul>
              <li>Life and health insurance</li>
              <li>Business liability insurance</li>
              <li>Personal umbrella insurance</li>
            </ul>
          </template>
        </Card>
        <div class="col-fixed" style="width: 32px"></div>
        <Card class="col-12 lg:col mb-4">
          <template #title>NAICS Codes</template>
          <template #content>
            <li><strong>524210</strong> (Insurance Agencies and Brokerages)</li>
            <li><strong>561110</strong> (Office Administrative Services)</li>
            <li>
              <strong>811210</strong> (Electronic and Precision Equipment Repair
              and Maintenance)
            </li>
          </template>
        </Card>
        <div class="col-fixed" style="width: 32px"></div>
        <Card class="col-12 lg:col mb-4">
          <template #title>Company Data</template>
          <template #content>
            <li>Cage: 9J8D2</li>
            <li>UEI: L1W7HCC4KV54</li>
            <li>CMS Certified</li>
            <li>SHOP Certified</li>
          </template>
        </Card>
      </div>
    </section>
    <section class="container">
      <h3 class="mb-5">Carriers</h3>
      <div class="grid">
        <div class="col col-6 lg:col-4 mb-4" v-for="logo in logos" :key="logo">
          <div class="logo-img">
            <img
              v-if="!logo.endsWith('.svg')"
              :src="`${logo}`"
              :alt="logo"
              style="max-width: 200px"
            />
            <inline-svg v-else :src="logo" style="max-width: 200px" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const logos = [
  '/images/logos/Aetna.svg',
  '/images/logos/annexus.jpg',
  '/images/logos/atbay.svg',
  '/images/logos/attune.png',
  '/images/logos/biberk.svg',
  '/images/logos/carefirst.svg',
  '/images/logos/cna.gif',
  '/images/logos/corebridge.png',
  '/images/logos/hiscox-agent.png',
  '/images/logos/iml.webp',
  '/images/logos/kp.png',
  '/images/logos/mutual-of-omaha.png',
  '/images/logos/nationwide.png',
  '/images/logos/next.svg',
  '/images/logos/three.svg',
  '/images/logos/uhc.png'
]
</script>

<style lang="scss">
.logo-img {
  width: 100%;
  height: auto;
  max-width: 150px;
  max-height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>

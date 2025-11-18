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
          <p>
            Our mission is to educate, inform, produce, and recruit by engaging with
            individuals, families, and communities. We strive to provide market insights,
            share valuable opportunities, and empower informed decision-making through
            education and outreach.
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
            As a trusted agency, Harcorp Life is dedicated to helping you navigate our
            comprehensive insurance solutions, including Life and Health Insurance,
            Business Insurance, Group Benefits, and Pet Insurance—ensuring tailored
            coverage that meets your unique needs.
          </p>
          <p class="mb-6">
            Our commitment is to protect your assets, minimize risks, and provide
            financial security, all while offering competitive rates in the local market.
          </p>
          <h3 class="mb-3">Areas Of Coverage</h3>
          <p class="mb-4">
            DC - District of Columbia &bull; MD - Maryland &bull; NJ - New Jersey &bull;
            PA - Pennsylvania &bull; VA - Virginia &bull; WV - West Virginia
          </p>
        </div>
      </div>
    </section>
    <section class="dark lg:text-center p-6 mb-7">
      <h2 class="white mb-4">Company Background</h2>
      <p class="white lg:w-9 m-auto mb-4">
        Founded in 2022, Harcorp Life LLC is a dynamic insurance marketing and
        distribution company specializing in insurance products and financial planning
        services. We are committed to providing tailored solutions that help individuals,
        businesses, and families secure their financial future with confidence.
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
              <strong>811210</strong> (Electronic and Precision Equipment Repair and
              Maintenance)
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
    <!-- <section class="container mb-7">
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
    </section> -->
    <section class="container mb-7">
      <div class="grid">
        <Card class="col-12 lg:col mb-4">
          <template #title>Careers</template>
          <template #content>
            <p>
              If you are a licensed insurance agent in Maryland or Washington, DC, and are
              ready to take the next step in your career with a forward-thinking and
              supportive agency, we want to hear from you!
            </p>
          </template>
          <template #footer>
            <nuxt-link
              to="https://web.zybrzeus.com/jeremiahharris/insurance-careers"
              target="_blank"
            >
              <Button icon="pi pi-angle-double-right" label="Learn More" />
            </nuxt-link>
          </template>
        </Card>
      </div>
    </section>
    <section class="container">
      <h3>Please fill out the following form to contact us:</h3>
      <iframe
        aria-label="contact us form"
        src="https://forms.clickup.com/10625769/f/a48q9-17633/AW9OMZ49NBJB7J3LS5"
        width="100%"
        height="1200"
        frameborder="0"
        style="border: none"
      ></iframe>
      <!-- <form v-if="!formSent" @submit="postContactForm()">
        <div class="mb-4">
          <label for="userName">Full Name</label>
          <input v-model="userName" type="text" id="userName" name="userName" required />
        </div>
        <div class="mb-4">
          <label for="userEmail">Email</label>
          <input
            v-model="userEmail"
            type="email"
            id="userEmail"
            name="userEmail"
            required
          />
        </div>
        <div class="mb-4">
          <label for="userEmail">Phone (optional)</label>
          <input v-model="userPhone" type="text" id="userPhone" name="userPhone" />
        </div>
        <div class="mb-4">
          <label for="userMessage">Message</label>
          <textarea
            v-model="userMessage"
            id="userMessage"
            name="userMessage"
            required
          ></textarea>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <p v-else>
        Thank you for contacting us! We will get back to you as soon as possible.
      </p> -->
    </section>
  </div>
</template>

<script setup>
const logos = [
  "/images/logos/Aetna.svg",
  "/images/logos/annexus.jpg",
  "/images/logos/atbay.svg",
  "/images/logos/attune.png",
  "/images/logos/biberk.svg",
  "/images/logos/carefirst.svg",
  "/images/logos/cna.gif",
  "/images/logos/corebridge.png",
  "/images/logos/hiscox.png",
  "/images/logos/iml.webp",
  "/images/logos/kp.png",
  "/images/logos/mutual-of-omaha.png",
  "/images/logos/nationwide.png",
  "/images/logos/next.svg",
  "/images/logos/three.svg",
  "/images/logos/uhc.png",
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
  justify-content: flex-start;
}
</style>

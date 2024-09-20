<template>
  <div class="home">
    <Html lang="en">
      <Head>
        <Title>Harcorp Life LLC | Overview</Title>
      </Head>
    </Html>
    <section class="hero mb-8">
      <div class="container">
        <h1>Helping you navigate the insurance marketplace.</h1>
        <p class="hidden lg:block">
          Harcorp Life specializes in tailoring value-driven insurance plans for
          individuals, professionals, homeowners, and businesses
        </p>
      </div>
      <div class="bubbles">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
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
    <section class="mb-6">
      <div class="grid">
        <div class="col-12 lg:col mb-4">
          <img
            alt="person holding paper cutouts of an umbrella over a family"
            src="/images/umbrella-insurance.jpg"
          />
        </div>
        <div class="col-12 lg:col-7 p-4 lg:p-8 mb-4">
          <h3 class="mb-4">Core Competencies</h3>
          <ul class="mb-4">
            <li>Life and health insurance</li>
            <li>Business liability insurance</li>
            <li>Personal umbrella insurance</li>
          </ul>
          <p>
            <a href="mailto:info@harcorp.org">
              Contact us to learn more
              <i class="pi pi-angle-double-right" style="font-size: 0.75rem" />
            </a>
          </p>
        </div>
      </div>
    </section>
    <section class="mb-6">
      <div class="grid">
        <div
          class="col-12 lg:col-7 flex-order-1 lg:flex-order-0 p-4 lg:p-8 lg:p-8 mb-4"
        >
          <h3 class="mb-4">Our Partners</h3>
          <p class="mb-4">
            Corebridge &bull; Mutual&nbsp;of&nbsp;Omaha &bull; Nationwide &bull;
            BiBerk &bull; Aetna &bull; CNA &bull; United&nbsp;Healthcare &bull;
            Hiscox &bull; Kaiser&nbsp;Permanente &bull; Carefirst
          </p>
          <p>
            <a href="mailto:info@harcorp.org">
              Contact us to learn more
              <i class="pi pi-angle-double-right" style="font-size: 0.75rem" />
            </a>
          </p>
        </div>
        <div class="col-12 lg:col flex-order-0 lg:flex-order-1 mb-4">
          <img
            alt="scrabble letters spelling out health insurance"
            src="/images/health-insurance.jpg"
          />
        </div>
      </div>
    </section>
    <section class="dark lg:text-center p-6 mb-7">
      <h2 class="white mb-4">About Us</h2>
      <p class="white lg:w-9 m-auto mb-4">
        Harcorp Life LLC (dba HC Life) is a dynamic and rapidly growing
        insurance consulting and management agency dedicated to helping
        individuals, professionals, homeowners, and businesses navigate the
        insurance marketplace. With a focus on value-driven insurance plans and
        exceptional customer service, we partner with top carriers to deliver
        tailored solutions to our clients. We are currently seeking motivated
        and licensed Independent Insurance Agents to join our team in Maryland
        and Washington, DC.
      </p>
    </section>
    <section class="container">
      <div class="grid">
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
        <div class="col-fixed" style="width: 32px"></div>
        <Card class="col-12 lg:col mb-4">
          <template #title>Careers</template>
          <template #content>
            <p>
              If you are a licensed insurance agent in Maryland or Washington,
              DC, and are ready to take the next step in your career with a
              forward-thinking and supportive agency, we want to hear from you!
            </p>
          </template>
          <template #footer>
            <nuxt-link to="/careers">
              <Button icon="pi pi-angle-double-right" label="Learn More" />
            </nuxt-link>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
$small: 576px;
$medium: 768px;
$large: 992px;
$xlarge: 1200px;

.home .hero {
  background: var(--black) url("/images/hero.jpg") center right -200px no-repeat;
  text-align: left;
  overflow: hidden;
  position: relative;

  @media all and (max-width: $xlarge) {
    background: var(--black) url("/images/hero.jpg") center right -400px no-repeat;
  }

  @media all and (max-width: $medium) {
    background: var(--black) url("/images/hero-medium.jpg") center right
      no-repeat;
  }

  @media all and (max-width: $small) {
    background: var(--black) url("/images/hero-medium.jpg") center right -170px no-repeat;
  }

  .container {
    z-index: 10;
    position: relative;
    padding: 80px 40px;

    @media all and (max-width: $medium) {
      padding: 40px 30px;
    }

    h1 {
      color: var(--white);
      max-width: 600px;
      width: 100%;
      margin-bottom: 30px;

      @media all and (max-width: $xlarge) {
        max-width: 500px;
      }

      @media all and (max-width: $large) {
        max-width: 400px;
        font-size: 37px;
        line-height: 47px;
      }

      @media all and (max-width: $medium) {
        max-width: 300px;
        font-size: 27px;
        line-height: 37px;
      }

      @media all and (max-width: $small) {
        max-width: 200px;
        font-size: 20px;
        line-height: 30px;
      }
    }

    p {
      z-index: 5;
      color: white;
      font-size: 21px;
      line-height: 30px;
      max-width: 600px;
      width: 100%;
      margin-bottom: 40px;

      @media all and (max-width: $medium) {
        font-size: 18px;
      }
    }
  }
}

.box1,
.box2 {
  border-radius: 12px;
  h2 {
    color: var(--blue);
  }
}

.box1 {
  background: url("/images/box1.png") center center no-repeat;
  background-size: cover;
}

.box2 {
  background: url("/images/box2.png") center center no-repeat;
  background-size: cover;
}

.bubbles {
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  .bubble {
    width: 60px;
    height: 60px;
    background: var(--blue);
    border-radius: 200px;
    position: absolute;
  }

  .x1 {
    transform: scale(0.9);
    opacity: 0.6;
    animation: moveclouds 15s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }

  .x2 {
    left: 15%;
    transform: scale(0.6);
    opacity: 0.5;
    animation: moveclouds 25s linear infinite,
      sideWays 5s ease-in-out infinite alternate;
  }

  .x3 {
    left: 25%;
    transform: scale(0.8);
    opacity: 0.4;
    animation: moveclouds 20s linear infinite,
      sideWays 4s ease-in-out infinite alternate;
  }

  .x4 {
    left: 45%;
    transform: scale(0.6);
    opacity: 0.55;
    animation: moveclouds 18s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }

  .x5 {
    left: 55%;
    transform: scale(0.8);
    opacity: 0.4;
    animation: moveclouds 27s linear infinite,
      sideWays 1s ease-in-out infinite alternate;
  }

  .x6 {
    left: 65%;
    transform: scale(0.4);
    opacity: 0.6;
    animation: moveclouds 17s linear infinite,
      sideWays 3s ease-in-out infinite alternate;
  }

  .x7 {
    left: 85%;
    transform: scale(0.8);
    opacity: 0.5;
    animation: moveclouds 22s linear infinite,
      sideWays 2s ease-in-out infinite alternate;
  }

  .x8 {
    left: 95%;
    transform: scale(0.3);
    opacity: 0.65;
    animation: moveclouds 12s linear infinite,
      sideWays 1s ease-in-out infinite alternate;
  }

  @keyframes moveclouds {
    0% {
      top: 500px;
    }

    100% {
      top: -500px;
    }
  }

  @keyframes sideWays {
    0% {
      margin-left: 0px;
    }

    100% {
      margin-left: 50px;
    }
  }
}

@media all and (max-width: $medium) {
  .x2,
  .x4,
  .x6,
  .x8 {
    display: none;
  }
}
</style>
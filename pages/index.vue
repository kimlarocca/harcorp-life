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
            Our mission is to educate, inform, produce, and recruit by engaging with
            individuals, families, and communities. We strive to provide market insights,
            share valuable opportunities, and empower informed decision-making through
            education and outreach.
          </p>
        </div>
      </div>
    </section>
    <section class="container mb-7 text-center">
      <a
        href="https://my.agentero.com/leads/forms/831fc2e1-b335-40b1-8946-da761ff04ea5"
        target="_blank"
        class="mx-2"
      >
        <Button icon="pi pi-angle-double-right" label="Home" />
      </a>
      <a
        href="https://my.agentero.com/leads/forms/831fc2e1-b335-40b1-8946-da761ff04ea5"
        target="_blank"
        class="mx-2"
      >
        <Button icon="pi pi-angle-double-right" label="Auto" />
      </a>
      <a href="https://app.boldpenguin.com/start/hclife" target="_blank" class="mx-2">
        <Button icon="pi pi-angle-double-right" label="Commercial" />
      </a>
      <a href="https://planenroll.com/?purl=Jeremiah-Harris" target="_blank" class="mx-2">
        <Button icon="pi pi-angle-double-right" label="Life" />
      </a>
      <a
        href="https://www.healthsherpa.com/?_agent_id=jeremiah-harris"
        target="_blank"
        class="mx-2"
      >
        <Button icon="pi pi-angle-double-right" label="Health" />
      </a>
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
    background: var(--black) url("/images/hero-medium.jpg") center right no-repeat;
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
    animation: moveclouds 15s linear infinite, sideWays 4s ease-in-out infinite alternate;
  }

  .x2 {
    left: 15%;
    transform: scale(0.6);
    opacity: 0.5;
    animation: moveclouds 25s linear infinite, sideWays 5s ease-in-out infinite alternate;
  }

  .x3 {
    left: 25%;
    transform: scale(0.8);
    opacity: 0.4;
    animation: moveclouds 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
  }

  .x4 {
    left: 45%;
    transform: scale(0.6);
    opacity: 0.55;
    animation: moveclouds 18s linear infinite, sideWays 2s ease-in-out infinite alternate;
  }

  .x5 {
    left: 55%;
    transform: scale(0.8);
    opacity: 0.4;
    animation: moveclouds 27s linear infinite, sideWays 1s ease-in-out infinite alternate;
  }

  .x6 {
    left: 65%;
    transform: scale(0.4);
    opacity: 0.6;
    animation: moveclouds 17s linear infinite, sideWays 3s ease-in-out infinite alternate;
  }

  .x7 {
    left: 85%;
    transform: scale(0.8);
    opacity: 0.5;
    animation: moveclouds 22s linear infinite, sideWays 2s ease-in-out infinite alternate;
  }

  .x8 {
    left: 95%;
    transform: scale(0.3);
    opacity: 0.65;
    animation: moveclouds 12s linear infinite, sideWays 1s ease-in-out infinite alternate;
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

<template>
  <div class="secondary">
    <Html lang="en">
      <Head>
        <Title>Harcorp Life LLC | Contact Us</Title>
      </Head>
    </Html>
    <section class="secondary-hero mb-8">
      <div class="container grid">
        <div class="col">
          <h1>Contact Us</h1>
        </div>
      </div>
    </section>
    <section class="container">
      <h3 class="mb-4">Please fill out the following form to contact us:</h3>
      <form v-if="!formSent" @submit="postContactForm()">
        <div class="mb-4">
          <label for="userName">Full Name</label>
          <input
            v-model="userName"
            type="text"
            id="userName"
            name="userName"
            required
          />
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
          <input
            v-model="userPhone"
            type="text"
            id="userPhone"
            name="userPhone"
          />
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
        Thank you for contacting us! We will get back to you as soon as
        possible.
      </p>
    </section>
  </div>
</template>

<script setup>
import { sendContactForm } from '@/utils/sendgrid'

const userName = ref( '' )
const userEmail = ref( '' )
const userMessage = ref( '' )
const userPhone = ref( '' )
const formSent = ref( false )

const postContactForm = async () => {
  sendContactForm(
    userEmail.value,
    userName.value,
    userMessage.value,
    userPhone.value
  )
  formSent.value = true
  userEmail.value = ''
  userName.value = ''
  userMessage.value = ''
}
</script>
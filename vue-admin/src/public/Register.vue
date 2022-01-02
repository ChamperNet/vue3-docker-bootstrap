<template>
  <form class="form-signin" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="firstName" placeholder="First name" required v-model="firstName">
      <label for="firstName">First Name</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="lastName" placeholder="Last name" required v-model="lastName">
      <label for="lastName">Last Name</label>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required
             v-model="email">
      <label for="floatingInput">Email address</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required
             v-model="password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control" id="passwordConfirm" placeholder="Confirm password" required
             v-model="passwordConfirm">
      <label for="passwordConfirm">Confirm password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Register</button>

  </form>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup () {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const passwordConfirm = ref('')
    const router = useRouter()

    const submit = async () => {
      await axios.post('/register', {
        first_name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value
      })

      await router.push('/login')
    }

    return {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      submit
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin: 10px 0;
}

.form-signin input[type="password"] {
  margin-bottom: -1px;
}

</style>

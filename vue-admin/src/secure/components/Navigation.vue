<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/profile" class="p-2 text-white">{{ user?.first_name }} {{ user?.last_name }}</router-link>
      <a class="p-2 text-white" href="javascript:void(0)" @click="logout">Sign out</a>
    </nav>
  </header>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Navigation',
  props: ['user'],
  setup () {
    const router = useRouter()
    const logout = () => {
      localStorage.clear()
      router.push('/login')
    }

    return {
      logout
    }
  }
}
</script>

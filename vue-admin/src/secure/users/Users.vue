<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.first_name }} {{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role.name }}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>

  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="previous">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>

</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'Users',
  setup () {
    const users = ref('')
    const page = ref(1)
    const lastPage = ref(0)

    const load = async () => {
      const response = await axios.get(`users?page=${page.value}`)
      users.value = response.data.data
      lastPage.value = response.data.meta.last_page
    }

    onMounted(load)

    const next = async () => {
      if (page.value === lastPage.value) return
      page.value++
      await load()
    }

    const previous = async () => {
      if (page.value === 1) return
      page.value--
      await load()
    }

    return {
      users,
      next,
      previous,
      lastPage
    }
  }
}
</script>

<template>
    <div class="text-xs-center">
      INSPIRE Is logged in: {{ logged }}
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  middleware: ['auth'],
  async fetch ({store, redirect}) {
    try {
      await store.dispatch('testCall')
    } catch (e) {
      console.log('in fall')
      store.commit('logout')
      redirect('/login')
    }
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'logged'
    ])
  },
  methods: {
    ...mapActions([
    ])
  }
}
</script>

<template>
  <div>
    HOME
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['auth'],
  computed: {
    ...mapGetters([
      'logged'
    ])
  },
  methods: {
  },
  data: () => ({
  })
}
</script>
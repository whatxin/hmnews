<template>
  <div class="app">
    app
    {{ count }}
    <hr />
    <button @click="setCount">按钮</button>
    <hr />
    <button @click="getCount">按钮2</button>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
    // count () {
    //   return this.$store.state.count
    // }
  },
  methods: {
    ...mapMutations(['setCount']),
    ...mapActions(['getCount'])
  }
}
</script>

<style scoped lang='less'></style>

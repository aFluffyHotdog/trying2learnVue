<template>
  <h1> {{ title }} </h1>
  <input type="text" ref="name">
  <teleport to=".modals" v-if="showModal">
    <MyModal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now!</a>
      </template>
      <h1>This is a title passed in using a slot</h1>
      <p> and so is this body</p>
    </MyModal>
  </teleport>
  <button @click.alt="toggleModal">Open Modal (+alt)</button>
</template>

<script>
import MyModal from './components/MyModal.vue'
export default {
  name: 'App',
  data() {
    return{
      title: "My first vue app!",
      showModal: false
    }
  },
  components: { MyModal },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

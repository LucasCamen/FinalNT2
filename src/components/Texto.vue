<template>
                <div class="form-group">
                    <h1>Ingrese el Texto</h1> 
                    <input type="text" id="texto" class="form-control" v-model="text">
                </div>
                <h3>{{codificar(text)}}</h3>
                <p>1-B, 2-B, 3-C, 4-B, 5-B</p>
</template>

<script>

import filtros from '../filtros.js'

export default {
  name: 'src-components-texto',
  mixins: [filtros],
  props: [],
  mounted() {
  },
  created(){
  },
   components: {
  },
  data() {
    return {
      text:'',
    }
  },
  
  methods: {

  },
  computed: {

  }
}

</script>

<style scoped lang="css">
  .src-components-texto {

  }
</style>
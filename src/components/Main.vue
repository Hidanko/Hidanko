<template>
  <div style="width: 100%">

    <splitpanes class="splitpanes__pane" style="height: 400px; width: 100%">
      <pane min-size="20" style="padding-left: 10px" title="Experiencia">
        <h2 class="sub-titulos">  Experiencia</h2>
        <br/>
        <div>
          <h3 class="sub-sub-titulos">Desenvolvedor de Sistemas</h3>

          Texto
          texto
          texto
          texto
          <br/>
          <br/>
          <br/>

        <h3 class="sub-sub-titulos">Estagiário</h3>

        Texto
        texto
        texto
        texto
          <br>
          <br>
        </div>
        <div>
          <h2 class="sub-titulos" >Formação</h2>

        </div>
      </pane>
      <pane>
        <h2 class="sub-titulos">Conhecimentos</h2>
        <br/>

      </pane>
    </splitpanes>



  </div>
</template>

<script>
import {Pane, Splitpanes} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  components: {Splitpanes, Pane},
  name: "Main"
}
</script>

<style scoped>
@import "@/assets/css/bootstrap.css";


.sub-titulos {
  alignment: left;
  clear: left;
  color: darkgray;
  padding-left: 10px;
}

.sub-sub-titulos {
  alignment: left;
  clear: left;
  color: black;
  padding-left: 10px;
}
</style>
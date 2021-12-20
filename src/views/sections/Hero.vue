<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(20, 20, 20, .1), rgba(0,0,0,.3)"
    >
      <v-container class="px-2 py-0">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="50%"
          max-width="800"
          width="90%"
        >
        <br/><br/><br/>
        <v-card class="rounded-xl" color="#0000007D">
          <br/><br/>
          <v-row class="mx-6" align="center">
            <base-subheading
            size="text-h5"
            weight="regular"
            title="Cafés, lanches, doces e muito mais!"/>
            <base-body >
              <p class="text-white">Lúdico, do latim ludus, que remete ao que visa mais ao divertimento que a qualquer outro objetivo.  Uma atividade lúdica é uma atividade de entretenimento, que dá prazer e diverte as pessoas envolvidas.</p>
              <p class="text-white">Neste sentido, a Lúdico Sabor visa entregar o prazer dos sabores contidos em uma boa carta de cafés, lanches de qualidade, maravilhosos doces e muito mais!</p> 
              <p class="text-white">Como tudo que é lúdico envolve diversão, trazemos uma proposta onde os jogos modernos (sobretudo de tabuleiro) seja uma grata companhia dos sabores aqui encontrados.</p>
              <p class="text-white">Nosso ambiente é, ao mesmo tempo, moderno e aconchegante. Faça daqui seu ponto de encontro, estudo, jogos ou um simples “bater ponto” para um ótimo café.</p>
              <p class="text-white">Slow food =Nada de pressa. Não queremos ser mais uma atividade corrida pro seu dia a dia. Nesse mundo em que tudo está cada vez mais rápido, permita-se pausar para um momento lúdico.</p>
              <p class="text-white">“Abraço”. Em tempos de pandemia e suas decorrências, sabemos que a segurança e higiene são ainda mais fundamentais. Todavia, com nosso jeito de ser iremos abraça-lo, não literalmente, mas com nossas propostas de lanches, cafés e diversão...e , para quem gosta, com algum “dedo de prosa”.</p>
            </base-body>
          </v-row>
        </v-card>
        <br/><br/><br/><br/>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '50vh' : '25vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
<style type="text/css">
  rounded-card{
      border-radius:60;
  }
  p{
      color:white;
  }

</style>

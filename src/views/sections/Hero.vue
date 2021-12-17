<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/vegan-food.jpg')"
      class="white--text"
      gradient="to bottom, rgba(20, 20, 20, .4), rgba(0,0,0,.3)"
    >
      <v-container class="px-2 py-0">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="50%"
          max-width="800"
          width="90%"
        >
        <br/><br/><br/>
        <v-card class="rounded-xl" color="#0000004D">
          <br/><br/>
          <v-row class="mx-6" align="center">
            <base-subheading
            size="text-h5"
            weight="regular"
            title="Veganismo é a grande ferramenta para transformar o mundo!"  
            />
            <base-body >
              <p class="text-white">O ser humano por séculos tem se desconectado da natureza e por consequência lógica também se afastou das relações de compaixão pela terra de seus seres.</p>
              <p class="text-white">O termo vegano já existe há 77 anos e foi criado pelo britânico Donald Watson e, desde então, transformou-se em um movimento político, ético e de estilo de vida, e vem ganhando muitos adeptos, mas hoje não é apenas isso, o veganismo é movimento.</p> 
              <p class="text-white">Mas ainda temos muito a percorrer para que o mundo alcance o alinhamento e equilíbrio necessário para sermos sustentáveis em todos os âmbitos da nossa vida.</p>
              <p class="text-white">Meu compromisso como Chef de gastronomia exclusivamente vegana é pensar, falar e praticar o veganismo, somente uma consciência livre de sofrimento vai transformar o planeta!</p>

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

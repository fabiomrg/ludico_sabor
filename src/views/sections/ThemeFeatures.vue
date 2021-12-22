<template>
  <base-section id="theme-features">
   <base-section-heading id="cardapio" title="Cardapio">
   <v-img :src="require('@/assets/cardapio-ludicosabor.jpg')">
   </v-img>
   </base-section-heading>
   <base-section-heading id="galeria" title="Galeria">
      <v-row justify="center">
        <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/19.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
          </v-img>
        </v-col>
        <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/12.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>

       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/21.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>

       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/18.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>

       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/16.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
      
      <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/17.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/9.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/11.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/15.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/2.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/20.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/7.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/8.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
       <v-col
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="require('@/assets/3.jpg')"
            
            aspect-ratio="1"
            class="grey lighten-2"
          >
        </v-img>
       </v-col>
    </v-row> 
   </base-section-heading>

  </base-section>
  

</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
  
        {      
          title: 'Catering',
          icon: 'mdi-book-open-page-variant',
          text:'Seja uma produção de um filme, um curso, uma roda de conversas, uma palestra, tenho o serviço certo para seus eventos! Consulte os formatos de atendimento!'
        },
    
        {
          title: 'Jantares ou almoços',
          icon: 'mdi-pasta',
          text:'Posso preparar tudo no local com garçom e tudo ou também levo  pronto para algo mais intimista e ter uma experiência inesquecível.'
        },
          {
          title: 'Buffet de Casamento',
          icon: 'mdi-ring',
          text: 'A celebração da sagrada união de duas almas para trilhar uma jornada tão importante merece uma alimentação alinhada com os novos tempos. Cardápio sensível e personalizado como a ocasião merece e surpreender seus convidados! Atendo São Paulo e interior! Levamos tudo o que é necessário para um cuidado preciso: Material, serviço, respeito e amor que ocasião merece!'

        },
        {
          title: 'Aniversários',
          icon: 'mdi-account-star',
          text: 'Nada como festejar o início de uma nova jornada conectados à natureza e sua constante manifestação da vida! Celebre com um cardápio 100% vegano (plant based) preparado com ingredientes maravilhosos que a sagrada terra nos presenteia em sua perfeição!'

        },
        
        {
          title: 'Kit picnic',
          icon: 'mdi-food-apple',
          text: 'Uma experiência especial ao ar livre em conexão com a natureza e liberdade que o momento nos proporciona! O cardápio kit picnic é levado em embalagens individuais e descartáveis para facilitar o manuseio! Consulte cardápio que pode ser quente ou frio!'

        },
        
        {
          title: 'Kit Escola',
          icon: 'mdi-town-hall',
          text: 'A escola é um dos momentos mais importantes da vida pois estamos iniciando nossa jornada de socialização e que sem dúvidas levamos para sempre em nossas memórias! Preparo kit individuais e descartáveis para facilitar a manipulação dos presentes com cardápio especial para o paladar infanto juvenil!Consulte opções de cardápio!'

        },

        {
          title: 'Corporativos',
          icon: 'mdi-account-tie',
          text: 'Reunião de negócios, apresentação de produtos, roda de conversas, treinamentos e celebrações! Consulte os formatos de atendimento!'

        },
        
        {
          title: 'Cestas especiais',
          icon: 'mdi-star',
          text: 'Surpreender e ser surpreendido com uma cesta incrível, com ingredientes saborosos e selecionados com delicadeza para elevar a experiência ao máximo! Consulte!'

        },
      ],
    }),
  }
</script>

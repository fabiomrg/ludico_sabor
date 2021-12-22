<template>
  <v-theme-provider dark>
    <base-section
      id="contatos"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-card-account-phone
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Contato"
      >
        Será um prazer poder atende-los! Estamos aguardando seu contato:
      </base-section-heading>
        
         <v-icon right>
          mdi-google-maps
        </v-icon>
        Endereço: Av. dos Andradas, 435 - Juiz de Fora - MG  <br/><br/>
        <v-icon right>
          mdi-whatsapp
        </v-icon>
        (32) 98899-1004 <br/><br/>
        
      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://api.whatsapp.com/send/?phone=5532988991004"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Toque aqui para whatsapp

        <v-icon right>
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>

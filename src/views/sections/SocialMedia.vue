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
        Será um prazer poder ajudá-lo! Estamos aguardando seu contato:
      </base-section-heading>
        
        <v-icon right>
          mdi-whatsapp
        </v-icon>
        (11) 98943-0389 <br/><br/>
        <v-icon left>
            mdi-mail
          </v-icon>
          chefsammyvegano@gmail.com
          <br/><br/>
      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://api.whatsapp.com/send/?phone=5511989430389&text=Olá! Preciso de ajuda para meu negócio."
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

// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#42A5F6',
        secondary: '#050B1F',
        accent: '#4f6b4b',
      },
      dark: {
        primary: '#4f6b4b',
        secondary: '#0B1C3D',
        accent: '#204165',
      },
    },
  },
})

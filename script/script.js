const { createApp } = Vue

  createApp({
    data() {
      return {
        text: 'HELLO WORLD!',
        immagine: 'https://picsum.photos/200/300'
      }
    }
  }).mount('#app')
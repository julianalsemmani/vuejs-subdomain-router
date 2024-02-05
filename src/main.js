import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useSubdomainStore } from './stores/subdomain'

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);

// Function to extract subdomain
const getSubdomain = () => {
  const hostnameArray = window.location.hostname.split('.');
  console.log(hostnameArray)
  if (hostnameArray[0] !== 'www') {
    return hostnameArray[0]; // Adjust based on your domain structure
  }
  return 'default'; // Fallback or default tenant identifier
};

const subdomainStore = useSubdomainStore();
subdomainStore.setSubdomain(getSubdomain());

app.mount('#app');
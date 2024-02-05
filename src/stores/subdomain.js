// src/stores/subdomain.js
import { defineStore } from 'pinia';

export const useSubdomainStore = defineStore('subdomain', {
  state: () => ({
    current: null, // Initially, no subdomain is set
  }),
  actions: {
    setSubdomain(subdomain) {
      this.current = subdomain;
    },
  },
});

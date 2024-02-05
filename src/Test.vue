<script setup>
import { useSubdomainStore } from '@/stores/subdomain';

const subdomainStore = useSubdomainStore();
</script>

<template>
  <div>
    Current subdomain: {{ subdomainStore.current }}
  </div>
</template>
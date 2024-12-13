<template>
    <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Footer from './components/layout/Footer.vue';
import Navbar from './components/layout/Navbar.vue';
</script>
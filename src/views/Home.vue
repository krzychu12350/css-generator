<template>
  <NavbarComponent></NavbarComponent>
  <HeroSection></HeroSection>
  <!-- <StatsComponent></StatsComponent> -->
  <!-- <FaqComponent></FaqComponent> -->
  <FeatureSection></FeatureSection>
  <NewsletterSection></NewsletterSection>
  <FooterComponent></FooterComponent>
  <!-- <AnimatedGradient></AnimatedGradient> -->
</template>
<script setup lang="ts">
//@ts-nocheck
import NavbarComponent from "../components/common/NavbarComponent.vue";
import FooterComponent from "../components/common/FooterComponent.vue";
// import FaqComponent from "../components/FaqComponent.vue";
// import StatsComponent from "../components/StatsComponent.vue";
import FeatureSection from "../components/common/FeatureSection.vue";
import HeroSection from "../components/common/HeroSection.vue";
import NewsletterSection from "../components/common/NewsletterSection.vue";
</script>

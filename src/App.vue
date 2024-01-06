<template>
  <HeaderBlock />
  <SectionBlock />
  <router-view></router-view>
  <FooterBlock/>
</template>

<script>
import HeaderBlock from './components/header/Header.vue';
import SectionBlock from './components/section/Section.vue';
import FooterBlock from './components/footer/footer.vue'
import './style/app.scss'
export default {
    name: 'App',
    components: { HeaderBlock, SectionBlock, FooterBlock }
}
</script>
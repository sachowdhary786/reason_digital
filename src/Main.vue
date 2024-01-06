<template>
    <HeroBlock />
    <image-with-text />
    <HelpSection />
</template>

<script>
import './style/main.scss';
import HeroBlock from './components/hero/Hero.vue';
import ImageWithText from './components/image-with-text/Image-with-text.vue';
import HelpSection from './components/help/Help.vue'

export default {
    name: 'MainContent',
    components: {HeroBlock, ImageWithText, HelpSection}
}
</script>
<template>
    <section class="section hero-block" :style="{backgroundImage: `url(${heroBackground})`}">
        <div class="container">
            <div class="hero-block__content">
                <div class="container">
                    <h1 class="hero-block__title large">{{ heroTitle }}</h1>
                    <p class="hero-block__quote normal">
                        {{ quoteText }}
                    </p>
                    <button class="hero-block__cta btn btn--secondary">
                        {{ ctaText }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Prismic from 'prismic-javascript';
import './style.scss';

export default {
    name: 'HeroBlock',
    data() {
        return {
            documentData: null,
            heroTitle: null,
            quoteText: null,
            ctaText: null,
            heroBackground: null
        };
    },
    async mounted() {
    const apiEndpoint = 'https://reason-digital.cdn.prismic.io/api/v2';

    try {
      const response = await Prismic.client(apiEndpoint)
      .getByUID('hero_page','hero_block');

      this.heroTitle = response.data.hero_title[0].text;
      this.quoteText = response.data.hero_quote[0].text;
      this.ctaText = response.data.hero_cta[0].text;
      this.heroBackground = response.data.hero_image.url;

    } catch (error) {
      console.error('Error fetching Prismic document:', error);
    }
  },
}
</script>
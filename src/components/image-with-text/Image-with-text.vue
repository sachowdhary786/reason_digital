<template>
    <section class="image-with-text">
        <div class="block block--card">
            <div class="grid">
                <div class="grid__item block__image-surround">
                    <div class="block__image-background" :style="{ backgroundImage: `url(${block_background})` }"></div>
                </div>
                <div class="grid__item block__content">
                    <div class="container">
                        <h2 class="grid__item-title ">
                            {{ block_title }}
                        </h2>
                        <p class="grid__item-quote">
                            {{ block_content }}
                        </p>
                        <button class="block__content__cta btn btn--tertiary">
                            {{ block_cta }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Prismic from 'prismic-javascript';
import './style.scss';


export default {
    name: 'InsightBlock',
    data() {
        return {
            documentData: null,
            block_title: null,
            block_quote: null,
            block_cta: null,
            block_background: null
        };
    },
    async mounted() {
        const apiEndpoint = 'https://reason-digital.cdn.prismic.io/api/v2';

        try {
            const response = await Prismic.client(apiEndpoint)
                .getByUID('image-with-text', 'image-with-text');

            this.block_title = response.data.block_title[0].text;
            this.block_quote = response.data.block_quote[0].text;
            this.block_cta = response.data.block_cta[0].text;
            this.block_background = response.data.block_image.url;

        } catch (error) {
            console.error('Error fetching Prismic document:', error);
        }
    }
}

</script>
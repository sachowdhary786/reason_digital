<template>
    <footer>
        <div class="container">
            <h1>{{ footerTitle }}</h1>
            <p> {{ footerQuote }}</p>

            <!-- Iterate over content etc -->
            <div class="grid">
                <div class="grid__item" v-for="(cta, index) in ctaData" :key="index">
                    <div class="block cta-card block--card">
                        <div class="container">
                            <p class="cta-card__label">
                                <strong>{{ cta.cta_title[0].text }}</strong>
                                {{ cta.cta_quote[0].text }}
                            </p>
                            <div class="button">
                                <a href="#" class="btn btn--bright">{{ ctaText }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button_divider">
                <button class="btn btn--secondary">More about what we do</button>
            </div>
        </div>
    </footer>
</template>

<script>
import Prismic from 'prismic-javascript';
import './style.scss';
export default {
    name: 'FooterBlock',
    data() {
        return {
            documentData: null,
            footerTitle: String,
            footerQuote: String,
            ctaText: String,
            ctaData: []
        }
    },
    async mounted() {
        const apiEndpoint = 'https://reason-digital.cdn.prismic.io/api/v2';

        try {
            const response = await Prismic.client(apiEndpoint)
                .getByUID('footer', 'footer');

            this.footerTitle = response.data.title[0].text;
            this.footerQuote = response.data.footer_quote[0].text;

            this.ctaData = response.data.cta_group;
            this.ctaText = response.data.cta_text[0].text;

        } catch (error) {
            console.error('Error fetching Prismic document:', error);
        }
    }
}
</script>
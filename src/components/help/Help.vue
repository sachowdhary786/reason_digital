<template>
    <section class="help_information">
        <div class="container">
            <div class="grid">
                <h2>{{ help_title }}</h2>
                <p class="normal">
                    {{ help_quote }}
                </p>
            </div>
            <form class="help_information--form">
                <!-- Iterate over form labels -->
                <span v-for="(label, index) in form_labels" :key="index">
                    <label class="normal">{{ label }}</label>
                    <select v-model="selectedOptions[index]">
                        <option v-for="(option, optionIndex) in (index === 1 ? suboption_labels : option_labels)" :key="optionIndex">{{ option }}</option>
                    </select>
                </span>
                <input type="submit" class="btn btn--primary" value="Start now">
            </form>
        </div>
    </section>
</template>

<script>
import Prismic from 'prismic-javascript';
import './style.scss';

export default {
    name: 'HelpSection',
    data() {
        return {
            documentData: null,
            help_title: null,
            help_quote: null,
            form_labels: [],
            option_labels: [],
            suboption_labels: [],
            selectedOptions: [],
        }
    },
    async mounted() {
        const apiEndpoint = 'https://reason-digital.cdn.prismic.io/api/v2';

        try {
            const response = await Prismic.client(apiEndpoint)
                .getByUID('help_information', 'help-information');

            this.help_title = response.data.help_title[0].text;
            this.help_quote = response.data.help_quote[0].text;

            let labels = response.data.form_labels[0];
            let labelArray = Object.values(labels);


            for (let i = 0; i < labelArray.length; i++) {
                this.form_labels.push(labelArray[i][0].text);
            }
            let options = response.data.help_options[0];
            let optionsArray = Object.values(options)

            let suboptions = response.data.help_suboptions[0];
            let suboptionsArray = Object.values(suboptions)

            for (let i = 0; i < optionsArray.length; i++) {
                this.option_labels.push(optionsArray[i][0].text)
                this.suboption_labels.push(suboptionsArray[i][0].text)
            }

        } catch (error) {
            console.error('Error fetching Prismic document:', error);
        }
    }
}

</script>
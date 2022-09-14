<template>
    <section class="section services">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <div class="card_component">
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-brands fa-google" class="card_icon" />
                    <ServiceCardComponent :cardTitle="'Google SEO'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" 
                        :cardLink="cardLink"
                        />
                </div>
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-solid fa-gear" class="card_icon" />
                    <ServiceCardComponent :cardTitle="'Brand strategy'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" 
                        :cardLink="cardLink"
                        />
                </div>
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-solid fa-building" class="card_icon" />
                    <ServiceCardComponent :cardTitle="'Local SEO'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" 
                        :cardLink="cardLink"
                        />
                </div>
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-solid fa-chart-column" class="card_icon" />
                    <ServiceCardComponent :cardTitle="'Seo Analysis'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" 
                        :cardLink="cardLink"
                        />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ServiceCardComponent from './ServiceCardComponent.vue';
import HeaderSectionComponent from './HeaderSectionComponent.vue';

export default {
    name: 'ServicesConponent',
    props: {
        title: String,
        desc: String,
    },
    data() {
        return {
            cardLink: 'Read more',
        }
    },
    components: {
    ServiceCardComponent,
    HeaderSectionComponent
}
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.services {
    padding-bottom: 5rem;

    color: $pj-text_white;
    background-color: $pj-section_bg_darker;

    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/img/pattern_background.png);

    .content {

        .card_component {

            .card_wrapper {
                aspect-ratio: 3/2;
                color: $pj-text_white;
                background-color: $pj-section_bg_dark;
            }
        }
    }
}
</style>
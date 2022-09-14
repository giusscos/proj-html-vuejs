<template>
    <section class="section template">
        <div class="content container">
            <div class="header_component">
                <h2 class="component_title capitalize">
                    {{ title }}
                </h2>
                <p class="component_desc">
                    {{ desc }}
                </p>
            </div>
            <div class="card_component">
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-solid fa-road" class="card_icon" />
                    <InfoCardComponent :cardTitle="'Establish Goals'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" />
                </div>
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-solid fa-video" class="card_icon" />
                    <InfoCardComponent :cardTitle="'Work With a Team'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" />
                </div>
                <div class="card_wrapper">
                    <font-awesome-icon icon="fa-solid fa-droplet" class="card_icon" />
                    <InfoCardComponent :cardTitle="'Get Results'"
                        :cardDesc="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?'" />
                </div>
            </div>
            <div class="img_template">
                <img src="../assets/img/agency-seo-desk-front.jpg" alt="agency-seo" />
            </div>
        </div>
    </section>
</template>
<script>
import InfoCardComponent from './InfoCardComponent.vue';

export default {
    name: 'InfoConponent',
    props: {
        title: String,
        desc: String,
    },
    components: {
        InfoCardComponent,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.template {
    .content {

        .card_component {

            .card_wrapper {
                aspect-ratio: 3/2;
                text-align: center;
                color: $pj-text_black;
                padding: 2.5rem 1.5rem;
                background-color: $pj-text_white;

                .card_icon {
                    font-size: 1.5rem;
                    padding-bottom: 1.5rem;
                    color: $pj-text_hover;
                }
            }
        }
    }
}
</style>
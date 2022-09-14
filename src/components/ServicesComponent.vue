<template>
    <section class="section services">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <div class="card_component">
                <div class="card_wrapper" v-for="(card,i) in cardsService" :key="`${i}service`">
                    <font-awesome-icon :icon="`${card.icon}`" class="card_icon" />
                    <h3 class="component_title">
                        {{ card.title }}
                    </h3>
                    <p class="component_desc">
                        {{ card.desc }}
                    </p>
                    <a :href="card.link_href" class="capitalize component_link">
                        {{ card.link_text }}
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';

const cardsService = [
    {
        icon: 'fa-brands fa-google',
        title: 'Google SEO',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
        link_href: '#',
        link_text: 'Read more',
    },
    {
        icon: 'ç fa-gear',
        title: 'Brand strategy',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
        link_href: '#',
        link_text: 'Read more',
    },
    {
        icon: 'fa-solid fa-building',
        title: 'Local SEO',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
        link_href: '#',
        link_text: 'Read more',
    },
    {
        icon: 'fa-solid fa-chart-column',
        title: 'SEO Analysis',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
        link_href: '#',
        link_text: 'Read more',
    },
]

export default {
    name: 'ServicesConponent',
    props: {
        title: String,
        desc: String,
    },
    data() {
        return {
            cardsService
        }
    },
    components: {
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
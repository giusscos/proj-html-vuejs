<template>
    <section class="section services">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <CardComponent :cards="cardsService" />
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';
import CardComponent from './CardComponent.vue';

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
    HeaderSectionComponent,
    CardComponent
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
}
</style>
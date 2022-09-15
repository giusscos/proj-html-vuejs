<template>
    <section class="section template">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <CardComponent :cards="cardsTemplate" />
            <div class="img_template">
                <img src="../assets/img/agency-seo-desk-front.jpg" alt="agency-seo" />
            </div>
        </div>
    </section>
</template>

<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';
import CardComponent from './CardComponent.vue';

const cardsTemplate = [
    {
        icon: 'fa-road',
        title: 'Establish Goals',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
    },
    {
        icon: 'fa-video',
        title: 'Work With a Team',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
    },
    {
        icon: 'fa-droplet',
        title: 'Get Results',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, blanditiis. Laboriosam consequuntur veritatis tempore nemo obcaecati ducimus accusamus ipsum dolor?',
    },
]

export default {
    name: 'TemplateConponent',
    props: {
        title: String,
        desc: String,
    },
    components: {
        HeaderSectionComponent,
        CardComponent
    },
    data() {
        return {
            cardsTemplate
        }
    }
}
</script>
<style lang="scss" scoped>
.template {
    padding-bottom: 0;
}
</style>
<template>
    <section class="section news">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <CardComponent :cards="cardsNews" />
            <div class="btn_wrapper">
                <a href="#" class="btn btn_primary uppercase">
                    Go to news
                </a>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';
import CardComponent from './CardComponent.vue';

const cardsNews = [
    {
        img: 'related-service-2-320x202.jpg',
        title: 'Why you need a SEO agency now',
        date: 'November 1st, 2017',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut blanditiis eum asperiores. Nemo fugit facere totam repellat voluptates qui?',
    },
    {
        img: 'related-service-4-320x202.jpg',
        title: 'SEO tips for your startup',
        date: 'November 1st, 2017',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut blanditiis eum asperiores. Nemo fugit facere totam repellat voluptates qui?',
    },
    {
        img: 'blog-post-6-320x202.jpg',
        title: 'Image optimization for your site',
        date: 'November 1st, 2017',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut blanditiis eum asperiores. Nemo fugit facere totam repellat voluptates qui?',
    },
]

export default {
    name: "NewsComponent",
    props: {
        title: String,
        desc: String,
    },
    components: { 
        HeaderSectionComponent,
        CardComponent 
    },
    data(){
        return {
            cardsNews
        }
    }
}
</script>
<style lang="scss" scoped>
.news{
    padding-bottom: 7rem;
}
</style>
<template>
    <section class="section feedback">
        <div class="content container">
            <HeaderSectionComponent :title="title" />
            <FeedbackSlideComponent :feedbacks="feedbacks" :currentIndex="currentIndex" />
            <div class="goto_wrapper">
                <span class="goto_dot" :class="currentIndex === i ? 'active' : ''"  @click="goTo(i)"
                    v-for="(dot,i) in feedbacks" :key="`${i}dot`">
                </span>
            </div>
            <div class="clients_wrapper">
                <span v-for="(client,i) in clients" :key="`${i}client`">
                    <img :src="require(`../assets/img/${client}`)" :alt="`client: ${i}`">
                </span>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';
import FeedbackSlideComponent from './FeedbackSlideComponent.vue';

const feedbacks = [
    {
        icon: 'testimonials-2.jpg',
        title: 'Luis Desalvo',
        job: 'creo tech',
        feed: 'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.'
    },
    {
        icon: 'testimonials-1.jpg',
        title: 'Shelia McCourtney',
        job: 'architect',
        feed: 'Beauty is when you can appreciate yourself. When you love yourself, that’s when you’re most beautiful.'
    },
]

const clients = [
    'clients_partner_1-200x202.png',
    'clients_partner_2-200x202.png',
    'clients_partner_3-200x202.png',
    'clients_partner_4-200x202.png',
    'clients_partner_5-200x202.png',
    'clients_partner_6-200x202.png',
]

let currentIndex = 0

export default {
    name: "FeedbackComponent.vue",
    props: {
        title: String,
    },
    components: {
        HeaderSectionComponent,
        FeedbackSlideComponent
    },
    data() {
        return {
            feedbacks,
            clients,
            currentIndex,
        }
    },
    methods: {
        goTo(dot) {
            console.log(dot)

            this.currentIndex = dot

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.feedback {
    padding-bottom: 2.5rem;
    background-color: $pj-text_white;

    .content {
        gap: 1.5rem;

        .clients_wrapper {
            border-top: 1px solid $pj-btn_border_gray;
            display: flex;
            flex-grow: 1;
            justify-content: space-evenly;

            span {
                cursor: pointer;
                padding: 3rem 0;
                width: 100px;
            }
        }
    }
}
</style>
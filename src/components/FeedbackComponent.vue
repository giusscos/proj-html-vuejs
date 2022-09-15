<template>
    <section class="section feedback">
        <div class="content container">
            <HeaderSectionComponent :title="title" />
            <FeedbackSlideComponent :feedbacks="feedbacks" />
            <div class="goto_wrapper">
                <span :class="dot.active ? 'active' : ''" class="goto_dot"  v-for="(dot,i) in feedbacks" :key="`${i}dot`">
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
        active: true,
        icon: 'testimonials-2.jpg',
        title: 'Luis Desalvo',
        job: 'creo tech',
        feed: 'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.'
    },
    {
        active: false,
        icon: 'testimonials-1.jpg',
        title: 'Luisa Desalvo',
        job: 'creo tech',
        feed: 'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.'
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

export default {
    name: "FeedbackComponent.vue",
    props: {
        title: String,
    },
    components: { HeaderSectionComponent, FeedbackSlideComponent },
    data(){
        return {
            feedbacks,
            clients
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.feedback {
    padding-bottom: 3rem;
    background-color: $pj-text_white;

    .clients_wrapper{
        border-top: 1px solid $pj-btn_border_gray;
        display: flex;
        flex-grow: 1;
        justify-content: space-evenly;

        span{
            cursor: pointer;
            padding: 2rem 0;
            width: 100px;
        }
    }
}
</style>
<template>
    <section class="section feedback">
        <div class="content container">
            <HeaderSectionComponent :title="title" />
            <FeedbackSlideComponent :feedbacks="feedbacks" />
            <div class="goto_wrapper">
                <span :class="dot.active ? 'active' : ''" class="goto_dot"  v-for="(dot,i) in feedbacks" :key="`${i}dot`">
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

export default {
    name: "FeedbackComponent.vue",
    props: {
        title: String,
    },
    components: { HeaderSectionComponent, FeedbackSlideComponent },
    data(){
        return {
            feedbacks
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.feedback {
    padding-bottom: 3rem;
    background-color: $pj-text_white;
}
</style>
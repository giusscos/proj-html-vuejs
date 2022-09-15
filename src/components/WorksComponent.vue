<template>
    <section class="section works">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <div class="grid_component">
                <div class="grid_item" v-for="(img,i) in imgs" :key="`${i}workImg`">
                    <img :src="require(`../assets/img/${img}`)" :alt="`image-work-${i}`" />
                </div>
            </div>
            <div class="btn_wrapper">
                <a href="#" class="btn btn_primary uppercase">
                    View our work
                </a>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';

const imgs = [
    "case-study-gallery-3-1.jpg",
    "case-study-gallery-2-1.jpg",
    "case-study-gallery-1-1.jpg",
    "case-study-gallery-4-1.jpg",
    "case-study-gallery-5-1.jpg",
    "case-study-gallery-6-1.jpg",
]

export default {
    name: "WorksComponent",
    props: {
        title: String,
        desc: String,
    },
    data() {
        return {
            imgs
        };
    },
    components: { HeaderSectionComponent }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.works {
    padding-bottom: 7rem;

    .grid_component {
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
        padding-bottom: 2rem;
    }


}
</style>
<template>
    <section class="section works">
        <div class="content container">
            <div class="header_component">
                <h2 class="component_title capitalize">
                    {{ title }}
                </h2>
                <p class="component_desc">
                    {{ desc }}
                </p>
            </div>
            <div class="grid_component">
                <div class="grid_item" v-for="(img,i) in imgs" :key="`${i}workImg`">
                    <img :src="require(`../assets/img/${img}`)" :alt="`image-work-${i}`"/>
                </div>
            </div>
            <div class="btn_wrapper">
                <a class="btn btn_primary uppercase">
                    View our work
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'WorksComponent',
    props: {
        title: String,
        desc: String,
    },
    data(){
        return {
            imgs: [
                'case-study-gallery-3-1.jpg',
                'case-study-gallery-1-1.jpg',
                'case-study-gallery-2-1.jpg',
                'case-study-gallery-4-1.jpg',
                'case-study-gallery-5-1.jpg',
                'case-study-gallery-6-1.jpg',
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';
.works{
    padding-bottom: 5rem;

    .grid_component{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .btn_wrapper{
        padding-top: 3rem;
    }
}
</style>
<template>
    <section class="section works">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <div class="grid_component">
                <a href="#" class="grid_item" v-for="(img,i) in imgs" :key="`${i}workImg`">
                    <font-awesome-icon icon="fa-solid fa-link" class="work_link_icon" />
                    <img :src="require(`../assets/img/${img}`)" :alt="`image-work-${i}`" />
                </a>
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

        .grid_item {
            position: relative;

            .work_link_icon,
            &:after {
                position: absolute;
                opacity: 0;
                transition: 300ms ease-in-out;
            }

            .work_link_icon {
                z-index: 99;
                font-size: 4rem;
                color: $pj-text_white;

                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            &:after {
                content: '';
                background: linear-gradient(180deg, rgb(145, 148, 255) 0%, rgba(255, 255, 255, 1) 100%);
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }

            &:hover {

                .work_link_icon,
                &:after {
                    opacity: 1;
                }
            }
        }
    }


}
</style>
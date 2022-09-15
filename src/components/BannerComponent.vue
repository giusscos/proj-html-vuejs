<template>
    <section class="section banner">
        <div class="black_filter">
            <div class="content container">
                <HeaderSectionComponent :title="title" :desc="desc" />
                <div class="banner_cta_wrapper">
                    <a :href="link.href" class="btn btn_primary uppercase">
                        {{ link.text }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue';
export default {
    name: "BannerComponent",
    props: {
        title: String,
        desc: String,
        link: Object,
    },
    components: { HeaderSectionComponent }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.banner {
    padding: 0;
    color: $pj-text_white;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/img/case-study-gallery-3-1.jpg);

    .black_filter{
        padding: 5rem 0;
        opacity: 0.8;
    }

    .content {
        align-items: center;

        .banner_cta_wrapper {
            text-align: center;
            flex-basis: 100%;
        }
    }
}
</style>
<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}template`">
            <div class="card_image_wrapper">
                <img class="component_img" :src="require(`../assets/img/${card.img}`)" :alt="`news: ${card.title}`" />
            </div>
            <h3 class="component_title">
                {{ card.title }}
            </h3>
            <p class="component_date">
                {{ card.date }}
            </p>
            <p class="component_desc">
                {{ card.desc }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewsCardComponent',
    props: {
        cards: Object,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.card_component {

    .card_wrapper {
        flex-grow: 1;
        padding: 0;
        background-color: transparent;

        .card_image_wrapper{

            .component_img{
                display: inline-block;
                object-fit: cover;
                object-position: center;
            }
        }

        .component_title {
            padding: 1rem 0 0.5rem;
            color: $pj-text_hover;
        }

        .component_date {
            font-size: 0.8rem;
            padding-bottom: 0.5rem;
        }

        .component_desc{
            padding: 0 3rem;
        }
    }
}
</style>
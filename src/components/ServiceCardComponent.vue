<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}service`">
            <font-awesome-icon :icon="`${card.icon}`" class="card_icon" />
            <h3 class="component_title">
                {{ card.title }}
            </h3>
            <p class="component_desc">
                {{ card.desc }}
            </p>
            <a :href="card.link_href" class="capitalize component_link">
                {{ card.link_text }}
                <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ServiceCardComponent',
    props: {
        cards: Array,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.card_component {

    .card_wrapper {
        aspect-ratio: 3/2;
        color: $pj-text_white;
        background-color: $pj-section_bg_dark;
    }
}
</style>
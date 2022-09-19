<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}template`">
            <a href="#" v-if="card.icon">
                <font-awesome-icon :icon="`fa-solid ${card.icon}`" class="card_icon" />
                <h3 class="component_title card_title">
                    {{ card.title }}
                </h3>
                <p class="component_desc">
                    {{ card.desc }}
                </p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardTemplate',
    props: {
        cards: Array,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.card_wrapper {
    >a {
        &:hover {
            .card_title {
                color: $pj-text_hover;
            }

        }
    }
}
</style>
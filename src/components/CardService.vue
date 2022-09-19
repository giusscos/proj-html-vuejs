<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}service`">
            <a href="#">
                <font-awesome-icon :icon="`fa-solid ${card.icon}`" class="card_icon" />
                <h3 class="component_title card_title">
                    {{ card.title }}
                </h3>
                <p class="component_desc">
                    {{ card.desc }}
                </p>
                <a v-if="card.link_text" :href="card.link_href" class="capitalize component_link">
                    {{ card.link_text }}
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </a>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardService',
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

.services {
    .card_component {

        .card_wrapper {
            aspect-ratio: 3/2;
            color: $pj-text_white;
            background-color: $pj-section_bg_dark;

            .component_desc {
                line-height: 1.5rem;
                padding-right: 1.5rem;
                padding-left: 1.5rem;
            }
        }
    }
}
</style>
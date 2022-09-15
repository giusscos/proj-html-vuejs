<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}template`">
            <font-awesome-icon :icon="`fa-solid ${card.icon}`" class="card_icon" />
            <h3 class="component_title">
                {{ card.title }}
            </h3>
            <p class="component_desc">
                {{ card.desc }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TemplateCardComponent',
    props: {
        cards: Array,
    }
}
</script>
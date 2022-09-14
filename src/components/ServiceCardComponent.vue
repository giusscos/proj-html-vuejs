<template>
    <div class="component_wrapper">
        <h3 class="component_title">
            {{ cardTitle }}
        </h3>
        <p class="component_desc">
            {{ cardDesc }}
        </p>
        <a href="#" class="capitalize component_link">
            {{ cardLink }} 
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </a>
    </div>
</template>
<script>
export default {
    name: 'ServiceCardComponent',
    props: {
        cardTitle: String,
        cardDesc: String,
        cardLink: String,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss'
</style>
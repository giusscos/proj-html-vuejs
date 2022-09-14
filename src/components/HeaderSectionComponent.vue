<template>
    <div class="header_component">
        <h2 class="component_title capitalize">
            {{ title }}
        </h2>
        <p class="component_desc">
            {{ desc }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'HeaderSectionComponnet',
    props: {
        title: String,
        desc: String,
    }
}
</script>
<style lang="scss" scoped>

</style>
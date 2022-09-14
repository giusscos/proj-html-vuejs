<template>
    <div class="info_wrapper">
        <h3 class="info_title">
            {{ cardTitle }}
        </h3>
        <p class="info_desc">
            {{ cardDesc }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'InfoCardComponent',
    props: {
        cardTitle: String,
        cardDesc: String,
    }
}
</script>
<style lang="scss" scoped>
.info_wrapper{
    .info_title{
        padding-bottom: 1.5rem;
    }
}
</style>
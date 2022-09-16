<template>
    <header class="main_header">
        <div class="header_wrapper container">
            <div class="header-logo_wrapper">
                <img src="../assets/img/logo_seo_w_1x.png" alt="logo" />
            </div>
            <nav class="header-main_nav">
                <NavList />
            </nav>
        </div>
    </header>
</template>
<script>
import NavList from './NavList.vue';

export default {
    name: "HeaderComponent",
    components: { NavList }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    color: $pj-text_white;

    .header_wrapper {
        display: flex;
        align-items: center;

        padding-top: 1rem;
        padding-bottom: 1rem;

        .header-logo_wrapper{
            margin-right: auto;
        }
    }
}
</style>
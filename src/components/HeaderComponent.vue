<template>
    <header class="main_header">
        <div class="header_wrapper container">
            <div class="header-logo_wrapper">
                <img src="../assets/img/logo_seo_w_1x.png" alt="logo" />
            </div>
            <nav class="header-main_nav">
                <ul class="nav-list_wrapper">
                    <li class="list_item">
                        <a href="#" class="item_link capitalize">
                            Home
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="#" class="item_link capitalize">
                            Who we are
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="#" class="item_link capitalize">
                            What we do
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="#" class="item_link capitalize">
                            Where we work
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="#" class="item_link capitalize">
                            Careers
                            <span class="badge badge_primary uppercase">
                                Apply
                            </span>
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="#" class="item_link capitalize">
                            News
                        </a>
                    </li>
                    <li class="list_item">
                        <a href="#" class="btn btn_primary item_link uppercase">
                            Get in touch now
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderComponent',
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_header {
    .header_wrapper {
        display: flex;
        padding: 1rem 0;
        align-items: center;

        .header-main_nav {
            margin-left: auto;

            .nav-list_wrapper {
                gap: 1rem;
                display: flex;

                .list_item {
                    display: flex;
                    align-items: center;

                    .item_link {

                        &:hover {
                            color: $pj-text_hover;
                        }
                    }
                }
            }
        }
    }
}
</style>
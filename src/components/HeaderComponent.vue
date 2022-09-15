<template>
    <header class="main_header">
        <div class="header_wrapper container">
            <div class="header-logo_wrapper">
                <img src="../assets/img/logo_seo_w_1x.png" alt="logo" />
            </div>
            <nav class="header-main_nav">
                <ul class="nav-list_wrapper">
                    <li class="list_item" :class="nav.active ? 'active' : ''" v-for="(nav,i) in navLinks" :key="`${i}navLink`">
                        <a :href="nav.link_href" :class="nav.link_type === 'link' ? '' : 'btn btn_primary'" class="item_link capitalize">
                            {{ nav.link_text }}
                            <span :class="nav.link_badge ? 'badge badge_primary uppercase' : ''">
                                {{ nav.link_badge }}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
const navLinks = [
    {
        active: true,
        link_href: '#',
        link_text: 'Home',
        link_badge: '',
        link_type: 'link',
    },
    {
        active: false,
        link_href: '#',
        link_text: 'Who we are',
        link_badge: '',
        link_type: 'link',
    },
    {
        active: false,
        link_href: '#',
        link_text: 'What we do',
        link_badge: '',
        link_type: 'link',
    },
    {
        active: false,
        link_href: '#',
        link_text: 'Where we work',
        link_badge: '',
        link_type: 'link',
    },
    {
        active: false,
        link_href: '#',
        link_text: 'Careers',
        link_badge: 'Apply',
        link_type: 'link',
    },
    {
        active: false,
        link_href: '#',
        link_text: 'News',
        link_badge: '',
        link_type: 'link',
    },
    {
        active: false,
        link_href: '#',
        link_text: 'Get in touch now',
        link_badge: '',
        link_type: 'button',
    },
]
export default {
    name: 'HeaderComponent',
    data() {
        return {
            navLinks,
        }
    }
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

                    &.active{
                        color: $pj-text_hover;
                    }
                    .item_link {

                        &:hover {
                            color: $pj-text_hover;
                        }

                        &.btn_primary {
                            &:hover {
                                color: $pj-text_white;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<template>
    <footer class="main_footer">
        <div class="content container">
            <div class="logo_wrapper">
                <img src="../assets/img/logo_seo_1x.png" alt="logo-avada" />
            </div>
            <ul class="nav-list_wrapper">
                <li class="list_item" v-for="(nav,i) in navLinks" :key="`${i}navLink`">
                    <a :href="nav.link_href" :class="nav.active ? 'active' : ''" class="item_link capitalize">
                        {{ nav.link_text }}
                        <span :class="nav.link_badge ? 'badge badge_primary uppercase' : ''">
                            {{ nav.link_badge }}
                        </span>
                    </a>
                </li>
            </ul>
            <div class="credits_footer">
                <span>
                    &copy; Copyright 2012 - 2020
                </span>
                <span>
                    Avada Theme by <a href="#" class="credits_link">ThemeFusion</a>
                </span>
                <span>
                    All rights reserved
                </span>
                <span>
                    Powered by <a href="#" class="credits_link">WordPress</a>
                </span>
            </div>
        </div>
    </footer>
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
        link_badge: '',
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
    name: 'FooterComponent',
    data() {
        return {
            navLinks
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_footer {
    padding: 4rem 0;

    .content {
        >* {
            flex-basis: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        .logo_wrapper {
            justify-content: center;
            padding-bottom: 2rem;
        }

        .nav-list_wrapper {
            justify-content: space-evenly;

            .list_item {

                .item_link {

                    &.active {
                        color: $pj-text_hover;
                    }

                    &:hover {
                        color: $pj-text_hover;
                    }
                }
            }
        }

        .credits_footer {
            padding-top: 2rem;
            justify-content: center;

            span {
                color: $pj-btn_border_gray;
                padding: 0 0.5rem;
                border-right: 2px solid $pj-btn_border_gray;

                .credits_link {
                    color: $pj-text_black;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
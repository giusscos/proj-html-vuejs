<template>
    <footer class="main_footer">
        <div class="content container">
            <div class="logo_wrapper">
                <img src="../assets/img/logo_seo_1x.png" alt="logo-avada" />
            </div>
            <NavList />
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
            <ul class="socials_wrapper">
                <li class="list_item" v-for="(social,i) in socials" :key="`${i}social`">
                    <a :href="social.link_href" class="item_link">
                        <font-awesome-icon :icon="`fa-brands ${social.icon}`" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
import NavList from './NavList.vue'
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

const socials = [
    {
        icon: 'fa-facebook',
        link_href: '#',
    },
    {
        icon: 'fa-instagram',
        link_href: '#',
    },
    {
        icon: 'fa-twitter',
        link_href: '#',
    },
    {
        icon: 'fa-youtube',
        link_href: '#',
    },
]

export default {
    name: "FooterComponent",
    data() {
        return {
            navLinks,
            socials
        };
    },
    components: { NavList }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.main_footer {
    padding: 3rem 0;

    .content {
        >* {
            flex-basis: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .logo_wrapper {
            justify-content: center;
        }
    }

    .credits_footer {
        padding-top: 1rem;
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

    .socials_wrapper {
        gap: 2rem;
        justify-content: center;

        .list_item {
            .item_link {
                color: $pj-btn_border_gray;
                font-size: 1.75rem;

                &:hover {
                    color: $pj-text_black;
                }
            }
        }
    }
}
</style>
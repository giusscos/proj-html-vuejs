import Vue from "vue";

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

const state = Vue.observable({
    links: navLinks,
})

export default state
<template>
    <ul class="nav-list_wrapper">
        <li class="list_item" :class="link.active ? 'active' : ''" v-for="(link,i) in getLinks" :key="`${i}link`">
            <a :href="link.link_href" :class="link.link_type === 'link' ? '' : 'btn btn_primary'"
                class="item_link capitalize">
                {{ link.link_text }}
                <span :class="link.link_badge ? 'badge badge_primary uppercase' : ''">
                    {{ link.link_badge }}
                </span>
            </a>
        </li>
    </ul>
</template>
<script>
import state from '../store'

export default {
    name: 'NavList',
    computed: {
        getLinks() {
            return state.links
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.nav-list_wrapper {
    gap: 2.25rem;
    display: flex;

    .list_item {
        font-size: 0.9rem;
        font-weight: bold;

        display: flex;
        align-items: center;

        &.active {
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

            .badge {
                margin-left: 0.25rem;
            }
        }
    }
}

.main_footer {
    .nav-list_wrapper {

        .list_item {

            &:last-of-type {
                display: none;

            }
        }
    }
}
</style>
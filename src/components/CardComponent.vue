<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}template`">
            <span v-if="card.icon">
                <font-awesome-icon :icon="`fa-solid ${card.icon}`" class="card_icon" />
                <h3 class="component_title">
                    {{ card.title }}
                </h3>
                <p class="component_desc">
                    {{ card.desc }}
                </p>
                <a v-if="card.link_text" :href="card.link_href" class="capitalize component_link">
                    {{ card.link_text }}
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </a>
            </span>
            <span v-else-if="card.plan_category">
                <h4 class="plan_category">
                    {{ card.plan_category }}
                </h4>
                <div class="plan_price">
                    <span class="top">
                        &dollar;
                    </span>
                    {{ card.plan_price.split(',')[0].toString() }}
                    <span class="col_cent">
                        <span class="top colored">
                            {{ card.plan_price.split(',')[1].toString() }}
                        </span>
                        <span class="bottom">
                            monthly
                        </span>
                    </span>
                </div>
                <p class="plan_info capitalize">
                    {{ card.plan_project_quantity }} projects
                </p>
                <p class="plan_info capitalize">
                    {{ card.plan_project_storage}} GB Storage
                </p>
                <p class="plan_info capitalize">
                    {{ card.plan_project_users }} Users
                </p>
                <div class="btn_wrapper">
                    <a href="#" class="btn btn_border component_link uppercase">
                        Start today
                    </a>
                </div>
            </span>
            <span v-else-if="card.date">
                <div class="card_image_wrapper">
                    <img class="component_img" :src="require(`../assets/img/${card.img}`)"
                        :alt="`news: ${card.title}`" />
                </div>
                <h3 class="component_title">
                    {{ card.title }}
                </h3>
                <p class="component_date">
                    {{ card.date }}
                </p>
                <p class="component_desc">
                    {{ card.desc }}
                </p>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TemplateCardComponent',
    props: {
        cards: Array,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.services {
    .card_component {

        .card_wrapper {
            aspect-ratio: 3/2;
            color: $pj-text_white;
            background-color: $pj-section_bg_dark;

            .component_desc{
                line-height: 1.5rem;
                padding-right: 1.5rem;
                padding-left: 1.5rem;
            }
        }
    }
}

.plans {
    .card_component {

        .card_wrapper {
            color: $pj-text_black;
            background-color: $pj-section_bg_ligth;

            aspect-ratio: 4/6;
            padding: 1rem 1.5rem;
            flex-basis: calc((100% / 4) - 1rem);

            .plan_category {
                font-size: 1.5rem;
                padding: 1rem 0 3rem;
            }

            .plan_price {
                display: flex;
                justify-content: center;

                padding-bottom: 3.5rem;

                font-size: 3rem;
                font-weight: bold;
                color: $pj-text_alternative;

                .top {
                    font-size: 1rem;
                    color: $pj-text_black;
                }

                .col_cent {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;

                    .top {
                        &.colored {
                            color: currentColor;
                        }
                    }

                    .bottom {
                        font-size: 0.8rem;
                        color: $pj-text_black;

                        align-self: flex-end;
                    }
                }
            }

            .plan_info {
                padding-bottom: 2.5rem;
                opacity: 0.7;
            }

            .btn_wrapper {
                padding: 1rem 0;

                .component_link {
                    font-size: 0.75rem;
                }
            }
        }
    }
}

.news {
    .card_component {
        padding-top: 2.5rem;
        padding-bottom: 2rem;

        .card_wrapper {
            padding: 0;
            background-color: transparent;

            .card_image_wrapper {

                .component_img {
                    display: inline-block;
                }
            }

            .component_title {
                font-size: 1.25rem;
                padding: 1rem 0 0.5rem;
                color: $pj-text_hover;
            }

            .component_date {
                font-size: 0.8rem;
                padding-bottom: 0.5rem;
            }

            .component_desc {
                line-height: 1.5rem;
                padding: 0 3rem;
            }
        }
    }
}
</style>
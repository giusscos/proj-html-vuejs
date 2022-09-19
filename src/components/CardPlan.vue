<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}template`">
            <a href="#">
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
                    <a href="#" class="btn btn_border component_link uppercase" :class="i === 2 ? 'active' : ''">
                        Start today
                    </a>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardPlan',
    props: {
        cards: Array,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.card_wrapper {
    >a {
        &:hover {
            .card_title {
                color: $pj-text_hover;
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
</style>
<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(plan,i) in plans" :key="`${i}plan`">
            <h4 class="plan_category">
                {{ plan.plan_category }}
            </h4>
            <div class="plan_price">
                <span class="top">
                    &dollar;
                </span>
                {{ plan.plan_price.split(',')[0].toString() }}
                <span class="col_cent">
                    <span class="top colored">
                        {{ plan.plan_price.split(',')[1].toString() }}
                    </span>
                    <span class="bottom">
                        monthly
                    </span>
                </span>
            </div>
            <p class="plan_info capitalize">
                {{ plan.plan_project_quantity }} projects
            </p>
            <p class="plan_info capitalize">
                {{ plan.plan_project_storage}} GB Storage
            </p>
            <p class="plan_info capitalize">
                {{ plan.plan_project_users }} Users
            </p>
            <div class="btn_wrapper">
                <a href="#" class="btn btn_border component_link uppercase">
                    Start today
                </a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PlanCardComponent',
    props: {
        plans: Array,
    }
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.card_component {

    .card_wrapper {
        aspect-ratio: 4/6;
        padding: 1rem 1.5rem;
        color: $pj-text_black;
        flex-basis: calc((100% / 4) - 1rem);
        background-color: $pj-section_bg_ligth;

        .plan_category {
            padding-bottom: 1.5rem;
        }

        .plan_price {
            display: flex;
            justify-content: center;
            padding-bottom: 1rem;

            font-size: 2rem;
            font-weight: bold;
            color: $pj-text_alternative;

            .top {
                font-size: 0.75rem;
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
                    align-self: flex-end;
                    color: $pj-text_black;
                    font-size: 0.5rem;
                }
            }
        }

        .plan_info {
            padding: 1.75rem 0;
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
</style>
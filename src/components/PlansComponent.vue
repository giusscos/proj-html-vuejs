<template>
    <section class="section plans">
        <div class="content container">
            <HeaderSectionComponent :title="title" :desc="desc" />
            <CardPlan :cards="plansCard" />
        </div>
    </section>
</template>
<script>
import HeaderSectionComponent from './HeaderSectionComponent.vue'
import CardPlan from './CardPlan.vue'

const plansCard = [
    {
        plan_category: 'Standard',
        plan_price: '19,99',
        plan_project_quantity: '5',
        plan_project_storage: '5',
        plan_project_users: 'Unlimited',
    },
    {
        plan_category: 'Premium',
        plan_price: '29,99',
        plan_project_quantity: '10',
        plan_project_storage: '15',
        plan_project_users: 'Unlimited',
    },
    {
        plan_category: 'Professional',
        plan_price: '39,99',
        plan_project_quantity: '15',
        plan_project_storage: '30',
        plan_project_users: 'Unlimited',
    },
    {
        plan_category: 'Extreme',
        plan_price: '59,99',
        plan_project_quantity: 'Unlimited',
        plan_project_storage: 'Unlimited',
        plan_project_users: 'Unlimited',
    },
]

export default {
    name: 'PlansComponent',
    props: {
        title: String,
        desc: String,
    },
    components: {
        HeaderSectionComponent,
        CardPlan,
    },
    data() {
        return {
            plansCard
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.plans {
    padding-bottom: 7rem;
    color: $pj-text_white;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/img/background1.jpg);
}
</style>
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
        plans: Object,
    }
}
</script>
<style lang="scss" scoped>

</style>
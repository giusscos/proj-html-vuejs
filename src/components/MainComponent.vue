<template>
    <main class="main_content">
        <JumboComponent />
        <TemplateComponent 
            :title="'Meet the new agency SEO template from the avada team'"
            :desc="descSection" />
        <ServicesComponent 
            :title="'See our top notch services'"
            :desc="descSection" />
        <WorksComponent 
            :title="'Our work'"
            :desc="descSection" />
        <PlansComponent 
            :title="'Our Plans'"
            :desc="descSection" />
    </main>
</template>
<script>
import JumboComponent from './JumboComponent.vue'
import TemplateComponent from './TemplateComponent.vue'
import ServicesComponent from './ServicesComponent.vue'
import WorksComponent from './WorksComponent.vue'
import PlansComponent from './PlansComponent.vue'

export default {
    name: 'MainComponent',
    components: {
        JumboComponent,
        TemplateComponent,
        ServicesComponent,
        WorksComponent,
        PlansComponent,
    },
    data(){
        return {
            descSection: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci quas reiciendis animi ullam! Harum.',
        }
    }
}
</script>
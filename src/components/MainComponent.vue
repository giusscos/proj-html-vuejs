<template>
    <main class="main_content">
        <JumboComponent />
        <InfoComponent 
            :title="'Meet the new agency SEO template from the avada team'"
            :desc="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci quas reiciendis animi ullam! Harum.'" />
        <ServicesComponent 
            :title="'See our top notch services'"
            :desc="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci quas reiciendis animi ullam! Harum.'" />
        <WorksComponent 
            :title="'Our work'"
            :desc="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci quas reiciendis animi ullam! Harum.'" />
    </main>
</template>
<script>
import JumboComponent from './JumboComponent.vue'
import InfoComponent from './InfoComponent.vue'
import ServicesComponent from './ServicesComponent.vue'
import WorksComponent from './WorksComponent.vue'

export default {
    name: 'MainComponent',
    components: {
        JumboComponent,
        InfoComponent,
        ServicesComponent,
        WorksComponent,
    }
}
</script>
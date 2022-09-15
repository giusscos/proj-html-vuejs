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
            :title="'Our plans'"
            :desc="descSection" />
        <NewsComponent 
            :title="'Our news'" 
            :desc="descSection" />
        <FeedbackComponent 
            :title="'What our clients say'" />
        <BannerComponent 
            :title="'Start your free consultation'"
            :desc="descSection"
            :link="{
                href: '#',
                text: 'Contact us now'
            }" />
    </main>
</template>
<script>
import JumboComponent from './JumboComponent.vue'
import TemplateComponent from './TemplateComponent.vue'
import ServicesComponent from './ServicesComponent.vue'
import WorksComponent from './WorksComponent.vue'
import PlansComponent from './PlansComponent.vue'
import NewsComponent from './NewsComponent.vue'
import FeedbackComponent from './FeedbackComponent.vue'
import BannerComponent from './BannerComponent.vue'

export default {
    name: 'MainComponent',
    components: {
    JumboComponent,
    TemplateComponent,
    ServicesComponent,
    WorksComponent,
    PlansComponent,
    NewsComponent,
    FeedbackComponent,
    BannerComponent
},
    data(){
        return {
            descSection: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci quas reiciendis animi ullam! Harum.',
        }
    }
}
</script>
<template>
    <div class="feed_component">
        <div :class="feed.active ? 'active' : ''" class="feed_wrapper" v-for="(feed,i) in feedbacks" :key="`${i}feed`">
            <div class="feed_img_wrapper">
                <img :src="require(`../assets/img/${feed.icon}`)" :alt="`${feed.title}'s image'`">
            </div>
            <p class="component_desc italic">
                {{ feed.feed }}
            </p>
            <div class="component_wrapper">
                <h4 class="component_title">
                    {{ feed.title }},
                </h4>
                <p class="component_desc uppercase">
                    {{ feed.job }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FeedbackSlideComponent',
    props: {
        feedbacks: Object,
    }
}
</script>
<style lang="scss" scoped>
.feed_component {
    display: flex;
    overflow-x: hidden;
    
    .feed_wrapper{
        position: relative; 
        left: 100%;
        min-width: 100%;
        
        &.active{
            left: 0;
        }

        gap: 1.25rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        
        .feed_img_wrapper{
            width: 150px;
            overflow: hidden;
            aspect-ratio: 1/1;
            border-radius: 50%;

            img{
                object-fit: cover;
                object-position: center;
            }
        }

        >.component_desc{
            width: 600px;
            line-height: 1.75rem;
            text-align: center;
        }

        .component_wrapper{
            display: flex;
            gap: 0.2rem;
        }
    }
}
</style>

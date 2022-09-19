<template>
    <div class="card_component">
        <div class="card_wrapper" v-for="(card,i) in cards" :key="`${i}template`">
            <a href="#">
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
            </a>
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

.card_wrapper {
    >a {
        &:hover {
            .card_title {
                color: $pj-text_hover;
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
                display: flex;
                justify-content: center;
                overflow: hidden;

                &:hover {
                    .component_img {
                        transform: scale(1.1);
                    }
                }

                .component_img {
                    width: 100%;
                    object-fit: cover;
                    transition: 700ms ease-in-out;

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
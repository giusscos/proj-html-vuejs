<template>
    <section class="section jumbo_wrapper">
        <div class="content container">
            <div class="content_text_wrapper">
                <h1 class="jumbo_title capitalize">
                    SEM compaigns made simple with avida
                </h1>
                <p class="jumbo_desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aliquid iure modi inventore ut perspiciatis.
                </p>
                <div class="jumbo_btn">
                    <a href="#" class="btn btn_primary uppercase">
                        Buy avada now
                    </a>
                    <a href="#" class="btn btn_alternative uppercase">
                        Contact us
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'JumboComponent'
}
</script>
<style lang="scss" scoped>
@import '../style/index.scss';

.jumbo_wrapper {
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/img/1-hero-image.png);

    .content {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .content_text_wrapper {
            flex-basis: calc(100% / 2);

            color: $pj-text_white;

            .jumbo_title {
                font-size: 3rem;
                padding: 1rem 0;
            }

            .jumbo_desc {
                opacity: 0.7;
                padding: 1rem 0;
                font-size: 1.25rem;
                line-height: 2rem;
            }

            .jumbo_btn {
                gap: 1rem;
                display: flex;
                padding: 1rem 0.5rem;

                .btn {
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
            }
        }
    }

}
</style>
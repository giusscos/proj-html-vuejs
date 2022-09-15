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
                font-size: 3.25rem;
                padding: 0.5rem 0;
            }

            .jumbo_desc {
                opacity: 0.7;
                padding: 0.5rem 0;
                font-size: 1.25rem;
                line-height: 2rem;
            }

            .jumbo_btn {
                gap: 1.25rem;
                display: flex;
                padding: 2rem 0;

                .btn {
                    border-radius: 1.5rem;
                    padding: 1.05rem 2rem;
                }
            }
        }
    }

}
</style>
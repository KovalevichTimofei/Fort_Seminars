<template>
    <div id="details" class="preacher-part">
        <SectionTitle title="Проповедник" classname="dark"/>
        <div class="preacher-card-container">
            <img src="../assets/pritcher_photo.jpg" alt="Портрет проповедника">
            <div class="info-container">
                <div class="pritcher-ifo">Алексей Коломийцев</div>
                <div class="divider"></div>
                <div class="pritcher-description">Пастор-учитель Библейской церкви "СЛОВО БЛАГОДАТИ", Батл Граунд, Вашингтон, США</div>
            </div>
        </div>
    </div>
</template>

<script>
  import SectionTitle from "@/components/SectionTitle";

  export default {
    name: "PreacherPart",
    components: { SectionTitle },
  }
</script>

<style lang="scss" type="text/scss" scoped>
    .preacher-part {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        & > div {
            margin: 50px;
            color: #3E1229;
            font-size: 30px;

            @media(max-width: 950px) {
                font-size: 25px;
            }
            @media(max-width: 720px) {
                margin: 20px 50px;
                font-size: 20px;
            }
            @media(max-width: 450px) {
                margin: 20px 50px;
                font-size: 15px;
            }
        }
        .title-shadow {
            font-size: 8rem;
            line-height: 8rem;
            margin: 0;
            opacity: .1;
            position: absolute;
            z-index: 0;
        }

        @media(max-width: 720px) {
            margin-top: 20px;
        }
    }
    .preacher-card-container {
        display: flex;

        img {
            width: 200px;
            height: 200px;
            border-radius: 100px;

            @media(max-width: 720px) {
                width: 150px;
                height: 150px;
            }
            @media(max-width: 450px) {
                width: 100px;
                height: 100px;
                margin-top: 30px;
            }
        }
    }

    .info-container {
        max-width: 500px;
        margin-left: 50px;

        div {
            margin: 20px;
        }

        .divider {
            height: 3px;
            background-color: black;
            width: 200px;
            margin: 0 20px;
        }

        @media(max-width: 450px) {
            margin-left: 20px;
        }
    }
</style>

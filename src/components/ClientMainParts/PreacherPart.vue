<template>
    <div id="details" class="preacher-part">
        <SectionTitle title="Проповедник" classname="dark"/>
        <div class="preacher-card-container">
            <img v-bind:src="preacher.photo_url" alt="Портрет проповедника">
            <div class="info-container">
                <div class="preacher-ifo">{{preacher. ifo}}</div>
                <div class="divider"></div>
                <div class="preacher-description">{{preacher. info}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SectionTitle from '@/components/SectionTitle';

export default {
  name: 'PreacherPart',
  components: { SectionTitle },
  computed: mapState('preachers', ['preacher']),
};
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../../assets/theme";

    .preacher-part {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;

        & > div {
            margin: 50px;
            color: $dark-letters-color;//$light-letters-color;
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
            max-width: 200px;
            min-width: 200px;
            width: 200px;
            max-height: 200px;
            min-height: 200px;
            height: 200px;
            border-radius: 100px;

            @media(max-width: 720px) {
                max-width: 150px;
                min-width: 150px;
                width: 150px;
                max-height: 150px;
                min-height: 150px;
                height: 150px;
            }
            @media(max-width: 450px) {
                max-width: 100px;
                min-width: 100px;
                width: 100px;
                max-height: 100px;
                min-height: 100px;
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
            background-color: $light-letters-color;
            width: 200px;
            margin: 0 20px;
        }

        @media(max-width: 450px) {
            margin-left: 20px;
        }
    }
</style>

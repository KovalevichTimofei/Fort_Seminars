<template>
    <footer class="contacts-part" id="contacts">
        <SectionTitle title="Контакты" classname="light" class="title"/>
        <div class="subtitle">По всем вопросам</div>
        <div class="divider"></div>
        <div class="info">
            <div>Роман: <a href="tel:+375333510809"><span>+375 (33)</span> 351-08-09</a></div>
        </div>
    </footer>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';

export default {
  name: 'Contacts',
  components: { SectionTitle },
};
</script>

<style lang="scss" type="text/scss" scoped>
    @import "../../assets/theme";

    .contacts-part {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $dark-main-color;
        color: $dark-letters-color;
        text-transform: uppercase;
        font-size: 30px;

        @media(max-width: 950px) {
            font-size: 25px;
        }
        @media(max-width: 720px) {
            padding: 20px 0 30px 0;
        }

        .title {
            margin-bottom: 70px;

            @media(max-width: 720px) {
                margin-bottom: 40px;
            }
        }
    }
    .subtitle {
        margin: 10px 0;
    }
    .divider {
        height: 3px;
        background-color: #F2EFE4;//white;
        width: 200px;
        margin: 10px 0;
    }
    .info {
        text-align: center;
        margin: 10px 0;

        a {
            text-decoration: none;
            color: $dark-letters-color;
        }

        span {
            color: $letters-color;
        }
    }
</style>

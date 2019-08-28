<template>
    <footer class="contacts-part" id="contacts">
        <div class="title">Контакты</div>
        <div class="title-shadow">Контакты</div>
        <div class="subtitle">По всем вопросам</div>
        <div class="divider"></div>
        <div class="info">
            <div>Роман: <span>+375 (33)</span> 351-08-09</div>
            <div>Максим: <span>+375 (29)</span> 808-27-66</div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "Contacts"
  }
</script>

<style lang="scss" type="text/scss" scoped>
    .contacts-part {
        padding: 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #3E1229;
        color: white;
        text-transform: uppercase;
        font-size: 30px;

        .title {
            margin: 50px;
            color: firebrick;
            font-size: 30px;
            position: relative;
            z-index: 1;
        }
        .title-shadow {
            font-size: 8rem;
            line-height: 8rem;
            margin: 0;
            opacity: .1;
            position: absolute;
            z-index: 0;
            color: white;
        }
    }
    .subtitle {
        margin: 10px 0;
    }
    .divider {
        height: 3px;
        background-color: white;
        width: 200px;
        margin: 10px 0;
    }
    .info {
        text-align: center;
        margin: 10px 0;

        span {
            color: firebrick;
        }
    }
</style>

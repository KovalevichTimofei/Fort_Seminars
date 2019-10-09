<template>
    <div>
        <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.min.css">
        <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/theme/default.css">
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
        <div class="page-container">
            <md-app md-waterfall md-mode="fixed">
                <md-app-toolbar class="md-primary">
                    <span class="md-title">Admin Main</span>
                </md-app-toolbar>

                <md-app-drawer md-permanent="full">
                    <md-toolbar class="md-transparent" md-elevation="0">
                        Navigation
                    </md-toolbar>

                    <md-list>
                        <md-list-item>
                            <md-icon>move_to_inbox</md-icon>
                            <span class="md-list-item-text">Inbox</span>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>send</md-icon>
                            <span class="md-list-item-text">Sent Mail</span>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>delete</md-icon>
                            <span class="md-list-item-text">Trash</span>
                        </md-list-item>

                        <md-list-item>
                            <md-icon>error</md-icon>
                            <span class="md-list-item-text">Spam</span>
                        </md-list-item>
                    </md-list>
                </md-app-drawer>

                <md-app-content>
                    <router-view></router-view>
                </md-app-content>
            </md-app>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AdminMain",
  }
</script>

<style lang="scss" scoped>
    .md-app {
        max-height: 400px;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>

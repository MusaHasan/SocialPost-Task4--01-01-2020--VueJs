<template>
  <nav>
    <v-app-bar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn class="titelTxt" text router to="/">Post Eater</v-btn>

        <v-spacer></v-spacer>

        <v-toolbar-items class="caption">
            <v-btn text router to="/team">Team</v-btn>
        </v-toolbar-items>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo">
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon left class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    
  </nav>
</template>

<script>
    export default{
        data() {
            return {
                drawer: false,
                links: [
                    { icon: 'mdi-home-circle', text: 'Home', route: '/'},
                    { icon: 'mdi-account-card-details', text: 'Team', route: '/team'}
                ]
            }

        },
        created(){
        },
        computed: {
        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
</style>
<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 lg3>
              <div class="text-xs-center">
                <v-avatar size="200px">
                  <img
                          class="img-circle elevation-7 mb-1"
                          src="https://avatars3.githubusercontent.com/u/4674014?s=460&v=4"
                  >
                </v-avatar>
                <div class="headline">Amy <span style="font-weight:bold">Lashley</span></div>
                <div class="subheading text-xs-center grey--text pt-1 pb-3">I like to make stuff</div>
                <v-layout justify-space-between>
                  <a href="/" class="body-2">Home</a>
                  <a href="javascript:;" class="body-2">About</a>
                  <a href="https://github.com/amylashley" class="body-2">Github</a>
                  <a href="https://www.linkedin.com/in/amylashley/" class="body-2">LinkedIn</a>
                </v-layout>
              </div>
            </v-flex>
            <v-flex xs12 lg6 offset-lg2>
              <medium></medium>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer class="secondary" app>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3"></div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Medium from './components/Medium.vue'
export default {
  components: {
    Medium
  },
  name: 'app',
    data () {
        return {
            title: 'Your Logo',
            medium: {} //store code and state here
        }
    }
}
</script>

<style lang="scss">

</style>

<template>
      <div id="wrapper">
          <nav class="navbar navbar-default " role="navigation">
              <div class="container-fluid">
                  <div class="navbar-header">
                      <router-link class="navbar-brand" to="/">vue模板</router-link>
                  </div>
                  <div>
                      <ul class="nav navbar-nav nav-pills pull-right">
                          <li class="active">
                              <router-link to="/home">列表页</router-link>
                          </li>
                          <li>
                              <router-link to="/time">其他页</router-link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div class="container">
                  <!-- <timebox></timebox> -->
                  <router-view/>
          </div>
          <popitem></popitem>
      </div>
</template>

<script>
import TimeBox from './components/time.vue'
import PopItem from './components/pop.vue'
import './publicService/jquery.min.js';
import './publicService/bootstrap.min.js';
export default {
  name: 'App',
  components: {
      'timebox':TimeBox,
      'popitem':PopItem
  },
  mounted() {
      $(function(){
          $('.container').height($(window).height() - $('.navbar').height() - 10);
      })
  },
}
</script>

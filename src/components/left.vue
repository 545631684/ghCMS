<template>
  <div class="Left_aslide">
    <div>
      <ul>
        <li class="Left_li01">
          <img src="../assets/img/gh_09.png"/>
        </li>
        <li class="Left_li02">
          <img src="../assets/img/gh_10.png"/>
        </li>
        <li class="Left_li03">
          <img src="../assets/img/gh_11.png"/>
        </li>
        <li class="Left_li04">
          <img src="../assets/img/gh_12.png"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name: 'left',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
  .Left_aslide { margin: 0; height: 100%;}
  .Left_aslide div { width: 90%; background:url(../assets/img/gh_07.jpg) repeat;height: 100%;}
  .Left_aslide div ul { height: 500px; margin:0;  width: 103%; padding: 51% 0; list-style: none;}
  .Left_aslide div ul li { width: 100%; height: 80px; list-style: none;text-align: center; padding-top: 10%; margin-bottom: 2%;}
  .Left_aslide div ul li img{ width: 55%; margin: auto;}
  .Left_aslide div ul li:hover { background: url(../assets/img/gh_08.png) 1% 1% / 350px 111px no-repeat; width: 100%;}
</style>

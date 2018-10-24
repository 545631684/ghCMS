<template>
  <div class="Left_aslide">
    <div>
      <ul>
        <li class="Left_li01" :class="{on:mkall.gh}">
          <router-link tag="a" class="" to="/backstage/gh"><img src="../assets/img/gh_09.png" /></router-link>
        </li>
        <li class="Left_li02" :class="{on:mkall.yh}">
          <router-link tag="a" class="" to="/backstage/yh"><img src="../assets/img/gh_10.png" /></router-link>
        </li>
        <li class="Left_li03" :class="{on:mkall.xm}">
          <router-link tag="a" class="" to="/backstage/xm"><img src="../assets/img/gh_11.png" /></router-link>
        </li>
        <li class="Left_li04" :class="{on:mkall.dm}">
          <router-link tag="a" class="" to="/backstage/dm"><img src="../assets/img/gh_12.png" /></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
	props: ['mkall'],
  name: 'left',
  data () {
    return {
    }
  },
  methods: {
  	tab (type) {
    	type === 'gh' ? this.mkall.gh = true : this.mkall.gh = false
	    type === 'yh' ? this.mkall.yh = true : this.mkall.yh = false
	    type === 'xm' ? this.mkall.xm = true : this.mkall.xm = false
	    type === 'dm' ? this.mkall.dm = true : this.mkall.dm = false
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .Left_aslide { margin: 0; height: 100%;}
  .Left_aslide div { width: 90%; background:url(../assets/img/gh_07.jpg) repeat;height: 100%;}
  .Left_aslide div ul { height: 500px; margin:0;  width: 103%; padding: 51% 0; list-style: none;}
  .Left_aslide div ul li { width: 100%; height: 80px; list-style: none;text-align: center; padding-top: 10%; margin-bottom: 2%; cursor: pointer;}
  .Left_aslide div ul li img{ width: 55%; margin: auto;}
  .Left_aslide div ul li:hover,.Left_aslide div ul li.on { background: url(../assets/img/gh_08.png) 1% 1% / 350px 111px no-repeat; width: 100%;}
</style>

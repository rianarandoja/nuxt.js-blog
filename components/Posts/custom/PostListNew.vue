<template>
  <div>
    <div class="blog-nav">
      <ul>
        <li><AppButton 
          btn-style="small" 
          @click="pageNr=1">Main</AppButton></li>
        <li><AppButton 
          btn-style="small" 
          @click="pageNr=2">Wrap</AppButton></li>
        <li><AppButton 
          btn-style="small" 
          @click="pageNr=3">NoWrap</AppButton></li>
        <li><AppButton 
          btn-style="small" 
          @click="pageNr=4">Images</AppButton></li>
        <li><AppButton 
          btn-style="small" 
          @click="pageNr=5">Four-Five</AppButton></li>
      </ul>
    </div>
    <div/>
    <PostList 
      v-if="pageNr==1" 
      :posts="posts"/>
    <PostWrap
      v-if="pageNr==2" 
      :posts="wrapPosts"/>
    <PostNoWrap 
      v-if="pageNr==3" 
      :posts="posts"/>
    <Parallax
      v-if="pageNr==4"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import PostWrap from '@/components/Posts/custom/PostWrap'
import PostNoWrap from '@/components/Posts/custom/PostNoWrap'
import Parallax from '@/components/VueExplorations/Parallax'

export default {
  components: {
    PostList,
    PostWrap,
    PostNoWrap,
    Parallax
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      pageNr: 1,
      wrapPosts: [
        this.posts[0],
        this.posts[7],
        this.posts[5],
        this.posts[1],
        this.posts[6]
      ]
    }
  }
}
</script>

<style scoped>
.blog-nav {
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin: 0 10px;
  font-size: 1.2rem;
}

li a {
  text-decoration: none;
  color: black;
}

li a:hover,
li a:active,
li a.nuxt-link-active {
  color: green;
}
</style>

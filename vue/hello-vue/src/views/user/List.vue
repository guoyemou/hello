<template>
<!--  大坑所有的元素，必须不能直接在根节点下-->
 <div> <h1>用户列表</h1>
   {{id}}
 </div>
</template>
<script>
export default {
  props:['id'],
  name: "UserList"
}
</script>
<style scoped>
</style>

<template>
  <header class="flex flex-col">
  <b-navbar variant="faded" type="light" class="w-100 p-3 bg-secondary text-light">
    <b-navbar-brand href="#">
      <img src="@/assets/images/icon.png"  width="80" height="80"/>
    </b-navbar-brand>
    <b-navbar-brand tag="h1" class="mb-0 title">Gustavo Nemeth </b-navbar-brand>
  </b-navbar>
    <h4 style="padding-left: 20px">
      <img src="/svg/388-mail.svg" width="20" height="20"> gustavomnemeth@gmail.com |
      <a href="https://www.linkedin.com/in/gustavonemeth/" target="_blank"><img src="/svg/458-linkedin.svg" width="20" height="20"> gustavonemeth</a>  |
      <a href="https://github.com/gustavo-nemeth" target="_blank"><img src="/svg/433-github.svg" width="20" height="20"> gustavo-nemeth</a>
    </h4>
    <b-icon icon="linkedin"/>
  </header>

</template>

<script>

export default {
  name: "Header",
}
</script>
<style scoped>

.title{
  font-size: 2.75em;
  font-family: "Yu Gothic";
  font-weight: bold;
}
a {
  text-decoration: none;
  color:black;
}

</style>
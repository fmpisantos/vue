<template>
    <div>
        <h1>{{msg||"Empty msg"}}</h1>
    </div>
</template>

<script>
export default {
  name: "SimpleHomePage",
  props: {
    msg: String
  }
};
</script>

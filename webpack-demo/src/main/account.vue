<template>
<div>

    <h3>account</h3>
     <router-link to='/account/login'>login</router-link>
    <router-link to='/account/register'>register</router-link>
    <transition mode="out-in">
    
    <router-view></router-view>
    </transition>
</div>
</template>

<script>
</script>
<style>
.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateX(150px);
}
.v-enter-active,
.v-leave-active{
    transition: all .5s ease;
}

</style>

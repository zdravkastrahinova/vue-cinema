<template>
    <div>
        <app-navbar></app-navbar>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from './views/Navbar';

    export default {
        components: {
            appNavbar: Navbar
        }
    }
</script>

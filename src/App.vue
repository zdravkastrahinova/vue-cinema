<template>
    <div>
        <navbar></navbar>

        <div class="container mt-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from './views/Navbar';

    export default {
        components: {
            navbar: Navbar
        }
    }
</script>

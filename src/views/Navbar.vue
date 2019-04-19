<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <div class="container">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/trending">Vue Cinema</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/movies">Movies</b-nav-item>
                    <b-nav-item to="/users">Users</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>
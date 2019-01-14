<template>
    <div>
        <h3>Movies</h3>

        <div class="clearfix mt-3">
            <form @submit.prevent="onSearch">
                <div class="float-left">
                    <input v-model="searchValue"
                           class="form-control"
                           placeholder="Enter movie title...">
                </div>

                <div class="float-left ml-2">
                    <button class="btn btn-outline-secondary">Search</button>
                </div>
            </form>
        </div>

        <div v-if="!movies || !movies.length" class="text-center">
            No movies found.
        </div>

        <div class="row mt-3">
            <div v-for="movie in movies"
                 v-bind:key="movie.id"
                 class="col-md-6">
                <div class="card flex-row mt-3 movie-container">
                    <div class="image-container">
                        <img :src="movie.imagePath"
                             :alt="movie.title"
                             class="movie-image"/>
                    </div>
                    <div class="movie-info d-flex flex-column p-3">
                        <h5>{{ movie.title }}</h5>
                        <p class="text-dark"><span>{{ movie.releaseDate }}</span>
                        <p class="text-black-50 movie-description">{{ movie.description }}</p>

                        <div class="mt-auto d-flex justify-content-end">
                            <b-button variant="default" class="btn-details">View details</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import constants from '../../constants';

    export default {
        data() {
            return {
                movies: [],
                searchValue: ''
            }
        },
        created() {
            axios.get(`${constants.apiUrl}/movies`)
                .then(response => {
                    this.movies = response.data;
                });
        },
        methods: {
            onSearch() {
                axios.get(`${constants.apiUrl}/movies?title_like=${this.searchValue}`)
                    .then(response => {
                        this.movies = response.data;
                    });
            }
        }
    }
</script>
<template>
    <div>
        <h3>Trending Movies</h3>

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

        <div v-if="!trendingMovies || !trendingMovies.length" class="text-center">
            No trending movies found.
        </div>

        <div class="row mt-3">
            <div v-for="trendingMovie in trendingMovies"
                 v-bind:key="trendingMovie.id"
                 class="col-md-6">
                <div class="card flex-row mt-3 movie-container">
                    <div class="image-container">
                        <img :src="trendingMovie.imagePath"
                             :alt="trendingMovie.title"
                             class="movie-image"/>
                    </div>
                    <div class="movie-info d-flex flex-column p-3">
                        <h5>{{ trendingMovie.title }}</h5>
                        <p class="text-dark"><span>{{ trendingMovie.releaseDate }}</span>
                        <p class="text-black-50 movie-description">{{ trendingMovie.description }}</p>

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
                trendingMovies: [],
                searchValue: ''
            }
        },
        created() {
            axios.get(`${constants.apiUrl}/trending`)
                .then(response => {
                    this.trendingMovies = response.data;
                });
        },
        methods: {
            onSearch() {
                axios.get(`${constants.apiUrl}/trending?title_like=${this.searchValue}`)
                    .then(response => {
                        this.trendingMovies = response.data;
                    });
            }
        }
    }
</script>
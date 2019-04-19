<template>
    <div>
        <div class="row">
            <div class="col-md-10">
                <h3>Movies</h3>
            </div>
            <div class="col-md-2 text-right">
                <button type="button" class="btn btn-outline-primary">Add</button>
            </div>
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
    import movieGraphqlService from '../../api/movie-graphql-service';

    export default {
        data() {
            return {
                movies: [],
                searchValue: ''
            }
        },
        created() {
            movieGraphqlService.getAll((response) => {
                this.movies = response.data.movies;
            }, (error) => {
                console.log(error);
            });
        }
    }
</script>
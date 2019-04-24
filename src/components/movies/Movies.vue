<template>
    <div>
        <div class="row mb-4">
            <h3>Movies</h3>
        </div>

        <div class="row">
            <h5>Add New Movie</h5>
            <div class="col-md-12 pr-0 pl-0">
                <b-form @submit="onSubmit">
                    <b-form-group id="movie-title"
                                  label="Title"
                                  label-for="movie-title-input">
                        <b-form-input
                                id="movie-title-input"
                                v-model="form.title"
                                type="text"
                                required
                                placeholder="Enter title..."
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="description"
                                  label="Description"
                                  label-for="description-input">
                        <b-form-input
                                id="description-input"
                                v-model="form.description"
                                type="text"
                                required
                                placeholder="Enter description..."
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="release-date"
                                  label="Release Date"
                                  label-for="release-date-input">
                        <b-form-input
                                id="release-date-input"
                                v-model="form.releaseDate"
                                type="date"
                                required
                                placeholder="Enter release date..."
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="image-path"
                                  label="Image"
                                  label-for="image-path-input">
                        <b-form-input
                                id="image-path-input"
                                v-model="form.imagePath"
                                type="text"
                                placeholder="Enter image path..."
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Save</b-button>
                </b-form>
            </div>
        </div>

        <div class="row">
            <div v-if="!movies || !movies.length" class="text-center">
                No movies found.
            </div>

            <div class="row mt-3">
                <div v-for="movie in movies"
                     v-bind:key="movie.id"
                     class="col-md-6">
                    <div class="card flex-row mt-3 movie-container">
                        <div class="image-container">
                            <img v-if="movie.imagePath"
                                 :src="movie.imagePath"
                                 :alt="movie.title"
                                 class="movie-image"/>

                            <img v-if="!movie.imagePath"
                                 src="../../assets/default.jpg"
                                 alt="default"
                                 class="movie-image"/>
                        </div>

                        <div class="movie-info d-flex flex-column p-3">
                            <h5>{{ movie.title }}</h5>
                            <p class="text-dark"><span>{{ movie.releaseDate }}</span>
                            <p class="text-black-50 movie-description">{{ movie.description }}</p>

                            <div class="mt-auto d-flex justify-content-end">
                                <b-button variant="default" class="btn-details" @click="viewDetails(movie._id)">
                                    View details
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal ref="movie-details-modal" title="Movie Details" hide-footer lazy>
            <div class="d-block text-center">
                <h5>{{selectedMovie.title}}</h5>
                <h6 class="text-muted">Released on <strong>{{selectedMovie.releaseDate}}</strong></h6>
                <hr>

                <small>{{selectedMovie.description}}</small>
            </div>
        </b-modal>
    </div>
</template>

<style scoped>
    .movie-info {
        width: 100%;
    }
</style>

<script>
    import moment from 'moment';
    import movieGraphqlService from '../../api/movie-graphql-service';

    export default {
        data() {
            return {
                movies: [],
                selectedMovie: {},
                form: {
                    title: '',
                    description: '',
                    releaseDate: ''
                }
            }
        },
        created() {
            this.get();
        },
        methods: {
            get() {
                movieGraphqlService.getAll((response) => {
                    this.movies = response.data.movies;

                    this.movies.forEach(movie => {
                        movie.releaseDate = moment(movie.releaseDate).format(moment.HTML5_FMT.DATE);
                    });

                }, (error) => {
                    console.log(error);
                });
            },
            viewDetails(_id) {
                if (_id) {
                    this.selectedMovie = this.movies.find(m => m._id === _id);
                    this.$refs['movie-details-modal'].show();
                }
            },
            resetForm() {
                this.form = {
                    title: '',
                    description: '',
                    releaseDate: ''
                }
            },
            onSubmit(event) {
                event.preventDefault();

                const movie = {
                    title: this.form.title,
                    description: this.form.description,
                    releaseDate: this.form.releaseDate
                };

                movieGraphqlService.create(movie, () => {
                    this.$toast.success('Movie was successfully saved.', {
                        position: 'bottom',
                        duration: 5000
                    });

                    this.resetForm();
                    this.get();
                }, (error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

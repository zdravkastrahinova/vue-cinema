<template>
    <div>
        <h3>Serials</h3>

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

        <div v-if="!serials || !serials.length" class="text-center">
            No serials found.
        </div>

        <div class="row mt-3">
            <div v-for="serial in serials"
                 v-bind:key="serial.id"
                 class="col-md-6">
                <div class="card flex-row mt-3 movie-container">
                    <div class="image-container">
                        <img :src="serial.imagePath"
                             :alt="serial.title"
                             class="movie-image"/>
                    </div>
                    <div class="movie-info d-flex flex-column p-3">
                        <h5>{{ serial.title }}</h5>
                        <p class="text-dark"><span>{{ serial.releaseDate }}</span>
                        <p class="text-black-50 movie-description">{{ serial.description }}</p>

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
                serials: [],
                searchValue: ''
            }
        },
        created() {
            axios.get(`${constants.apiUrl}/serials`)
                .then(response => {
                    this.serials = response.data;
                });
        },
        methods: {
            onSearch() {
                axios.get(`${constants.apiUrl}/serials?title_like=${this.searchValue}`)
                    .then(response => {
                        this.serials = response.data;
                    });
            }
        }
    }
</script>
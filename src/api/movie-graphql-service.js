import graphqlTag from 'graphql-tag';
import graphqlClient from './graphql';

const MovieGraphqlService = {
    async getAll(success, failure) {
        try {
            const response = await graphqlClient.query({
                query: graphqlTag`
                    query {
                        movies {
                            _id
                            title
                            description
                            releaseDate
                            imagePath
                        }
                    }
                `
            });
            success(response);
        } catch (error) {
            failure(error);
        }
    },

    async create(variables, success, failure) {
        try {
            const response = await graphqlClient.mutate({
                mutation: graphqlTag`
                    mutation($title: String!, $description: String, $releaseDate: String!, $imagePath: String){
                    addMovie(title: $title, description: $description, releaseDate: $releaseDate, imagePath: $imagePath){
                        _id
                        title
                        description
                        releaseDate
                        imagePath
                    }    
                }`,
                variables,
            });
            success(response);

        } catch (error) {
            failure(error);
        }
    },

    async delete(_id, success, failure) {
        try {
            const response = await graphqlClient.mutate({
                mutation: graphqlTag`
                mutation($_id: String!){
                    deleteMovie(_id: $_id){
                        _id
                    }
                }
                `,
                variables: {
                    _id
                }
            });
            success(response);
        } catch (error) {
            failure(error);
        }
    }
};

export default MovieGraphqlService;
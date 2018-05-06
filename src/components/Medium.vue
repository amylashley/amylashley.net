<template>
    <div>
        <div v-for="post in posts" :key="post.title">
            <v-card class="mb-3" hover>
                <v-card-media
                        class="white--text"
                        height="170px"
                        :src="'https://cdn-images-1.medium.com/max/1600/'+ post.virtuals.previewImage.imageId"
                >
                    <v-container fill-height fluid>
                        <v-layout>
                            <v-flex xs12 align-end d-flex>
                                <span class="headline">{{ post.title }}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-text>
                    {{ post.content.subtitle }}
                </v-card-text>
                <v-card-actions>
                    <v-btn icon class="red--text">
                        <v-icon medium>fa-reddit</v-icon>
                    </v-btn>
                    <v-btn icon class="light-blue--text">
                        <v-icon medium>fa-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                        <v-icon medium>fa-facebook</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat class="blue--text" @click="readMore(post.uniqueSlug)">Read More</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            axios.get(`https://otlq6v2w52.execute-api.us-east-1.amazonaws.com/Ready/medium`)
                .then(response => {
                    this.posts = response.data.payload.references.Post
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        methods: {
            readMore(uniqueSlug) {
                window.location = `https://medium.com/@amycancode/${uniqueSlug}`
            }
        },
        data () {
            return {
                posts: {},
                errors: {}
            }
        }
    }
</script>

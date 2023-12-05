import { defineStore } from 'pinia'
import axios from 'axios';
export const useRecipeStore = defineStore('recipe', {

    state: () => {
        return {
            search: '',
            pages: 0,
            items: [],
            itemData: [],
            errors: {},
        }
    },

    getters: {
        getRecipe: (state) => state.items,
        getData: (state) => state.itemData,
        getTotalPages: (state) => state.pages
    },

    actions: {
        async getDataRecipe(pageNumber) {
            try {
                const results = await axios.get('http://localhost:3000/recipe', {
                    params: { q: this.search, _page: pageNumber, _limit: 9 },
                });
                const totalPages = parseInt(results.headers['x-total-count'] / 9, 10);
                console.log(results);
                this.pages = totalPages
                this.items = results.data;
            } catch (error) {
                this.errors = error.data
            }
        },

        async gotoData(recipeID) {
            axios.get('http://localhost:3000/recipe', { params: { id: recipeID } }).then((result) => {
                this.itemData = result.data[0]
            }).catch((err) => {
                console.log(err)
            });
        }
    }

});
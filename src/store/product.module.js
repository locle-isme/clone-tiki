import {ProductService} from "../common/api.service";
import {FETCH_PRODUCTS, GET_PRODUCT} from "./actions.type";
import {SET_LIST_FILTERS, SET_LIST_PRODUCTS, SET_PRODUCT} from "./mutations.type";

const state = {
    currentProduct: {images: []},
    products: {data: [], total_count: 0},
    filters: {
        brands: {data: [], total_count: 0},
        suppliers: {data: [], total_count: 0},
        sort_settings: {data: [], total_count: 0}
    }
};
const getters = {
    currentProduct(state) {
        return state.currentProduct;
    },
    products(state) {
        return state.products || {data: [], total_count: 0};
    },

    filters(state) {
        return state.filters || {
            brands: {data: [], total_count: 0},
            suppliers: {data: [], total_count: 0},
            sort_settings: {data: [], total_count: 0}
        };
    }

};
const mutations = {
    [SET_PRODUCT](state, product) {
        state.currentProduct = product;
    },
    [SET_LIST_PRODUCTS](state, list) {
        state.products = list;
    },
    [SET_LIST_FILTERS](state, list) {
        state.filters = list;
    },
};
const actions = {
    [FETCH_PRODUCTS](context, params) {
        return ProductService.query(params)
            .then((response) => {
                const {status, data} = response;
                if (status == "success") {
                    const {products, filters} = data;
                    context.commit(SET_LIST_PRODUCTS, products);
                    context.commit(SET_LIST_FILTERS, filters);
                    return data;
                } else {
                    throw data;
                }
            })
    },
    [GET_PRODUCT](context, id) {
        return ProductService.get(id)
            .then((response) => {
                const {status, data} = response;
                if (status == "success") {
                    context.commit(SET_PRODUCT, data);
                    return data;
                } else {
                    throw data;
                }
            })
    }
};
export default {state, getters, mutations, actions}
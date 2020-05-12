import Vue from 'vue'
import {
    RECEIVE_ADDRESS_MUTATION,
    RECEIVE_CATEGORIES_MUTATION,
    RECEIVE_SHOPS_MUTATION,
    RECEIVE_USER_INFO_MUTATION,
    RESET_USER_INFO_MUTATION,
    RECEIVE_INFO_MUTATION,
    RECEIVE_RATINGS_MUTATION,
    RECEIVE_GOODS_MUTATION,
    INCREMENT_FOOD_COUNT_MUTATION,
    DECREMENT_FOOD_COUNT_MUTATION,
    CLEAR_CART_MUTATION,
    RECEIVE_SEARCH_SHOPS_MUTATION
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS_MUTATION](state, data) {
        state.address = address
    },
    [RECEIVE_CATEGORIES_MUTATION](state, data) {
        state.categories = data
    },
    [RECEIVE_SHOPS_MUTATION](state,data){
        state.shops = data
    },
    [RECEIVE_USER_INFO_MUTATION](state,data){
        state.userInfo = data
    }
}
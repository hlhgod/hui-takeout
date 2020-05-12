//actions 模块专门处理异步请求
import {
    RECEIVE_ADDRESS_MUTATION,
    RECEIVE_CATEGORIES_MUTATION,
    RECEIVE_SHOPS_MUTATION,
    RECEIVE_USER_INFO_MUTATION,
    RESET_USER_INFO_MUTATION,
    RECEIVE_GOODS_MUTATION,
    RECEIVE_RATINGS_MUTATION,
    RECEIVE_INFO_MUTATION,
    INCREMENT_FOOD_COUNT_MUTATION,
    DECREMENT_FOOD_COUNT_MUTATION,
    CLEAR_CART_MUTATION,
    RECEIVE_SEARCH_SHOPS_MUTATION
  } from './mutation-types'
  import {
    reqFoodCategories,
    reqShops
  } from '../api'

export default{
  //异步获取食品分类列表
  async getCategoriesAction(store){
      const result=await reqFoodCategories()
      if(result.err===0){
          store.commit(RECEIVE_CATEGORIES_MUTATION,result.data)
      }
  },
  async getShopAction(store){
      const result=await reqShops()
      if(result.err===0){
          store.commit(RECEIVE_SHOPS_MUTATION,result.data)
      }
  },
  recordUser(store,userinfo){
    store.commit(RECEIVE_USER_INFO_MUTATION,userinfo)
  }


}
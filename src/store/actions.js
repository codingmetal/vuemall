export default {
  addCart(context, cart) {
    return new Promise((resolve, reject) => {
      const exist = context.state.cartItems.find(item => {return item.iid == cart.iid})
      if (exist) {
        context.commit('increaseAmountByIid' ,cart.iid)
        resolve("当前商品的数量加1")
      } else {
        cart.amount = 1;
        cart.isChecked = true;
        context.commit('addCart', cart)
        resolve("商品添加购物车成功")
      }
    })
  }
}

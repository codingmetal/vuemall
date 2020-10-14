export default {
  addCart(state, cart) {
    state.cartItems.push(cart)
  },
  increaseAmountByIid(state, iid) {
    state.cartItems.find(item => item.iid = iid).amount++
  },
  toggleCheck(state, index) {
    state.cartItems[index].isChecked = !state.cartItems[index].isChecked
  },
  increaseAmount(state, index) {
    state.cartItems[index].amount++
  },
  decreaseAmount(state, index) {
    if (state.cartItems[index].amount > 0)
      state.cartItems[index].amount--
  },
  allPick(state) {
    const all = state.cartItems.every(item => {return item.isChecked == true})

    if (all) {
      for (const item of state.cartItems) {
        item.isChecked = false
      }
    } else {
      for (const item of state.cartItems) {
        item.isChecked = true
      }
    }
  },
  removeItem(state, index) {
    state.cartItems.splice(index, 1)
  }

}

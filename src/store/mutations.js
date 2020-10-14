export default {
  addCart(state, cart) {
    const exist = state.cartItems.find(item => {return item.iid == cart.iid})
    if (exist === undefined) {
      cart.amount = 1;
      cart.isChecked = true;
      state.cartItems.push(cart)
    } else {
      exist.amount +=1
    }
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
      state.isAllPick = false
    } else {
      for (const item of state.cartItems) {
        item.isChecked = true
      }
      state.isAllPick = true
    }
  },
  removeItem(state, index) {
    state.cartItems.splice(index, 1)
  }

}

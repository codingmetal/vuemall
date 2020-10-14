export default {
  itemsCount(state) {
    return state.cartItems.length
  },
  totalPrice(state) {
    let total = state.cartItems.reduce((pre, cur) => {
                  if (cur.isChecked == true)
                    return pre + cur.price*cur.amount
                  else return pre
                }, 0)
    return total.toFixed(2)
  },
  isAllPick(state) {
    if (state.cartItems.length == 0) return false
    return !(state.cartItems.find(item => item.isChecked == false))
  },
  pickedCount(state) {
    return state.cartItems.filter(item => item.isChecked == true).length
  }
}

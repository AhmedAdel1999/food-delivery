import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart:[]
}

const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:((state,action)=>{
        state.cart=[
          ...state.cart,
          action.payload
        ]
    }),

    removeFromCart:((state,action)=>{
      state.cart=state.cart.filter((item)=>item.id!=action.payload)
    }),

    increaseQuantity:((state,action)=>{
      state.cart = state.cart.map((item)=>{
          if(item.id==action.payload){
             return{
              ...item,
              quantity:item.quantity+1
             }
          }else{
            return item
          }
        })
    }),

    decreaseQuantity:((state,action)=>{
        let {id,quantity} = action.payload
        if(quantity==1){
          state.cart=state.cart.filter((item)=>item.id!=id)
        }else{
          state.cart = state.cart.map((item)=>{
            if(item.id==id){
              return{
                ...item,
                quantity:item.quantity - 1
              }
            }else{
              return item
            }
         })
      }
    })
  },
})

export default userSlice.reducer
export const { addToCart,removeFromCart,increaseQuantity,decreaseQuantity } = userSlice.actions

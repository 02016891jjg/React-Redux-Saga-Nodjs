import {
    ADD_ITEM,
    REMOVE_ITEM,
    RESET_ITEM
  } from "common/constants";
  const initialState = {
    recentadditems: [],
    iditems:[]
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_ITEM: {
        let id=action.payload.payload.productId;
        state.iditems.push(id);
         console.log("$$$$$")
         console.log(state.iditems)
         const check = state.iditems.map(icd => {
            if (icd === id) {
              return true;
            }
            return false;
          });
          if(check){
            return {
                ...state,
                recentadditems: [...state.recentadditems, action.payload.payload]
              } 
          }
      
    }
      default: {
        return state;
      }
    }

  }
/**
 * Created by jull on 17.05.2017.
 */
const demoReducer = (state=false, action) => {
   switch( action.type) {
      case 'SHOW_LIST': {
         return   state = true
         break;
      }
      default: {
         return state
      }
   }
}

module.exports = demoReducer
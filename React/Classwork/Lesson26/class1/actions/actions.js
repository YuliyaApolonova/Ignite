/**
 * Created by jull on 16.05.2017.
 */
export const changeText = (text) => {
   return {
      type: 'CHANGE_TEXT',
      payload: text
   }
}
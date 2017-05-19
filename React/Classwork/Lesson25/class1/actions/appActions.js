/**
 * Created by jull on 16.05.2017.
 */
import dispatcher from '../dispatcher'


export function changeStyle() {
   dispatcher.dispatch({ type: 'STYLE'})
}
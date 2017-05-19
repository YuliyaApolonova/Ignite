/**
 * Created by jull on 17.05.2017.
 */
export const requestUsers = (state) => {
   return {
      type: 'FETCH_USERS_START',
      payload: 'loading...'
   }
}

// îáðàáîòêà îøèáêè ïðè çàãðóçêå äàííûõ
export const fetchError = (state) => {
   return {
      type: 'FETCH_USERS_ERROR',
      payload: 'error'
   }
}

//ïåðåäà÷à äàííûõ ïðè óñïåøíîé èõ çàãðóçêå
export const receiveUsers = (users) => {
   return {
      type: 'RECEIVE_USERS',
      payload: users
   }
}

export function fetchUsers() {
   return function(dispatch) {
      dispatch(requestUsers())

      // ñîçäàíèå promise
      return fetch('data.json')
            .then(response => response.json())
            .then(json =>
                  dispatch(receiveUsers(json))
            )
   }
}
import Parse from 'parse'

const getters = {
  currentUser: () => Parse.User.current()
}
export default getters

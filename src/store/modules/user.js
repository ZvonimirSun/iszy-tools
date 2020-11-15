import Parse from 'parse'

const actions = {
  login ({ commit }, { username, password }) {
    return Parse.User.logIn(username.trim(), password, { usePost: true })
  },
  logout ({ commit }) {
    return Parse.User.logOut()
  },
  signup ({ commit }, { username, password }) {
    const user = new Parse.User()
    user.set('username', username)
    user.set('password', password)
    return user.signUp(null, {})
  }
}

export default {
  namespaced: true,
  actions
}

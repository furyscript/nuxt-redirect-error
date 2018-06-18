export default async function ({ store, redirect, route }) {
  if (!store.state.auth.logged) {
    return redirect('/login')
  }
}

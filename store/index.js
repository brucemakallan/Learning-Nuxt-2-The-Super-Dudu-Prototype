export const state = () => ({
  showNotification: false
})

export const mutations = {
  toggleNotification: state => state.showNotification = !state.showNotification
}

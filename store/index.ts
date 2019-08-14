export const state = (): object => ({
  showNotification: false
})

export const mutations = {
  toggleNotification: (state): boolean => state.showNotification = !state.showNotification
}

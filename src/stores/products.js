import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        badge: 'Software',
        title: 'Seamless Passenger',
        image: '/seamless_passenger.png',
        name: 'seamless-passenger'
      },
      {
        badge: 'Software',
        title: 'Passport Issuance',
        image: '/ds.png',
        name: 'passport-issuance'
      }
    ]
  })
})
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        badge: 'Software',
        title: 'Seamless Passenger',
        image: '/seamless_passenger.webp',
        name: 'seamless-passenger'
      },
      {
        badge: 'Software',
        title: 'Passport Issuance',
        image: '/ds.webp',
        name: 'passport-issuance'
      },
      {
        badge: 'Software',
        title: 'Management Deteni',
        image: '/management_deteni.webp',
        name: 'management-deteni'
      },
      {
        badge: 'Software',
        title: 'PKI Solution',
        image: '/pki_solution.webp',
        name: 'pki-solution'
      },
      {
        badge: 'Software',
        title: 'E-Kiosk',
        image: '/kiosk.webp',
        name: 'e-kiosk'
      },
      {
        badge: 'Hardware',
        title: 'Airport Autogate',
        image: '/airport_gate.webp',
        name: 'airport-autogate'
      },
      {
        badge: 'Hardware',
        title: 'Enrollment Devices',
        image: '/enrollment_device.webp',
        name: 'enrollment-devices'
      },
      {
        badge: 'Hardware',
        title: 'Micro HSM',
        image: '/default.webp',
        name: 'micro-hsm'
      },
      {
        badge: 'Software',
        title: 'Passkey',
        image: '/default.webp',
        name: 'passkey'
      }
    ]
  })
})
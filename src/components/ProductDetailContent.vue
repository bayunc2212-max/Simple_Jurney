<template>
  <div>
    <section data-v-11d9394e="" class="hero">
      <div data-v-11d9394e="" class="top-gradient"></div>
      <div data-v-11d9394e="" class="overlay"></div>
      <div data-v-11d9394e="" style="position: absolute; z-index: 999; left: 7%; top: 15%;">
        <div data-v-13818925="" data-v-11d9394e="" class="bread-cumb"><a data-v-13818925="" href="/"
            style="color: inherit; text-underline-offset: 3px;">
            <p data-v-13818925="" class="primary">Home</p>
          </a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925=""
            href="/products" style="color: inherit; text-underline-offset: 3px;">
            <p data-v-13818925="" class="primary">Products</p>
          </a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925=""
            :href="'/products/' + slug" style="color: rgb(30, 136, 255); text-underline-offset: 3px;">
            <p data-v-13818925="" class="secondary">{{ product.title }}</p>
          </a></div>
      </div>
      <div data-v-11d9394e="" class="hero-content">
        <div data-v-11d9394e="" class="left">
          <h1 data-v-11d9394e="">{{ product.title }}</h1><span data-v-11d9394e="" class="badge">{{ product.badge
            }}</span>
        </div>
      </div>
    </section>
    <section data-v-58d8d53e="" class="section" style="min-height: 100vh;">
      <div data-v-58d8d53e="" class="product-style">
        <div data-v-58d8d53e="" class="cards">
          <div data-v-58d8d53e="" class="card-left">
            <div data-v-58d8d53e="" class="card-link">
              <div data-v-8ac83b47="" data-v-58d8d53e="" class="main-product-scale product-card" :title="product.title">
                <div data-v-8ac83b47="" class="image-wrapper"><img data-v-8ac83b47="" :src="product.img"
                    style="border-radius: 12px;"></div>
              </div>
            </div>
            <div data-v-58d8d53e="" class="mobile-off grid-container">
              <div v-for="n in 4" :key="n" data-v-8ac83b47="" data-v-58d8d53e="" class="product-scale product-card"
                style="cursor: pointer;">
                <div data-v-8ac83b47="" class="image-wrapper"><img data-v-8ac83b47="" :src="product.img"
                    style="border-radius: 12px;"></div>
              </div>
            </div>
            <div data-v-58d8d53e="" class="mobile-on">
              <div data-v-a5402a03="" data-v-58d8d53e="" class="pager"><button data-v-a5402a03="" class="pager-btn"><svg
                    data-v-a5402a03="" viewBox="0 0 24 24">
                    <path data-v-a5402a03="" d="M15 18l-6-6 6-6"></path>
                  </svg></button><button data-v-a5402a03="" class="pager-btn"><svg data-v-a5402a03=""
                    viewBox="0 0 24 24">
                    <path data-v-a5402a03="" d="M9 6l6 6-6 6"></path>
                  </svg></button></div>
              <div data-v-58d8d53e="" style="color: gray; border-radius: 10px;">1 / 4</div>
            </div>
            <div data-v-864d961a="" data-v-58d8d53e="" class="container">
              <div v-for="(sec, i) in product.sections" :key="i" data-v-864d961a="" class="section">
                <div data-v-864d961a="" class="section-header" @click="toggle(sec)">
                  <h3 data-v-864d961a="">{{ sec.title }}</h3><span data-v-864d961a="" class="icon">{{ isOpen(sec) ? '−'
                    : '+' }}</span>
                </div>
                <div data-v-864d961a="" class="section-body" v-show="isOpen(sec)">
                  <div data-v-864d961a="" v-if="sec.type === 'text'">
                    <p data-v-864d961a="">{{ sec.text }}</p>
                  </div>
                  <div data-v-864d961a="" v-else-if="sec.type === 'spec'" class="show">
                    <div v-for="(row, r) in sec.items" :key="r" data-v-864d961a="" class="spec-row"><span
                        data-v-864d961a="" class="label">{{ row.label }}</span><span data-v-864d961a="" class="value">{{
                        row.value }}</span></div>
                  </div>
                  <ul data-v-864d961a="" v-else-if="sec.type === 'list'">
                    <li v-for="(u, k) in sec.items" :key="k" data-v-864d961a="">{{ u }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-v-58d8d53e="" class="card-right">
            <div data-v-a68b62cd="" data-v-58d8d53e="">
              <section data-v-a68b62cd="" class="hero" style="background-image: url(&quot;&quot;);">
                <div data-v-a68b62cd="" class="overlay"></div>
                <div data-v-a68b62cd="" class="content">
                  <div data-v-a68b62cd="" class="text">
                    <h1 data-v-a68b62cd="">Ready to Discuss This Solution?</h1>
                    <p data-v-a68b62cd="">Discuss your business technology needs with the SimpleJourney team.</p>
                    <router-link data-v-86d9ff63="" data-v-a68b62cd="" to="/contact" class="link-wrapper"><button
                        data-v-86d9ff63="" class="contact-btn"><span data-v-86d9ff63="" class="content">Let's Get
                          Started<img data-v-86d9ff63="" class="icon" src="/arrow.png"></span></button></router-link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OtherProducts />
  </div>
</template>

<script>
import OtherProducts from './OtherProducts.vue'

export default {
  name: 'ProductDetailContent',
  components: {
    OtherProducts
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: {},
      products: {
        'seamless-passenger': {
          title: 'Seamless Passenger',
          badge: 'Software',
          img: '/seamless_passenger.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'Seamless Passenger is an end-to-end software solution designed to optimize passenger flow using biometric verification and real-time data integration. The system improves operational efficiency while enhancing security and passenger experience.'
            },
            {
              title: 'Specification',
              type: 'spec',
              items: [
                { label: 'Right-hand Gate', value: '1720 (L) x 210 (W) x 1100 (H) mm' },
                { label: 'Left-hand Gate', value: '1720 (L) x 210 (W) x 1100 (H) mm' },
                { label: 'Intermediate Gate', value: '1888 (L) x 310 (W) x 1100 (H) mm' },
                { label: 'Walkway Width (Minimum)', value: '660mm' },
                { label: 'Material', value: 'Mild Steel / Tempered Glass' },
                { label: 'Finishing', value: 'Powder Coated / Clear' }
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Airports & immigration checkpoints',
                'Border control facilities',
                'Smart transportation terminals'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'This product ensures smooth passenger movement, higher security, and improved operational efficiency.'
            }
          ]
        },

        'passport-issuance': {
          title: 'Passport Issuance',
          badge: 'Software',
          img: '/ds.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The Passport Issuance Management System is a centralized platform that supports end-to-end passport application and issuance processes. It manages applicant data, biometric capture, verification workflows, and approval stages in a controlled environment. Designed for government-scale operations, it supports large user volumes and multi-location deployments, strengthening identity governance and document security.'
            },
            {
              title: 'Key Capabilities',
              type: 'list',
              items: [
                'End-to-end passport issuance workflow',
                'Biometric and identity data integration',
                'Audit trail and compliance monitoring',
                'Secure data management'
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Immigration offices',
                'Government identity authorities'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'The system ensures data integrity, regulatory compliance, and full auditability throughout the passport issuance lifecycle.'
            }
          ]
        },

        'management-deteni': {
          title: 'Management Deteni',
          badge: 'Software',
          img: '/management_deteni.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The Detention Management System is a digital platform designed to securely manage detention records and monitoring activities. It centralizes identity data, status tracking, and administrative workflows within a single system. The platform enhances transparency, accountability, and operational consistency across facilities. It supports real-time updates and controlled access based on authority levels, making it suitable for correctional, immigration, and detention management environments.'
            },
            {
              title: 'Key Capabilities',
              type: 'list',
              items: [
                'Centralized detainee records',
                'Status and movement tracking',
                'Role-based access control',
                'Audit and reporting features'
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Detention centers',
                'Correctional facilities',
                'Law enforcement agencies'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'Improves control, transparency, and accountability in detention management.'
            }
          ]
        },

        'pki-solution': {
          title: 'PKI Solution',
          badge: 'Software',
          img: '/pki_solution.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The PKI Solution provides a robust digital trust infrastructure for secure authentication, encryption, and digital signing. It enables organizations to protect sensitive data and ensure identity assurance across digital services. Designed for enterprise and government environments, the solution supports high-availability deployment and compliance with international security standards.'
            },
            {
              title: 'Key Capabilities',
              type: 'list',
              items: [
                'Digital certificate management',
                'Secure authentication and encryption',
                'Compliance with security standards',
                'Scalable architecture'
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Government digital services',
                'Enterprise security infrastructure'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'Provides a trusted foundation for secure digital transformation initiatives.'
            }
          ]
        },

        'e-kiosk': {
          title: 'E-Kiosk',
          badge: 'Software',
          img: '/kiosk.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The E-Kiosk System is an interactive software solution designed to support self-service operations across public and business environments. It enables users to access information, perform transactions, and complete service processes efficiently through a structured digital interface. Built with flexibility and system integration in mind, the E-Kiosk System can seamlessly connect with backend services such as databases, payment systems, and operational platforms.'
            },
            {
              title: 'Key Capabilities',
              type: 'list',
              items: [
                'Centralized service orchestration',
                'Integration with internal and external systems',
                'Multi-language support'
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Self check-in and self-registration',
                'Service and administrative payments',
                'Digital information and wayfinding',
                'Public service delivery and onboarding',
                'Corporate internal service automation'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'Enhances service accessibility while reducing operational workload.'
            }
          ]
        },

        'airport-autogate': {
          title: 'Airport Autogate',
          badge: 'Hardware',
          img: '/airport_gate.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The Automated Border Control Gate is a hardware solution designed to accelerate and secure clearance processes at airports. It enables self-service passenger verification through the integration of biometric technologies, electronic travel documents, and backend systems. By adopting a standardized self-service approach'
            },
            {
              title: 'Specification',
              type: 'spec',
              items: [
                { label: 'Right-hand Gate', value: '1720 (L) x 210 (W) x 1100 (H) mm' },
                { label: 'Left-hand Gate', value: '1720 (L) x 210 (W) x 1100 (H) mm' },
                { label: 'Intermediate Gate', value: '1888 (L) x 310 (W) x 1100 (H) mm' },
                { label: 'Walkway Width (Minimum)', value: '660mm' },
                { label: 'Material', value: 'Mild Steel / Tempered Glass' },
                { label: 'Finishing', value: 'Powder Coated / Clear' }
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'International and domestic airport checkpoints',
                'Automated arrival and departure gates',
                'High-volume passenger processing zones',
                'Smart airport infrastructure initiatives'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'Accelerates passenger flow while maintaining strict security standards.'
            }
          ]
        },

        'enrollment-devices': {
          title: 'Enrollment Devices',
          badge: 'Hardware',
          img: '/enrollment_device.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'Biometric Enrollment Devices are hardware solutions designed for accurate and standardized identity data capture. These devices support the collection of biometric data such as facial images, fingerprints, and identity documents with high precision. Built for large-scale enrollment scenarios and regulated environments, the devices ensure consistent identity data quality. This reliability forms a critical foundation for security systems, digital identity platforms, and verification-based services.'
            },
            {
              title: 'Specification',
              type: 'spec',
              items: [
                { label: 'Dimension', value: '224.5 (W) x 650 (D) x 1545 (H) mm' },
                { label: 'Material', value: 'Mild Steel' },
                { label: 'Finishing', value: 'Powder Coated' }
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'National ID and civil registration programs',
                'Employee or visitor enrollment systems',
                'Border control and enrollment',
                'Access control and identity verification projects'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'Biometric Enrollment Devices ensure accurate, secure, and standardized enrollment processes, reducing errors and the risk of data misuse.'
            }
          ]
        },

        'micro-hsm': {
          title: 'Micro HSM',
          badge: 'Hardware',
          img: '/default.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The Micro Hardware Security Module (Micro HSM) is a cryptographic security device designed to protect digital keys and encryption processes in an isolated environment. It provides a high level of security for systems sensitive data and critical transactions. With its compact form factor and optimized performance, It helps organizations meet security standards, regulatory compliance, and long-term data protection requirements.'
            },
            {
              title: 'Key Capabilities',
              type: 'list',
              items: [
                'Secure cryptographic key storage and management',
                'Hardware-based encryption and decryption',
                'Compliance with security and cryptographic standards',
                'Integration with enterprise systems'
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Secure transaction processing systems',
                'Digital identity and PKI infrastructure',
                'Enterprise security architectures'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'As digital security threats continue to evolve, the Micro HSM delivers hardware-based cryptographic protection that keeps data and transactions secure, even in high-risk environments.'
            }
          ]
        },

        'passkey': {
          title: 'Passkey',
          badge: 'Software',
          img: '/default.webp',
          sections: [
            {
              title: 'Overview',
              type: 'text',
              text: 'The Passkey Authentication Platform enables passwordless authentication using cryptographic credentials. It enhances security while simplifying user access across digital services. The platform reduces identity-related risks and supports modern authentication standards suitable for enterprise environments.'
            },
            {
              title: 'Key Capabilities',
              type: 'list',
              items: [
                'Passwordless authentication',
                'Strong cryptographic security',
                'Integration with existing systems',
                'Compliance with modern standards'
              ]
            },
            {
              title: 'Use Case',
              type: 'list',
              items: [
                'Enterprise applications',
                'Secure portals',
                'Identity-based systems',
                'Government digital access'
              ]
            },
            {
              title: 'Why This Product Matters',
              type: 'text',
              text: 'It delivers stronger security with a seamless user experience.'
            }
          ]
        }
      }
    }
  },
  computed: {
    product() {
      return this.products[this.slug] || this.products['seamless-passenger']
    }
  },
  methods: {
    isOpen(sec) {
      return this.open[sec.title] !== false
    },
    toggle(sec) {
      this.open[sec.title] = this.isOpen(sec) ? false : true
    }
  }
}
</script>
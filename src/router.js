import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [

    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: {
            rule: 'admin'
          }
        },
        {
          path: '/page2',
          name: 'page-2',
          component: () => import('./views/Page2.vue'),
          meta: {
            rule: 'admin'
          }
        }, {
          path: '/ReservationSalle',
          name: 'reservation-salle',
          component: () => import('./views/pages/Administration/ReservationSalle.vue'),
          meta: {
            rule: 'admin'
          }
        }, {
          path: '/ListeReservationSalle',
          name: 'list-reserve-salle',
          component: () => import('./views/pages/Administration/ListeReservationSalle.vue'),
          meta: {
            rule: 'admin'
          }
        }, {
          path: '/CreateEvent',
          name: 'create-event',
          component: () => import('./views/pages/Administration/CreateEvent.vue'),
          meta: {
            rule: 'admin'
          }
        }, {
          path: '/ListeEvent',
          name: 'liste-event',
          component: () => import('./views/pages/Administration/ListeEvent.vue'),
          meta: {
            rule: 'admin'
          }
        }, {

          path: '/validReservation',
          name: 'valide-reserve',
          component: () => import('./views/pages/Administration/ValidationReservation.vue'),
          meta: {
            rule: 'admin'
          }
        }, {
          path: '/PlaningdesSalles',
          name: 'planing-salle',
          component: () => import('./views/pages/Commun/PlaningSalle.vue'),
          meta: {
            rule: 'admin'
          }
        }, {
          path: '/listEvents',
          name: 'data-list-list-view',
          component: () => import('@/views/pages/listEvent.vue'),
          meta: {
            breadcrumb: [{
                title: 'Home',
                url: '/'
              },
              {
                title: 'Data List'
              },
              {
                title: 'List View',
                active: true
              },
            ],
            pageTitle: 'List View',
            rule: 'editor'
          },
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue'),
          meta: {
            rule: 'public'
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'public'
          }
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

export default router

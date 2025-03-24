import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const lazyLoad = (path) => {
  return () =>
    import(`../views/${path}.vue`).catch((error) => {
      console.error(`Failed to load route component: ${path}`, error)
      return import('../views/NotFoundView.vue')
    })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad('AboutView'),
      meta: {
        title: 'About',
        requiresAuth: false,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        hideNavbar: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, from, next) => {
  // Example: Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ name: 'login' }) // Redirect to login if not authenticated
    return
  }

  // Set document title from route meta
  document.title = to.meta.title || 'Default App Title'

  // Continue with the navigation
  next()
})

// Global error handler for navigation
router.onError((error) => {
  console.error('Router error:', error)
  // You could redirect to error page here if needed
})

// Helper function (would be imported from your auth service)
function isAuthenticated() {
  // Your authentication logic here
  return false
}

export default router

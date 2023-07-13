import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
      meta: { title: 'ホーム' }
    },
    {
      path: '/coupon-menu',
      name: 'CouponMenu',
      component: () => import(/* webpackChunkName: "couponMenu" */ '../views/CouponMenuView.vue'),
      meta: { title: 'クーポン・メニュー' }
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: () => import(/* webpackChunkName: "reservation" */ '../views/ReservationView.vue'),
      meta: { title: '依頼条件設定' }
    },
    {
      path: '/payment-method',
      name: 'PaymentMethod',
      component: () => import(/* webpackChunkName: "paymentMethod" */ '../views/PaymentMethodView.vue'),
      meta: { title: 'お支払い' }
    },
    {
      path: '/payment-method-confirm',
      name: 'PaymentMethodConfirm',
      component: () => import(/* webpackChunkName: "paymentMethodCpnfirm" */ '../views/PaymentMethodConfirmView.vue'),
      meta: { title: 'お支払い確認' }
    },
    {
      path: '/reservation-information',
      name: 'ReservationInformation',
      component: () => import(/* webpackChunkName: "reservationInformation" */ '../views/ReservationInformationView.vue'),
      meta: { title: '予約チケット' }
    },
    {
      path: '/terms-of-service',
      name: 'termsOfService',
      component: () => import(/* webpackChunkName: "termsOfService" */ '../views/TermsOfServiceView.vue'),
      meta: { title: '利用規約' }
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import(/* webpackChunkName: "PrivacyPolicy" */ '../views/PrivacyPolicyView.vue'),
      meta: { title: 'プライバシーポリシー' }
    },
    {
      path: '/user-guide',
      name: 'UserGuide',
      component: () => import(/* webpackChunkName: "UserGuide" */ '../views/UserGuideView.vue'),
      meta: { title: 'ご利用ガイド' }
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
      meta: { title: 'ページが見つかりません' }
    },
  ]
})

const DEFAULT_TITLE = 'Wellness Booker'

router.afterEach((to) => {
  if(to.meta.title == false)
    to.meta.title = DEFAULT_TITLE
})

export default router

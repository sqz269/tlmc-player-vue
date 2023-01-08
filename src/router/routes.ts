import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: ':page?', alias: ['home/:page?'], name: 'homePaginate', component: () => import('pages/HomePagePaginate.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'home/inf', name: 'home', component: () => import('pages/HomePageInfScroll.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'album/:albumId', name: 'album', component: () => import('pages/AlbumPage.vue') }]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'album/:albumId/metadata', name: 'albumMetadata', component: () => import('pages/AlbumData.vue')}]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: 'track/:trackId', name: 'track', component: () => import('pages/TrackPage.vue') }]
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: 'search/:searchQuery', component: () => import('pages/SearchPage.vue') }]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

import Vue from 'vue'
import VueRouter from "vue-router";
import AskView from "@/views/AskView";
import JobsView from "@/views/JobsView";
import NewsView from "@/views/NewsView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";
import CreateListView from "@/views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'news'
    },
    {
      path: '/news',
      name: 'news',
      // component: NewsView,
      component: CreateListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: CreateListView('AskView')

    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: CreateListView('JobsView')
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item',
      component: ItemView,
    },
  ]
});

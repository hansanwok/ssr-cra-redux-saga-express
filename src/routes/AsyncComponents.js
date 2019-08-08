import React from 'react';
import Loadable from 'react-loadable';

export const AsyncPageDefault = Loadable({
  loader: () => import(/* webpackChunkName: "PageDefault" */ '../pages/PageDefault'),
  loading: () => <div>loading...</div>,
  modules: ['PageDefault'],
});


export const AsyncPageOther = Loadable({
  loader: () => import(/* webpackChunkName: "PageOther" */ '../pages/PageOther'),
  loading: () => <div>loading...</div>,
  modules: ['PageOther'],
});


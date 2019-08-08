import React from 'react';
import Loadable from 'react-loadable';

export const AsyncPageDefault = Loadable({
  loader: () => import(/* webpackChunkName: "PageDefault" */ '../containers/PageDefault'),
  loading: () => <div>loading...</div>,
  modules: ['PageDefault'],
});


export const AsyncPageOther = Loadable({
  loader: () => import(/* webpackChunkName: "PageOther" */ '../containers/PageOther'),
  loading: () => <div>loading...</div>,
  modules: ['PageOther'],
});


import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from '../Loadable';

const Landing = Loadable(lazy(() => import('../pages/Landing')));
const Sports = Loadable(lazy(() => import('../pages/Sports')));
const Crypto = Loadable(lazy(() => import('../pages/Crypto')));
const World = Loadable(lazy(() => import('../pages/World')));
const Gossip = Loadable(lazy(() => import('../pages/Gossip')));

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Landing />
        },
        {
            path: '/sports',
            element: <Sports />
        },
        {
            path: '/crypto',
            element: <Crypto />
        },
        {
            path: '/world',
            element: <World />
        },
        {
            path: '/gossip',
            element: <Gossip />
        }
    ])
};
import Detail from './PlayerDetails';
import App from './App';
import detailpersonel from './detailpersonel'

const routes = [
{
   path: '/',
   exact: true,
   component: App,
   isHome: true,
},
{
    path: '/detail',
    exact: true,
    component: Detail,
},
{
    path: '/detailpersonel',
    exact: true,
    component: detailpersonel,
},
];

export default routes;
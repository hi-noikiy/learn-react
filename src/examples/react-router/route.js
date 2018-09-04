import {
  demo01,
  demo02
} from './'

export const route = {
  path: 'react-router',
  name: 'react router',
  childRoutes: [
    {
      path: 'demo01', name: 'demo01', component: demo01
    }, {
      path: 'demo02', name: 'demo02', component: demo02
    }
  ]
}

export default route

import {
  App,
  Clock,
  Composition,
  Context,
  ShoppingList,
  ThinkingInReact
} from './'

export const route = {
  path: 'react',
  name: 'react examples',
  childRoutes: [
    {
      path: 'app', name: 'React app page', component: App
    }, {
      path: 'clock', name: 'Clock', component: Clock
    }, {
      path: 'composition', name: 'composition', component: Composition,
    },
    {
      path: 'context', name: 'Context', component: Context,
    },
    {
      path:'shoppingList' , name: 'ShoppingList' , component: ShoppingList
    }, {
      path:'ThinkingInReact' , name: 'ThinkingInReact' , component: ThinkingInReact 
    }
  ]
}

export default route

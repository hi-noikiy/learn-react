# React-Router

## Quick Start Guide

video courses:

- [https://time.geekbang.org/course/detail/100-11272](https://time.geekbang.org/course/detail/100-11272)

- [https://time.geekbang.org/course/detail/100-11273](https://time.geekbang.org/course/detail/100-11273)

Quick view of **react-router** core concepts:
[Basic concepts for quick start of **react-router**](./includes/01.QuickStart.md)

## packages in **react-router**

**react-router v4** uses monorepo architecture, it contains four packages:

- react-router, which is the core of React Router
- react-router-dom, which is the DOM binding for React-Router
- react-router-native, which is the React-Native binding for React-Router
- react-router-config, which are Static route config helpers

Both **react-router-dom** and **react-router-native** use **react-router** as a dependency.

In most case, we use **react-router-dom** as we use react-router in a browser enviroment.

## components in **react-router**

### 1. [BrowserRouter](./includes/02.ComponentsInReactRouter.md#1-browserrouter)

It keeps the consistency between  UI and URL of your app.

By default, a **BrowserRouter** component has the following properties:

- basename: string. which will add
- getUserConfirmation
- forceRefresh: bool
- keyLength: number
- children

### 2. [Route](./includes/02.ComponentsInReactRouter.md#2-route)

**The Route component is the container to render content when a URL matches.**

The Route componenthas three render methods, they are

```javascript
import { Route } from 'react-router-dom'
<Route component>
<Route render>
<Route children>
```

In most cases, you use *component* to render the component matched to a path.

The props of a component which is rendered  by **Route** has three following three properties by default, they are

- match
- location
- history

A **Route** component has the following properties by default:

- path: string

Any path that could be resolve by [path-to-regexp](https://github.com/pillarjs/path-to-regexp).

A **Route** without setting a **path** or been wrapped by a **Switch** component, it will always be matched.

- strict
- exact

### 3. Link

[https://reacttraining.com/react-router/web/api/Link](https://reacttraining.com/react-router/web/api/Link)

### 4. NavLink

[https://reacttraining.com/react-router/web/api/NavLink]([https://reacttraining.com/react-router/web/api/NavLink])

### 5. Switch

[https://reacttraining.com/react-router/web/api/Switch](https://reacttraining.com/react-router/web/api/Switch)

### 6. Redirect

[https://reacttraining.com/react-router/web/api/Redirect](https://reacttraining.com/react-router/web/api/Redirect)
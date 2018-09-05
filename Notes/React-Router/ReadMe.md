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

### 1. BrowserRouter

It keeps the consistency between  UI and URL of your app.

properties of BrowserRouter component:

- basename: string. which will add

```javascript
import { BrowserRouter } from 'react-router-dom'
<BrowserRouter basename="app" />
```

After setting *basename* for a **BrowserRouter** component, the href of a **Link** component under **BrowserRouter** start with */app*.

Please check [examples/react-router/demo03](../../src/examples/react-router/demo03/index.js) to see the render result of *basename** effect.

- getUserConfirmation

When user visits current page, *getUserConfirmation* will excute, a demo about this property is [examples/react-router/demo03](../../src/examples/react-router/demo04/index.js)

- forceRefresh: bool
- keyLength: number
- children

### 2. Route

Route has three render methods, they are

```javascript
import { Route } from 'react-router-dom'
<Route component>
<Route render>
<Route children>
```

In most cases, you use *component* to render the component matched to a path.

Route also has three default properties comes from **props*, they are

- match
- location
- history

All the render methods of *Route** accepts these three properties.

[examples/react-router/demo04](../../src/examples/react-router/demo04/index.js) is an example to both demostrate three render methods of **Route** component default props(match, history, location) passed to **Route**.

- path: string

Any path that could be resolve by [path-to-regexp](https://github.com/pillarjs/path-to-regexp)

A **Route** without setting a **path** or been wrapped by **Switch** component, it will always be matched.
Find an example, please click [examples/react-router/demo05](../../src/examples/react-router/demo05/index.js).

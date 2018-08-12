# React-Router

## Features for React-Router

- Decalartive defination

- danamatic router

## Three ways of impleshiment for routing in React-Router

- URL path (BrowserRouter)
- Hash routing (HashRouter)
- Memrory routing (Memrory router)

```javascript
import { HashRouter, BrowserRouter } from 'react-dom-router'
import { MemoryRouter } from 'react-router'
```

For Memrory routing, the url of browser won't change.

## Resource configuration and organization based routing

- 实现业务逻辑的松耦合
- 易于扩展, 重构和维护
- 路由层面实现 Lazy Load

## Core API for React-Router

- Link: ordinary link, won't trigger browser refresh

- NavLink: smilar to link but will add selected status for current link

```javascript
function Menu (props) {
  let { items } = props
  let MenuItems = items.map((item, index) => {
    return (
      <li key={item.text}><NavLink activeClassName="router-link-active">{item.text}</NavLink></li>
    )
  })
  return (
    <ul>
      {MenuItems}
    </ul>
  )
}
```

- Prompt: notify user leave or not when condition satisfied

```javascript
import { Prompt } from  'react-router'
<Prompt
  when={FormIsHalfFiledOut}
  message="Are you sure you want to leave?"
>
```

- Redirect: redirect current page

```javascript
import { Route, Redirect } from 'react-router'
<Route exact path="/" render={
  () => {
    LoggedIn ? (
      <Redirect tp="/dashboard">
    ) : (
      <PublicHomePage/>
    )
  }
}>
```

- Route: container for render matched component of router

```javascript
<Router>
  <div className="react-router-demo">
    <ul id="menu">
      <li><NavLink exact to="/" className="router-link" activeClassName="router-link-active">Home</NavLink></li>
      <li><NavLink to="/hello" className="router-link" activeClassName="router-link-active">Hello</NavLink></li>
      <li><NavLink to="/about" className="router-link" activeClassName="router-link-active">About</NavLink></li>
    </ul>
    <div id="page-container">
      <Route exact path="/" component={Home}></Route>
      <Route path="/hello" component={Hello}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  </div>
</Router>
```

- Switch:  display the first router that matched.

```javascript
<Router>
  <div className="react-router-demo">
    <ul id="menu">
      <li><NavLink exact to="/" className="router-link" activeClassName="router-link-active">Home</NavLink></li>
      <li><NavLink to="/hello" className="router-link" activeClassName="router-link-active">Hello</NavLink></li>
      <li><NavLink to="/about" className="router-link" activeClassName="router-link-active">About</NavLink></li>
    </ul>
    <div id="page-container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hello" component={Hello}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </div>
  </div>
</Router>
```

## How to pass params

The React-Router path grammar comes comes from https://github.com/pillarjs/path-to-regexp

```javascript
// How to get params
function Topic ({ match }) {
  return (
    <div className="topic">
      <h1 className="title">Topic {match.params.id}</h1>
    </div>
  )
}

// How to pass params
function TopicList (props) {
  let { topics } = props
  let TopicListItems = topic.map((item, index) => {
    let link = `topic/:{topic.id}`
    return (
      <li>
        <Link className="topic-link" to={link}>{topic.link}</Link>
      </li>
    )
  })
  return (
    <div className="available-topic">
      <ul>
        {TopicListItems}
      </ul>
    </div>  
  )
}
```

## When to use url params

## Nested Route
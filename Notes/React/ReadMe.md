# React

## 1. Main Concept

### 1.1 resources

1. Notes: [MainConcepts.md](./includes/markdown/01.MainConcepts.md)
2. official docs: [https://reactjs.org/docs/hello-world.html](https://reactjs.org/docs/hello-world.html)

### 1.2 Main Concepts

- 1.[JSX](./includes/markdown/01.MainConcepts.md#JSX)
- 2.[render component](./includes/markdown/01.MainConcepts.md#rendering-an-element-into-the-dom)
- 3.[props](./includes/markdown/01.MainConcepts.md#components-and-props)
- 4.[state and lifecycle for component](./includes/markdown/01.MainConcepts.md#state-and-lifecycle)
- 5.[handling Events](./includes/markdown/01.MainConcepts.md#handling-events)
- 6.[List and keys](./includes/markdown/01.MainConcepts.md#lists-and-keys)
- 7.[Forms](./includes/markdown/01.MainConcepts.md#forms)
- 8.[Composition vs. Inheritance, Component](https://reactjs.org/docs/composition-vs-inheritance.html)

## 2. Advanced  Guide

### 2.1. React programming pattern

- Using composition instead of Inheritance
- Using Hoc(solve prop passing across many layers among components)

Hoc is not a React only programming design pattern.

- Pass props.children as a function
- Using context to solve communications among components

## 3.Performance optimization in React

- [How to avoid performance problems](./includes/markdown/04.PerformanceOptimizationInReact.md#how-to-avoid-performance-problems)
- [Optimization from network](./includes/markdown/04.PerformanceOptimizationInReact.md#network-performance-optimization)
- [Optimize performance by reselect](./includes/markdown/04.PerformanceOptimizationInReact.md#optimization-performance-by-reselect)
- [More articles and videos to watch, read and learn](./includes/markdown/04.PerformanceOptimizationInReact.md#more-tutorials-about-optimization-of-react-applications)

## 4. Tips for using Reactjs

### 4.1 Use functional component

### 4.2 Keep your component small

Keeping component being small has the following advantages:

- easier to read
- easier to test
- easier to Maintain
- easier to reuse

### 4.3 Understand how to handle this

- The first option is binding **this** in **render** function

```javascript
import React from 'react'
class HelloWorld extends {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    }
  }

  logMessage() {
    console.log(this.state.message)
  }
  
  render () {
    return <input type="button" value="log" onClick={this.logMessage.bind(this)}>
  }
}
```

Binding **this** in render function is easy to read and understand, but it can cause a side effect because whenever **render** function is called, there is a  function(this.logMessage.bind(this) to execute.

- The second choice is binding **this** in **render** function in an **array function** way.

```javascript
import React from 'react'
class HelloWorld extends {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    }
  }

  logMessage() {
    console.log(this.state.message)
  }
  
  render () {
    return <input type="button" value="log" onClick={() => this.logMessage()}>
  }
}
```

It can also meet performance issue too.

- The third solution is binding this in constructor.

```javascript

import React from 'react'
class HelloWorld extends {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    }
    this.logMessage = this.logMessage.bind(this)
  }

  logMessage() {
    console.log(this.state.message)
  }
  
  render () {
    return <input type="button" value="log" onClick={this.logMessage}>
  }
}
```

Binding this in constructor function can avoid performance issue, compared with above two solutions.

### 4.4 Use a function *setState** instead of an Object

### 5. Utilize **prop-types**

### 6. Using react-dev-tools for developing

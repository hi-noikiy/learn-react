import React from 'react'

export function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  )
}

export function SubComponent() {
  return (
    <p className="sub">Sub</p>
  )
}
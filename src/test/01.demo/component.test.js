import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import Todo from './component'

describe('Todo wrapper is div', () => {
  // it is a test case
  it('App\'s title should be Todo', () => {
    const app = shallowRender(Todo)
    expect(app.props.children[0].type).toBe('h1')
  })
})


function shallowRender(Component) {
  const renderer =  ShallowRenderer.createRenderer()
  return renderer.render(<Component />)
}

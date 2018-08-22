import React from 'react'
import TestRenderer from 'react-test-renderer'

import { MyComponent, SubComponent } from './component'

const testRenderer = TestRenderer.create(<MyComponent />)
const testInstance = testRenderer.root

describe('to be bar', () => {
  it ('prop foo is bar', () => {
    expect(testInstance.findByType(SubComponent).props.foo).toBe('bar')
  })

  it('className is sub', () => {
    expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub'])
  })
})

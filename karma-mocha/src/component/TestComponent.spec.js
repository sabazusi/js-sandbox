import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { expect } from 'chai'

import TestComponent from './ListView'

describe('TestComponent', () => {
  it('propsが正しく設定できる', () => {
    let component = ReactTestUtils.renderIntoDocument(<TestComponent imageUrl="http://example.com/" text="sample" />)

    expect("http://example.com/").to.equal(component.props.imageUrl)
    expect("sample").to.equal(component.props.text)
  })
})


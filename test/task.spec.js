import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

describe('Task tests', () => {
  it('should be defined', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting="Hello World"/>);
    const output = renderer.getRenderOutput();
    const expectedValue = (
      <div>
        <h1>Greeting</h1>
        <div>Hello World</div>
      </div>
    );
    expect(output).toEqual(expectedValue);
  });
});
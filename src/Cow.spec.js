import React from 'react';
import {Cow} from './Cow';
import {shallow} from "component-test-utils-react";

describe('Cow', () => {
  const cow = {
    name: 'Margueritte',
    location: 'Field A',
    description: 'She smile to me, it\'s weird.',
    image: 'http://toto.toto.com'
  }
  it('should display cow name', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.name);
  });

  it('should display where the cow is', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.location);
  });

  it('should display the cow\'s description', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.description);
  });

  it('should display the cow\'s image', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.image);
  });
})

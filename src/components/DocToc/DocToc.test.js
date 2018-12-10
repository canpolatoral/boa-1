import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import DocToc from './DocToc';
import Context from '../../../test/utils/context';

describe('<DocToc /> tests', () => {
  it('should render table of content', () => {
    const content = [
      {
        id: 1,
        level: 1,
        content: 'first item',
        children: [
          {
            id: 2,
            level: 2,
            content: 'first child',
          },
        ],
      },
      {
        id: 3,
        level: 1,
        content: 'second item',
        children: [
          {
            id: 4,
            level: 2,
            content: 'second child',
          },
        ],
      },
    ];
    const wrapper = shallow((
      <DocToc context={Context} header="header" content={content} />
    ));
    const ul = wrapper.childAt(0);
    expect(ul.type()).equals('ul');
    const header = ul.childAt(0);
    expect(header.text()).contains('header');
    const firstItem = ul.childAt(1);
    expect(firstItem.type()).equals('li');
    expect(firstItem.text()).contains('first item');
    const firstChild = firstItem.childAt(1).childAt(0);
    expect(firstChild.type()).equals('li');
    expect(firstChild.text()).contains('first child');
  });

  it('should mount', () => {
    const content = [
      {
        id: 1,
        level: 1,
        content: 'first item',
        children: [
          {
            id: 2,
            level: 2,
            content: 'first child',
          },
        ],
      },
      {
        id: 3,
        level: 1,
        content: 'second item',
        children: [
          {
            id: 4,
            level: 2,
            content: 'second child',
          },
        ],
      },
    ];
    const linkOnClick = sinon.spy();
    const wrapper = mount((
      <DocToc context={Context} header="header" content={content} linkOnClick={linkOnClick} />
    ));
    wrapper.findWhere(x => x.type() === 'label' && x.text().includes('first item'))
      .simulate('click');
    expect(linkOnClick).to.have.property('callCount', 1);
    expect(linkOnClick.args[0][0], 'argument id is first child').equals(1);
  });
});
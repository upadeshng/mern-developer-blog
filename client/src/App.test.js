import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// https://www.robinwieruch.de/react-connected-component-test

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  //   it('should render with given state from Redux store', () => {
  //     expect(component.toJSON()).toMatchSnapshot();
  //   });
});

describe('App', () => {
  //   const wrapper = shallow(<Register />);
  let store = mockStore({
    myState: 'sample text',
  });

  const wrapper = shallow(
    <Provider store={store}>
      // Provides the store to your App
      <App />
    </Provider>
  );

  //   Snapshot
  it('Renders correctly with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

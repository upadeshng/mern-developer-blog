import React from 'react';
import Register from './Register';
import Action from './action';

import { BrowserRouter } from 'react-router-dom';

import { Form } from 'react-bootstrap';

import { shallow, mount, render } from 'enzyme';
import { Provider, connect } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from 'axios';
import moxios from 'moxios';

import { mapStateToProps, mapDispatchToProps } from './Register';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const setup = () => {
  //   const wrapper = shallow(<Register />);
  let initialState = {
    apollo: { apolloLink: 'test value goes here' },
    signupReducer: { validationData: null },
  };
  let store = mockStore(initialState);

  let props = {
    validationData: { errors: null },
    authActions: {
      login: jest.fn(),
      resetPassword: jest.fn(),
    },
  };

  // let resetWrapper = shallow(<Register store={store} {...props} />);

  let wrapper = mount(
    <BrowserRouter>
      <Provider store={store} {...props}>
        <Register />
      </Provider>
    </BrowserRouter>
  );

  return { store, props, wrapper };
};

describe('Register', () => {
  //   const wrapper = shallow(<Register />);
  let initialState = { apollo: { apolloLink: 'test value goes here' } };
  let store = mockStore(initialState);

  const wrapperSnapshot = shallow(
    <Provider store={store}>
      {}
      // Provides the store to your App
      <Register />
    </Provider>
  );

  //   Snapshot
  it('Renders correctly with snapshot', () => {
    expect(wrapperSnapshot).toMatchSnapshot();
  });

  const { wrapper } = setup();
  let componentInstance = wrapper.find('Register').instance();

  /* let wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <Register />
      </Provider>
    </BrowserRouter>
  ); */

  //   Form element value
  const nameValue = 'Desh';
  const emailValue = 'upadesh.ng@gmail.com';
  const passwordValue = 'Secret123';
  const password2Value = 'Secret123';

  describe('Has form elements', () => {
    // Name input
    it('renders name input', () => {
      //   console.log(wrapper.debug({ verbose: true }));

      const input = wrapper.find('input').find({ name: 'name' });
      expect(input).toHaveLength(1);
    });

    // Email input
    it('renders email input', () => {
      const input = wrapper.find('input').find({ name: 'email' });
      expect(input).toHaveLength(1);
    });

    // Password input
    it('renders password', () => {
      const input = wrapper.find('input').find({ name: 'password' });
      expect(input).toHaveLength(1);
    });

    // Password2 input
    it('renders password2', () => {
      const input = wrapper.find('input').find({ name: 'password2' });
      expect(input).toHaveLength(1);
    });
  });

  //   render login link
  it('renders login link', () => {
    // console.log(wrapper.debug());
    const loginLink = wrapper.find('.login-link').at(0);
    expect(loginLink).toHaveLength(1);
  });

  //   input change
  describe('when typing in input elements', () => {
    // Updates name
    it('updates name input', () => {
      wrapper
        .find('input')
        .find({ name: 'name' })
        .simulate('change', { target: { value: nameValue } });

      //   console.log(wrapper.debug());
      expect(componentInstance.state.name).toEqual(nameValue);
    });

    // Updates email
    it('updates email input', () => {
      wrapper
        .find('input')
        .find({ name: 'email' })
        .simulate('change', { target: { value: emailValue } });

      expect(componentInstance.state.email).toEqual(emailValue);
    });

    // Updates password
    it('updates email input', () => {
      wrapper
        .find('input')
        .find({ name: 'password' })
        .simulate('change', { target: { value: passwordValue } });

      expect(componentInstance.state.password).toEqual(passwordValue);
    });

    // Updates password2
    it('updates email input', () => {
      wrapper
        .find('input')
        .find({ name: 'password2' })
        .simulate('change', { target: { value: password2Value } });

      expect(componentInstance.state.password2).toEqual(password2Value);
    });

    // Compares password & password2
    it('compares password & password2', () => {
      wrapper
        .find('input')
        .find({ name: 'password' })
        .simulate('change', { target: { value: passwordValue } });

      wrapper
        .find('input')
        .find({ name: 'password2' })
        .simulate('change', { target: { value: password2Value } });

      const passwordUpdated = componentInstance.state.password;
      const password2Updated = componentInstance.state.password2;
      expect(passwordUpdated).toEqual(password2Updated);
    });
  });

  describe('when submitted', () => {
    const testValues = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      password2: password2Value,
      handleSubmit: jest.fn(),
    };

    /* it('has `handlesubmit()` function', () => {
      const { store, props } = setup();
      let wrapper1 = mount(
        <BrowserRouter>
          <Provider store={store} {...props}>
            <Register {...testValues} />
          </Provider>
        </BrowserRouter>
      );

      wrapper1.instance().handleSubmit_();
    }); */

    it('Submit works', () => {
      const { store, props } = setup();
      let wrapper1 = mount(
        <BrowserRouter>
          <Provider store={store} {...props}>
            <Register {...testValues} />
          </Provider>
        </BrowserRouter>
      );

      wrapper1.find('button').simulate('click');
    });
  });

  describe('selectAvatar', () => {
    beforeEach(() => {
      // Runs before each test in the suite
      const store = mockStore();
      store.clearActions();
    });

    it('should set uploading back to false on file successful upload', () => {
      const data = 'dummydata';
      moxios.stubRequest('/api/users', {
        status: 200,
        response: data,
      });
      const props = {
        onFileNameChange: jest.fn(),
      };

      // let componentInstance = wrapper.find('Register').instance();

      const { wrapper } = setup();
      let componentInstance = wrapper.find('Register').instance();

      componentInstance.props.postSignup('dummydata');
      wrapper.update();

      const expectedActions = [
        {
          payload: 1,
          type: 'select_avatar',
        },
      ];

      // store.dispatch({ type: 'DECREMENT' });
      // expect(store.getActions()).toEqual(expectedActions);

      // expect(props.onFileNameChange).toHaveBeenCalledWith(data);
      // expect(wrapper.state('uploading')).toBe(false);

      // const wrapper = shallow(<ImageUpload {...props} />);
      // wrapper.setState({ uploading: true });
      // wrapper.instance().sendFormData('dummydata');
      // wrapper.update();
      // expect(props.onFileNameChange).toHaveBeenCalledWith(data);
      // expect(wrapper.state('uploading')).toBe(false);
    });
  });

  //
});

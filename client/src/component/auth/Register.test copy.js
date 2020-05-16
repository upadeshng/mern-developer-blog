import React from 'react';
import Register from './Register';
import { BrowserRouter } from 'react-router-dom';

import { Form } from 'react-bootstrap';

import { shallow, mount, render } from 'enzyme';
import { Provider, connect } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

  let wrapper = mount(
    <BrowserRouter>
      <Provider store={store}>
        <Register />
      </Provider>
    </BrowserRouter>
  );

  let componentInstance = wrapper.find('Register').instance();

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

    it('Submit works', () => {
      let wrapper1 = mount(
        <BrowserRouter>
          <Provider store={store}>
            <Register {...testValues} />
          </Provider>
        </BrowserRouter>
      );

      //   console.log(wrapper11.debug());
      wrapper1.find('button').simulate('click');

      //   let handleSubmit = (fn) => fn();
      //   let componentInstance1 = wrapper1.find('Register').instance();

      //   console.log(componentInstance1.debug());

      //   const btn = wrapper1.find('.submit-btn');
      //   btn.simulate('click');
      //   console.log(wrapper1.debug());

      //   console.log(wrapper1.debug());

      //   ##########
      //   const handleSubmit = jest
      //     .fn()
      //     .mockImplementation((cb) => () => cb({ test: 'test' }));
      //   const submitBtn = wrapper1.find('.submit-btn');
      //   submitBtn.simulate('click');
      //   expect(handleSubmit).toBeCalledTimes(1);
      //   ##########

      // ##########
      //   const wrapper2 = mount(<Form handleSubmit={handleSubmit} />);
      //   const form = wrapper2.find('form');
      //   form.simulate('submit');
      //   expect(handleSubmit).toHaveBeenCalledTimes(1);
      // ##########

      //   const handleSubmit = jest
      //     .fn()
      //     .mockImplementation((cb) => () => cb({ test: 'test' }));

      //   expect(handleSubmit).toHaveBeenCalledTimes(1);

      //   expect(submitBtn).toHaveLength(1);

      //   expect(handleSubmit).to.have.been.called();

      //   wrapper1.find('.submit-btn').simulate('click');
      // expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
      //   expect(testValues.handleSubmit).toHaveBeenCalledTimes(1);
      //   expect(testValues.handleSubmit).toBeCalledWith({
      //     name: testValues.name,
      //     email: testValues.email,
      //     password: testValues.password,
      //     password2: testValues.password2,
      //   });
    });
  });
});

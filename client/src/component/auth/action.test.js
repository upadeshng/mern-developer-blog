import React from 'react';
import Action from './action';

import { shallow, mount, render } from 'enzyme';
import { Provider, connect } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mapStateToProps, mapDispatchToProps } from './Register';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import axios from 'axios';
import moxios from 'moxios';
import { equal } from 'assert';

/* 
test post success
1.  moc post func
2.  response success

*/
describe('Action', () => {
  let axiosInstance;

  // Before each
  beforeEach(() => {
    axiosInstance = axios.create();
    moxios.install(axiosInstance);
  });

  // After each
  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  // Axios post
  it('should postSignup success', (done) => {
    moxios.stubRequest('http://www.somesite.com/awesome-url', {
      status: 200,
      // responseText: 'hello',
      response: {
        token: 'eyJhbGciOiJIUzI',
        user: {
          _id: '5ebdsd244e1c3b06f62c',
          name: 'Sam',
          email: 'Sam@email.com',
          avatar: '//www.gravatar.com/avatar/asdf',
          password: '$2a$10$j8NXPk01I',
          date: '2020-05-07T10:39:07.428Z',
          createdAt: '2020-05-07T10:39:07.428Z',
          updatedAt: '2020-05-07T10:39:07.428Z',
        },
      },
    });
    axiosInstance
      .get('http://www.somesite.com/awesome-url')
      .then((res) => {
        expect(res.status).toEqual(200);
        expect(res.status).toEqual(200);
      })
      .finally(done);
  });

  //
  // it('should set uploading back to false on file successful upload', () => {
  //   const data = 'dummydata';
  //   moxios.stubRequest('/api/users', {
  //     status: 200,
  //     response: data,
  //   });
  //   const props = {
  //     onFileNameChange: jest.fn(),
  //   };

  //   const wrapperSnapshot = shallow(<Action />);
  //   let componentInstance = wrapper.find('Register').instance();

  //   const wrapper = shallow(<ImageUpload {...props} />);
  //   wrapper.setState({ uploading: true });
  //   wrapper.instance().sendFormData('dummydata');
  //   wrapper.update();
  //   expect(props.onFileNameChange).toHaveBeenCalledWith(data);
  //   expect(wrapper.state('uploading')).toBe(false);
  // });

  //
});

import { VALIDATION_ERROR } from './action';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual({ loading: true });
  });

  it('Should return new state if receiving type', () => {
    const data = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' },
    ];

    const newState = postsReducer(undefined, {
      type: VALIDATION_ERROR,
      payload: data,
    });
    expect(newState).toEqual({ loading: false, validationData: data });
  });
});

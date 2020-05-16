import React, { Component } from 'react';

export default class ValidationError extends Component {
  render() {
    const validationErrors = this.props.validationErrors;

    if (!validationErrors || !validationErrors.errors) {
      return <></>;
    }

    console.log('eerr', validationErrors.errors);
    return (
      <>
        {validationErrors.errors.map((item, index) => {
          return (
            <>
              <ul className='error-message'>
                <li className='error'>{item.msg}</li>
              </ul>
            </>
          );
        })}
      </>
    );
  }
}

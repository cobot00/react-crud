import React from 'react';

export const ErrorMessage = (props) => {
  const errorMessage = props.errorMessage;
  if (errorMessage) {
    return (
      <div className="error-message" style={{marginBottom: '20px'}}>
        {errorMessage}
      </div>
    );
  } else {
    return null;
  }
};

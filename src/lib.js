import React from 'react';
import ReactDOM from 'react-dom';

// import * as mui from 'material-ui';
// import * as MUI from '@material-ui/core';
// import Button from '@material-ui/core/Button';

// https://dev.to/vish448/create-react-project-without-create-react-app-3goh
// https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

function Button() {
  // return <MButton />;
  return <button > test </button>
}

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('container')
// );

export {
  // MUI,
  Button,
  HelloMessage
};

export default {
  // MUI,
  Button,
  HelloMessage
};
import React from 'react';
import ReactDOM from 'react-dom';

// https://dev.to/vish448/create-react-project-without-create-react-app-3goh
// https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663

function HelloMessage({ name }) {
  console.log('hello test')
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);
import React from 'react';
// import ReactDOM from 'react-dom';



// export default () => {
//   console.log(mui)
// }

// https://dev.to/vish448/create-react-project-without-create-react-app-3goh
// https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

export { default as Input } from './input';

export { HelloMessage };
// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('container')
// );

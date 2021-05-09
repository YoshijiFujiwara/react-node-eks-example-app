import React, { useEffect, useState } from 'react';
import { Message } from '@react-node-eks-example-app/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch(`${process.env.NX_API_URL}/api`)
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to eks-demo!!!!!!!!!</h1>
        <h2>素晴らしい！</h2>
        <h2>デプロイチェックのために文言を変更するやで</h2>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Powerful, Extensible Dev Tools"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;

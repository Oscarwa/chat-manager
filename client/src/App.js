import logo from './logo.svg';
import tmi from 'tmi.js';
import './App.css';


function App() {

  const client = tmi.client({
    connection: {
    reconnect: true,
    secure: true
    },
    identity: {
      username: 'NazBorg',
      password: "oauth:jpp29hh7etadbvznq4l0ra5xhwf48i",
    },
    channels: ['nazgulmx'],
  });

  client.connect();

  client.on('chat', (channel, user, message, self) => {
    console.log(message)
  });

  return (
    <div>
      hello
    </div>
  );
}

export default App;

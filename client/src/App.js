import axios from 'axios';
import { weather_api_key } from './config';

function App() {
  console.log(`your api key is: ${weather_api_key}`);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

import {createRoot} from 'react-dom/client';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './home/Home';
import Forms from './form/Form';

export default function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/form" element={<Forms />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
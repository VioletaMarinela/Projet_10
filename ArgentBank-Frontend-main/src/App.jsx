import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './Routeur/PublicRouteur';
import PrivateRouteur from './Routeur/PrivateRouteur';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRouter />} />
        </Routes>
        <Routes>
          <Route path='/auth/*' element={<PrivateRouteur />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

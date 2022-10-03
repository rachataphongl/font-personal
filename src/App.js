import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="2000" theme="colored" position="top-center" />
    </>
  );
}

export default App;

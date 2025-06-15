import { useSelector } from 'react-redux';
import './App.css';
import { LoginForm } from './features/authen';
import { RootState } from './stores/store';

function App() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <>
      <LoginForm />
      <p>Token: {token ?? 'None'}</p>
    </>
  );
}

export default App;

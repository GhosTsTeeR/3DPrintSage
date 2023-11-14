import { useNavigate } from 'react-router-dom';

export default function useRedireccionar() {
  const navigate = useNavigate();

  return (inputValue) => {
    navigate('/search'); 
  }
}
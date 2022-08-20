import { useContext } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logout } = useContext(AuthContext);

  return (
    <button
      onClick={authenticated ? logout : login}
      className={`${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded-md text-white w-28`}
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;

import Link from 'next/link';
import AuthButton from '../../buttons/auth-button/AuthButton';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between items-center ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <Link href="/register">
          <a className="hover:underline hidden sm:inline">Register</a>
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;

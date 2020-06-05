import Header from './header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div className="text-center mt-5">{children}</div>
  </>
);

export default Layout;

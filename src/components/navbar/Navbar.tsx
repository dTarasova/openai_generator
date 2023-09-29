import NavLinks from './NavLinks';

interface Props {
    currentPage: string;
}
const Navbar: React.FC<Props> = ({currentPage} : Props) => {
  return (
    <nav >
        <NavLinks currentPage={currentPage} />
    </nav>
  )
}

export default Navbar;

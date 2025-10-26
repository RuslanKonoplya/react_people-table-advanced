import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  function getClassName({ isActive }: { isActive: boolean }) {
    return isActive
      ? 'navbar-item  has-background-grey-lighter'
      : 'navbar-item';
  }

  return (
    <nav
      data-cy="nav"
      className="navbar  has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>

          <NavLink className={getClassName} to="/people">
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

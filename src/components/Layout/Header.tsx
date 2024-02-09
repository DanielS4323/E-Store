import { Link } from 'react-router-dom';
import { Button, Icon, Image, Menu } from 'semantic-ui-react';
import { useStoreCtx } from '../../store/useStoreCtx';
import storage from '../../utilities/storage';

const Header = () => {
  const { authUser } = useStoreCtx();

  function handleLogOut() {
    storage.clearUser();
    window.location.assign(window.location.origin);
  }

  const userProfile = (
    <>
      <Menu.Item>
        <Button onClick={handleLogOut}>Log Out</Button>
      </Menu.Item>
      <Menu.Item>
        <span>{authUser?.username}</span>
        <Image src={authUser?.image} avatar alt="User image" />
      </Menu.Item>
    </>
  );

  return (
    <Menu inverted fixed="top" size="large" stackable>
      <Menu.Item as={Link} to="/" style={{ fontSize: '1.5rem' }}>
        Home
      </Menu.Item>
      {!authUser && (
        <Menu.Item as={Link} to="/login" style={{ fontSize: '1.5rem' }}>
          Login
        </Menu.Item>
      )}
      <Menu.Menu position="right">
        {authUser && userProfile}
        <Menu.Item as={Link} to="/cart" style={{ fontSize: '1.5rem' }}>
          <Icon name="shopping cart" />
        </Menu.Item>
        {authUser && (
          <Menu.Item as={Link} to="/favorites" style={{ fontSize: '1.5rem' }}>
            <Icon name="heart" />
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Header;

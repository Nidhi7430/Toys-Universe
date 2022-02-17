import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';
import { Divider, Link, ListItemIcon } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { Google, Logout } from '@mui/icons-material';

const userMenu = ['Profile', 'Admin', 'Logout'];

export const NavBar = () => {
  const TITLE = 'Toys Universe';

  const { user, handleSignOut, handleSignIn } = React.useContext(AuthContext);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            variant="h5"
            underline="none"
            color={'inherit'}
            component={RouterLink}
            to="/"
            sx={{ mr: 2, display: { md: 'flex' } }}
          >
            {TITLE}
          </Link>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  // alt={user?.displayName || 'Remy Sharp'}
                  src={user?.photoURL || ''}
                >
                  {user && user.displayName
                    ? `${user.displayName.split(' ')[0][0]}${
                        user?.displayName?.split(' ')[1][0]
                      }`
                    : 'UN'}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenu.map((each, index) => (
                <MenuItem
                  key={index}
                  component={RouterLink}
                  to={`/${each.toLowerCase()}`}
                  onClick={handleCloseUserMenu}
                  sx={{ justifyContent: 'center' }}
                >
                  <Typography textAlign="center">{each}</Typography>
                </MenuItem>
              ))}
              <Divider />
              {user ? (
                <MenuItem onClick={handleSignOut}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <Typography textAlign="center">Sign Out</Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleSignIn}>
                  <ListItemIcon>
                    <Google />
                  </ListItemIcon>
                  <Typography textAlign="center">Sign In</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

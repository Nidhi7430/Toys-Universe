import React, { useState } from 'react';
import {
  AccountCircle,
  ExitToApp,
  Menu,
  ShoppingBasket,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { PAGES, TITLE } from '../../../constants';
import { useAuth } from '../../../context/AuthContext';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();
  return (
    <>
      <AppBar sx={{ bgcolor: 'primary.main' }}>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{ color: 'primary.contrastText' }}
          >
            <Menu />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>{TITLE}</Typography>
          <div>
            {user ? (
              <IconButton
                component={RouterLink}
                to="/profile"
                sx={{ color: 'primary.contrastText' }}
              >
                <ShoppingBasket />
              </IconButton>
            ) : null}
            <IconButton
              component={RouterLink}
              to="/profile"
              sx={{ color: 'primary.contrastText' }}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          role="presentation"
          sx={{ width: 200, height: '100vh', bgcolor: 'primary.light' }}
        >
          <List onClick={() => setOpen(false)}>
            {PAGES.map((page, index) => (
              <ListItem
                component={RouterLink}
                to={page.link}
                key={index}
                sx={{ color: 'secondary.main' }}
              >
                <ListItemIcon sx={{ color: 'secondary.main' }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.label.toUpperCase()} />
              </ListItem>
            ))}
            <Divider />
            <ListItem sx={{ color: 'secondary.main' }}>
              <ListItemIcon sx={{ color: 'secondary.main' }}>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="LOGOUT" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

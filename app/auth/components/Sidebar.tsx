'use client';

import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Link from 'next/link'

import ColorSchemeToggle from './ColorSchemeToggle';
import {AirplanemodeActive, Create, TravelExplore} from "@mui/icons-material";
import {redirect, usePathname} from "next/navigation";
import {ReactNode, useState} from "react";
import {User} from "@/model";

const closeSidebar = () => {
  if (typeof window !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
}

type Card = {
  name: string
  path: string
  icon: ReactNode
}

type Props = {
  profile: User
}

const Sidebar: React.FC<Props> = ({
  profile,
}) => {
  const pathname = usePathname()

  const [loading, setLoading] = useState(false)
  const logout = async () => {
    setLoading(true)
    await fetch('/api/auth/logout', {
      method: 'POST',
    })

    redirect('/public/login')
  }

  const allCards: Card[] = [
    {
      name: 'Strona główna',
      path: '/auth/dashboard',
      icon: <DashboardRoundedIcon />,
    },
    {
      name: 'Kreator wycieczki',
      path: '/auth/create',
      icon: <Create />,
    },
    {
      name: 'Plany wycieczek',
      path: '/auth/plans',
      icon: <AirplanemodeActive />,
    },
    {
      name: 'Odbyte wycieczki',
      path: '/auth/travels',
      icon: <TravelExplore />,
    }
  ]

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {/*<IconButton variant="soft" color="primary" size="sm">*/}
        {/*  <BrightnessAutoRoundedIcon />*/}
        {/*</IconButton>*/}
        <Typography level="title-lg"> Travel App </Typography>
        <ColorSchemeToggle sx={{ ml: 'auto' }} />
      </Box>
      {/*<Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" />*/}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          {
            allCards.map((card) => (
              <ListItem key={card.name}>
                <ListItemButton
                  selected={pathname === card.path}
                >
                  {card.icon}
                  <ListItemContent>
                    <Link
                      href={card.path}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <Typography level="title-sm">{card.name}</Typography>
                    </Link>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Ustawienia
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {/*<Avatar*/}
        {/*  variant="outlined"*/}
        {/*  size="sm"*/}
        {/*  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"*/}
        {/*/>*/}
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">{profile.firstName} {profile.lastName}</Typography>
          <Typography level="body-xs">{profile.email}</Typography>
        </Box>
        <IconButton
          size="sm"
          variant="plain"
          color="neutral"
          onClick={logout}
          loading={loading}
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}

export default Sidebar

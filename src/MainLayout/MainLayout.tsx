/* eslint-disable import/no-absolute-path */

import { Outlet } from 'react-router-dom';
import { Box, Center, keyframes, Image, Text, Stack, Button, useDisclosure, IconButton } from '@chakra-ui/react';
import { ReactNode, useCallback, useEffect, useState } from 'react';

interface MainlayoutProps {
  children?: ReactNode;
}

const MainLayout = (props: MainlayoutProps) => {
  const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  `
 
  return (
    <Center sx={{ background: 'linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(13,50,77,1) 0%, rgba(127,90,131,1) 100%)', backgroundSize: '400% 400%', animation: `${gradient} 15s ease infinite` }}>
      <Outlet />
    </Center>
  )
}

export default MainLayout
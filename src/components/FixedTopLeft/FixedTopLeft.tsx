import { Box, Center, keyframes, Button, Image, Text, Stack, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FixedTopRightProps {
    img: any;
}

const FixedTopRight = (props: FixedTopRightProps) => {

    return (
            <Image
                position='absolute'
                top={0}
                right={0}
                margin='16px'
                src={props.img}
            />
    )
}

export default FixedTopRight;
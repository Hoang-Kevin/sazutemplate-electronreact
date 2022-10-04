import { Box, Center, keyframes, Button, Image, Text, Stack, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonPreviousProps {
    link?: string;
}

const ButtonPrevious = (props : ButtonPreviousProps) => {
    let navigate = useNavigate();

    return (
            <IconButton
                position='absolute'
                top={0}
                left={0}
                margin='16px'
                variant='outline'
                colorScheme='yellow'
                aria-label='Return'
                icon={<ChevronLeftIcon />}
                isRound
                onClick={() => {
                    props.link ? navigate(props.link) : navigate(-1)
                }}
            />
    )
}

export default ButtonPrevious;
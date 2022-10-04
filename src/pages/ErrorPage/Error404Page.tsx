import { Box, Center, Button, Text} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
// Special import for Fade animation
const Fade = require("react-reveal/Fade")

const Error404Page = () => {
    const [isUnmounting, setIsUnmounting] = useState(false);

    const navigate = useNavigate();

    const FadeAway = () => {
        setIsUnmounting(!isUnmounting);
        setTimeout(() => {
            navigate('/landing')
        }, 800);
    }

    useEffect(() => {
        setIsUnmounting(true);
    }, [])

    return (
        <Fade when={isUnmounting}>
            <Center height={'100vh'} flexDirection='column'>
                <Box margin='0 0 20px 0'>
                    <Text fontSize='3xl' fontWeight='bold' color='whiteAlpha.900'>
                        404 Error - Page not found
                    </Text>
                </Box>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='yellow' variant='outline' onClick={() => {
                    FadeAway()
                }}>
                    Return to Homepage
                </Button>
            </Center>
        </Fade>

    )
}

export default Error404Page;
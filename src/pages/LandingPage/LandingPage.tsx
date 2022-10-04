import { Box, Center, Button, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
// Special import for Fade animation
const Fade = require("react-reveal/Fade")

interface LandingPageProps {

}

const LandingPage = (props: LandingPageProps) => {
    const [isUnmounting, setIsUnmounting] = useState(false);
    const navigate = useNavigate();

    const FadeAway = () => {
        setIsUnmounting(!isUnmounting);
        setTimeout(() => {
            navigate('/launch')
        }, 800);
    }


    return (
        <Fade>
            <Center width='100%' height={'100vh'} flexDirection='column' gap='5%'>
                <Center width='100%'>
                    <Text fontSize='xl' fontWeight='bold' color='#DFB15C'>
                        SazuTemplate
                    </Text>
                </Center>
            </Center>
        </Fade>

    )
}

export default LandingPage;
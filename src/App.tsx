import { ChakraProvider, theme } from '@chakra-ui/react';
import { StepsStyleConfig } from 'chakra-ui-steps';
import {
    BrowserRouter,
    Routes,
    Route,
    HashRouter
} from "react-router-dom";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

/** Page imports */
import MainLayout from './MainLayout/MainLayout';
import LandingPage from '@pages/LandingPage/LandingPage';
import Error404Page from '@pages/ErrorPage/Error404Page';


export function App() {

    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route path="landing" element={<LandingPage />} />
                            <Route index element={<LandingPage />} />
                            <Route
                                path="*"
                                element={<Error404Page />}
                            />
                        </Route>
                    </Routes>
                </HashRouter>
            </ChakraProvider>
        </RecoilRoot>

    )
}
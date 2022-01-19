import {
    Container,
    createTheme, Grid,
    responsiveFontSizes, Stack,
    ThemeProvider, Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";

import bg from '../images/bg_questions.jpg'
import logo from '../images/logo.png'

let theme = createTheme({})
theme = responsiveFontSizes(theme);

const Question = ({num, question, answers, onAnswer}) => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth='md'>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <Typography>
                        {num} / 5
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography>
                        {question}
                    </Typography>
                </Grid>
            </Grid>
            <img
                src={bg}
                alt='comics'
                style={{
                    height: 'auto',
                    width: '100%',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    borderWidth: '8px',
                    borderStyle: 'solid',
                    borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                    borderImageSlice: 1,
                }}
            />
        </Container>
    )
}

const TestPage = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: 0,
        config: {duration: 1500}
    })

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center top',
                backgroundRepeat: 'repeat-x',
            }}>
                <animated.img
                    src={logo}
                    alt='logo'
                    style={{
                        position: 'absolute',
                        top: isMobile ? '1%' : '5%',
                        left: '2%',
                        right: isMobile ? 0 : 'unset',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        zIndex: 1,
                        width: 'auto',
                        height: '20vh',
                        ...logoOpacityStyle,
                    }}
                />
            </div>
            <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: isMobile ? '1%' : '5%',
                marginRight: 'auto',
                marginLeft: 'auto',
            }}>
                <Question
                    num={1}
                    question="Lorem Ipsum has been the industry's standard dummy text ever since the ?"
                    answers={[]}
                    onAnswer={() => {}}

                />
            </div>

        </ThemeProvider>
    );
}

export default TestPage;

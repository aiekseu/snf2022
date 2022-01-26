import {
    Button,
    Container,
    createTheme,
    FormControlLabel,
    Grid,
    Radio,
    responsiveFontSizes,
    ThemeProvider,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";

import bg from '../images/bg_questions.jpg'
import city from '../images/city-min.png'
import logo from '../images/logo.png'
import {Box, styled} from "@mui/system";


const StyledRadio = styled((props) => <Radio size={'small'} {...props}/>)(() => ({
    '& > span': {
        color: 'rgba(152,152,182,0.7)',
    },
    '&.Mui-checked > span': {
        color: 'rgba(255,0,200,0.7)'
    }
}));

const RadioControlLabel = styled((props) =>
    <FormControlLabel {...props} control={<StyledRadio/>}/>)
(({theme}) => ({
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    background: 'rgba(29,29,47,0.7)',
    borderWidth: 1,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderColor: 'rgb(62,59,86)',
    '&> span': {
        fontWeight: 500,
        fontSize: 14,
        color: 'white',
    }
}));

const SelectedRadioControlLabel = styled(RadioControlLabel)(() => ({
    background: 'rgba(47,47,77,0.7)',
    '&.MuiButton-outlined': {
        borderColor: 'rgb(110,104,153)'
    }
}));

const GoButton = styled(Button)(({theme}) => ({
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    textTransform: 'initial',
    background: '#C50099',
    '&:hover': {
        background: '#a60080',
    },
    '&:active': {
        background: '#860068',
    }
}));


const Background = styled(Box)({
    position: "relative",
    height: "100%",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: '1px solid red'
});


const ResultPage = () => {

    let theme = createTheme({
        typography: {
            fontFamily: "'Raleway', sans-serif",
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        fontWeight: 400,
                    }
                }
            },
        }
    });
    theme = responsiveFontSizes(theme);

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: 0,
        config: {duration: 1500}
    });

    return (
        <ThemeProvider theme={theme}>
            <Box pb={4}
                 style={{
                     minHeight: '100vh',
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center top',
                     backgroundRepeat: 'repeat-x',
                 }}
            >
                <Box textAlign={'center'}>
                    <animated.img src={logo}
                                  alt='logo'
                                  style={{
                                      zIndex: 1,
                                      width: 'auto',
                                      height: '20vh',
                                      ...logoOpacityStyle,
                                  }}
                    />
                </Box>
                <Comics/>
            </Box>
        </ThemeProvider>
    );
}


const Comics = (props) => {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Container maxWidth='md' sx={{mt: 1}}>
            <Grid container columns={19} rowSpacing={2} justifyContent={'space-between'} alignItems={'stretch'}>
                <Grid item xs={10}>
                    <Background style={{aspectRatio: "5/3", backgroundImage: `url(${city})`}}/>
                </Grid>
                <Grid item xs={8}>
                    <Background style={{aspectRatio: "4/3", backgroundImage: `url(${city})`}}/>
                </Grid>
                <Grid item xs={19}>
                    <Background style={{aspectRatio: "19/6", backgroundImage: `url(${city})`}}/>
                </Grid>
                <Grid item xs={8}>
                    <Background style={{aspectRatio: "4/3", backgroundImage: `url(${city})`}}/>
                </Grid>
                <Grid item xs={10}>
                    <Background style={{aspectRatio: "5/3", backgroundImage: `url(${city})`}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ResultPage;

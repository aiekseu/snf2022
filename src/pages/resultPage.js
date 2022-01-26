import {
    Container,
    createTheme,
    Grid,
    responsiveFontSizes,
    ThemeProvider,
    Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";

import bg from '../images/bg_questions.jpg'
import city from '../images/city-min.png'
import logo from '../images/logo.png'
import {Box, styled} from "@mui/system";
import {Fragment} from "react";


const DisplayOver = styled(Box)(({theme}) => ({
    height: "100%",
    width: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    boxSizing: "border-box",
    ['&:hover']: {
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    ['&:hover :first-of-type']: {
        opacity: 1,
    },
}));

const Hover = styled(Box)({
    opacity: 0,
    transition: "opacity 350ms ease",
    height: "100%",
    width: "100%",
});


const Background = styled(Box)({
    position: "relative",
    height: "100%",
    cursor: "default",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderWidth: 2,
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
    borderImageSlice: 1,
});


const questions = [
    {
        num: 1,
        question: 'Где будете искать информацию?',
        answers: [
            {
                votes: 3,
                text: 'На Википедии'
            },
            {
                votes: 7,
                text: 'В Библиотеке знаний всего мира Санофи'
            },
            {
                votes: 5,
                text: 'Просто спросить у Си Джея'
            }
        ]
    },
];

function transform(questions) {
    const output = [];
    for (const question of questions) {
        const sumVotes = question.answers.reduce((a, ans) => a + ans.votes, 0);
        const percentageAnswers = [];
        let rest = 0;
        for (const [ix, answer] of question.answers.entries()) {
            if (ix !== question.answers.length - 1) {
                const p = Math.round(answer.votes / sumVotes * 100);
                rest += p;
                percentageAnswers.push({
                    percentage: p,
                    text: answer.text
                });
            } else {
                percentageAnswers.push({
                    percentage: 100 - rest,
                    text: answer.text
                });
            }
        }
        output.push({
            ...question,
            answers: percentageAnswers
        });
    }
    return output;
}

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

    const transformedQuestions = transform(questions)

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
                <Container maxWidth='md' sx={{mt: 2}}>
                    <Grid container columns={19} rowSpacing={2} justifyContent={'space-between'} alignItems={'stretch'}>
                        <Grid item xs={10}>
                            <Frame aspectRatio={"5/3"} background={city} question={transformedQuestions[0]}/>
                        </Grid>
                        {/*<Grid item xs={8}>*/}
                        {/*    <Frame aspectRatio={"4/3"} background={city}/>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={19}>*/}
                        {/*    <Frame aspectRatio={"19/6"} background={city}/>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={8}>*/}
                        {/*    <Frame aspectRatio={"4/3"} background={city}/>*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={10}>*/}
                        {/*    <Frame aspectRatio={"5/3"} background={city}/>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}


const Frame = ({aspectRatio, background, question}) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <Background style={{aspectRatio: aspectRatio, backgroundImage: `url(${background})`}}>
            <DisplayOver>
                <Hover style={{textAlign: 'center'}}>
                    <Grid container
                          direction={'column'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          style={{height: '100%'}}
                    >
                        <Grid container item rowSpacing={1} columns={24} alignItems={'center'}>
                            {
                                question.answers.map((el, ix) => (
                                    <Fragment key={ix}>
                                        <Grid item xs={6}>
                                            <Typography variant={'h3'}
                                                        fontWeight={500}
                                                        fontFamily={'digital-clock-font'}
                                                        style={{
                                                            background: "linear-gradient(180deg, rgb(255,66,154) 0%, rgb(91,78,230) 100%)",
                                                            webkitBackgroundClip: "text",
                                                            webkitTextFillColor: "transparent",
                                                        }}
                                            >
                                                {el.percentage}%
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={18}>
                                            <Typography variant={'body1'}
                                                        align={'left'}
                                                        fontSize={'1.12rem'}
                                                        lineHeight={'1.25em'}
                                                        fontWeight={500}
                                                        color={'#ffa9d1'}
                                            >
                                                {el.text[0].toLowerCase() + el.text.slice(1)}
                                            </Typography>
                                        </Grid>
                                    </Fragment>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Hover>
            </DisplayOver>
        </Background>
    )
}

export default ResultPage;

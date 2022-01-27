import {
    Button,
    Container,
    createTheme,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    responsiveFontSizes,
    Stack,
    ThemeProvider,
    Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";

import bg from '../images/bg_questions.jpg'
import city from '../images/city-min.png'
import logo from '../images/logo.png'
import {useNavigate, useParams} from "react-router-dom";
import {Box, styled} from "@mui/system";
import {useState} from "react";
import {questions} from "../data/questions";
import {Axios} from "axios-observable";


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


const TestPage = () => {

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
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const {num} = useParams();

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
                     height: '100%',
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center top',
                     backgroundRepeat: 'repeat',
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
                {
                    isMobile ?
                        <MobileQuestion
                            num={num}
                            question={questions[num - 1]}
                        />
                        :
                        <Question
                            num={num}
                            question={questions[num - 1]}
                        />
                }
            </Box>
        </ThemeProvider>
    );
}

const maxNum = 5;
const isLastQuestion = (num) => num === maxNum;
const isWideQuestion = (num) => num === 3;

const sendData = (id) => {
    if (id < 0) {
        return
    }
    console.log(`Send >>> [${id}]`);
    Axios.get(`https://sanofi-genzyme.herokuapp.com/api/answers/${id}/vote`)
        .subscribe((res) => console.log(res.data));
};

const MobileQuestion = ({num, question}) => {

    const [answerId, setAnswerId] = useState(-1);
    const [hasError, setHasError] = useState(false);

    num = parseInt(num);

    let navigate = useNavigate();

    const goNext = () => {
        if (answerId === -1 && !isLastQuestion(num)) {
            setHasError(true);
            return;
        }
        sendData(answerId);
        setAnswerId(-1);
        if (isLastQuestion(num)) {
            console.log('FINISH');
            navigate('/result', {replace: true});
        } else {
            console.log('NEXT');
            navigate(`/test/${num + 1}`, {replace: true});
        }
    };

    const handleChange = (event, value) => {
        setHasError(false);
        setAnswerId(value);
    }

    return (
        <Container maxWidth='md' sx={{mt: 1}}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={10}>
                    <hr style={{border: '1.1px solid #C50099', background: '#C50099'}}/>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant={'h3'} fontWeight={500} align={'right'} fontFamily={'digital-clock-font'}>
                        {num}/{maxNum}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant={'h6'} align={'justify'} whiteSpace={'pre-line'}>
                {question.legend}
            </Typography>
            <Stack mt={2} justifyContent={'space-between'} alignItems={'stretch'}>
                <img
                    src={city}
                    alt={'Comics'}
                    style={{
                        height: 'auto',
                        boxSizing: 'border-box',
                        width: '100%',
                        borderWidth: 4,
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                        borderImageSlice: 1,
                    }}/>
                <Typography variant={'h6'} fontWeight={500} align={'center'} mt={2}>
                    {question.question}
                </Typography>
                <RadioGroup
                    defaultValue={-1}
                    onChange={handleChange}
                >
                    <Stack mt={1} spacing={1}>
                        <div/>
                        {
                            question.answers?.map((ans) => {
                                return ans.id === answerId ?
                                    <SelectedRadioControlLabel value={ans.id} label={ans.text} key={ans.id}/>
                                    :
                                    <RadioControlLabel value={ans.id} label={ans.text} key={ans.id}/>
                            })
                        }
                    </Stack>
                </RadioGroup>
                <Box mt={isLastQuestion(num) ? 0 : 1} textAlign={'center'}>
                    <Typography color={'error'} align={'center'} hidden={!hasError}>
                        Выберите один из вариантов ответа
                    </Typography>
                    <GoButton variant={'contained'}
                              size={'large'}
                              fullWidth
                              sx={{mt: isLastQuestion(num) ? 0 : 1}}
                              onClick={goNext}
                    >
                        {isLastQuestion(num) ? 'Завершить' : 'Следующий вопрос'}
                    </GoButton>
                </Box>
            </Stack>
        </Container>
    )
}

const Question = ({num, question}) => {
    const [answerId, setAnswerId] = useState(-1);
    const [hasError, setHasError] = useState(false);

    num = parseInt(num);

    let navigate = useNavigate();

    const goNext = () => {
        if (answerId === -1 && !isLastQuestion(num)) {
            setHasError(true);
            return;
        }
        sendData(answerId);
        setAnswerId(-1);
        if (isLastQuestion(num)) {
            console.log('FINISH');
            navigate('/result', {replace: true});
        } else {
            console.log('NEXT');
            navigate(`/test/${num + 1}`, {replace: true});
        }
    };

    const handleChange = (event, value) => {
        setHasError(false);
        setAnswerId(value);
    }

    return (
        <Container maxWidth={'lg'} sx={{mt: 1}}>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Grid item xs={2}>
                    <Typography variant={'h2'} fontWeight={500}>
                        {num}/{maxNum}
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant={'body1'} align={'left'} style={{whiteSpace: 'pre-line'}}>
                        {question.legend}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container mt={0} spacing={4} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item xs={6} md={isWideQuestion(num) || isLastQuestion(num) ? 12 : null} my={0}>
                    <img
                        src={city}
                        alt={'Comics'}
                        style={{
                            height: 'auto',
                            boxSizing: 'border-box',
                            width: '100%',
                            aspectRatio: question.ratio,
                            borderWidth: 4,
                            borderStyle: 'solid',
                            borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                            borderImageSlice: 1,
                        }}/>
                </Grid>
                <Grid item xs={6} md={isWideQuestion(num) || isLastQuestion(num) ? 12 : null} my={0}>
                    <Typography variant={'h6'} fontWeight={600}>
                        {question.question}
                    </Typography>
                    <RadioGroup
                        defaultValue={-1}
                        onChange={handleChange}
                    >
                        <Stack mt={1} spacing={1}>
                            <div/>
                            {
                                question.answers?.map((ans) => {
                                    return ans.id === answerId ?
                                        <SelectedRadioControlLabel value={ans.id} label={ans.text} key={ans.id}/>
                                        :
                                        <RadioControlLabel value={ans.id} label={ans.text} key={ans.id}/>
                                })
                            }
                        </Stack>
                    </RadioGroup>
                    <Box mt={isLastQuestion(num) ? 0 : 1} textAlign={'center'}>
                        <Typography color={'error'} align={'center'} hidden={!hasError}>
                            Выберите один из вариантов ответа
                        </Typography>
                        <GoButton variant={'contained'}
                                  size={'large'}
                                  fullWidth={num !== 3}
                                  sx={{mt: isLastQuestion(num) ? 0 : 1, px: 20}}
                                  onClick={goNext}
                        >
                            {isLastQuestion(num) ? 'Завершить' : 'Следующий вопрос'}
                        </GoButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TestPage;

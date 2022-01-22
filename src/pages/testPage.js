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


const questions = [
    {
        num: 1,
        question: 'Где будете искать информацию?',
        answers: [
            'На Википедии',
            'В Библиотеке знаний всего мира Санофи',
            'Просто спросить у Си Джея'
        ]
    },
    {
        num: 2,
        question: 'На чем вы отправитесь?',
        answers: [
            'Сверхзвуковая карета скорой помощи. Противозаконно, но быстро',
            'ВАЗ 2111. Проверено временем, но сомнительно',
            'Протестируем созданные командами кары'
        ]
    },
    {
        num: 3,
        question: 'Какой сверх режим вы выбираете?',
        answers: [
            'Режим невидимости. Никто нас не заметит, главное самим не потеряться',
            'Режим безлимитного питания',
            'Режим встроенного караоке'
        ]
    },
    {
        num: 4,
        question: 'Вы приземлились на незнакомой планете. Что будете делать?',
        answers: [
            'Без раздумий отправиться на поиски вещества',
            'Подготовить набор первой необходимости, разведать обстановку экологического и биологического ' +
            'характера и отправиться в путь ночью',
            'Подготовить базовый набор и без разведки отправиться днём на поиски'
        ]
    },
    {
        num: 5,
        question: 'Кто возглавит операцию?',
        answers: [
            'Лунтик',
            'Елена Малышева',
            'Дэвид Хугазян'
        ]
    },
];


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
                <Question
                    num={num}
                    question={questions[num - 1].question}
                    answers={questions[num - 1].answers}
                />
            </Box>
        </ThemeProvider>
    );
}


const Question = (props) => {
    // TODO || В будущем вместо сравнения тела ответа будет id ответа
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [hasError, setHasError] = useState(false);

    let num = parseInt(props.num);
    const maxNum = 5;

    let navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const sendData = (answer) => {
        console.log(`Send >>> [${answer}]`);
    };

    const goNext = () => {
        if (selectedAnswer.length === 0) {
            setHasError(true);
            return;
        }
        sendData(selectedAnswer);
        setSelectedAnswer('');
        if (num === maxNum) {
            console.log('FINISH');
        } else {
            console.log('NEXT');
            navigate(`/test/${num + 1}`, {replace: true});
        }
    };

    const handleChange = (event, value) => {
        setHasError(false);
        setSelectedAnswer(value);
    }

    return (
        <Container maxWidth='md' sx={{mt: 1}}>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Grid item xs={2}>
                    <Typography variant={'h3'} fontWeight={500}>
                        {num}/{maxNum}
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant={isMobile ? 'h6' : 'h4'} align={'center'}>
                        {props.question}
                    </Typography>
                </Grid>
            </Grid>
            <Stack mt={2} justifyContent={'space-between'} alignItems={'stretch'}>
                <img
                    src={city}
                    alt={'Comics'}
                    style={{
                        height: 'auto',
                        boxSizing: 'border-box',
                        width: '100%',
                        borderWidth: 8,
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                        borderImageSlice: 1,
                    }}/>
                <RadioGroup
                    defaultValue={''}
                    onChange={handleChange}
                >
                    <Stack mt={1} spacing={1}>
                        <div/>
                        {
                            props.answers.map((el, ix) => {
                                return el === selectedAnswer ?
                                    <SelectedRadioControlLabel value={el} label={el} key={ix}/>
                                    :
                                    <RadioControlLabel value={el} label={el} key={ix}/>
                            })
                        }
                    </Stack>
                </RadioGroup>
                <Box mt={1}>
                    <Typography color={'error'} align={'center'} hidden={!hasError}>
                        Выберите один из вариантов ответа
                    </Typography>
                    <GoButton variant={'contained'}
                              size={'large'}
                              fullWidth
                              sx={{mt: 1}}
                              onClick={goNext}
                    >
                        {num === maxNum ? 'Завершить' : 'Следующий вопрос'}
                    </GoButton>
                </Box>
            </Stack>
        </Container>
    )
}

export default TestPage;

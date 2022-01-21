import {
    Button,
    Container,
    createTheme,
    Grid,
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


const AnswerButton = styled((props) => <Button {...props} variant={'outlined'}/>)(({theme}) => ({
    fontWeight: 500,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    textTransform: 'initial',
    color: 'white',
    background: 'rgba(29,29,47,0.7)',
    '&.MuiButton-outlined': {
        borderColor: 'rgb(62,59,86)'
    }
}));

const SelectedAnswerButton = styled(AnswerButton)(({theme}) => ({
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
]


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
    })
    theme = responsiveFontSizes(theme);

    const {num} = useParams()

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: 0,
        config: {duration: 1500}
    })

    return (
        <ThemeProvider theme={theme}>
            <Box pb={4}
                 style={{
                     position: 'relative',
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
                                      // position: 'absolute',
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
                </Box>
                <div
                    style={{
                        // position: 'absolute',
                        left: 0,
                        right: 0,
                        top: isMobile ? '6%' : '10%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                    }}
                >
                    <Question
                        num={num}
                        question={questions[num - 1].question}
                        answers={questions[num - 1].answers}
                    />
                </div>
            </Box>

        </ThemeProvider>
    );
}


const Question = (props) => {
    // TODO || В будущем вместо сравнения тела ответа будет id ответа
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [hasError, setHasError] = useState(false);

    let num = parseInt(props.num);

    let navigate = useNavigate();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const sendData = (answer) => {
        console.log(`Send >>> [${answer}]`)
    };

    const goNext = (event) => {
        if (selectedAnswer.length === 0) {
            setHasError(true)
            return
        }
        sendData(selectedAnswer)
        setSelectedAnswer('')
        if (num == 5) {
            console.log('FINISH')
        } else {
            console.log('NEXT')
            navigate(`/test/${num + 1}`, {replace: true})
        }
    };

    const handleChange = (event) => {
        setHasError(false)
        setSelectedAnswer(event.currentTarget.innerText);
    };

    return (
        <Container maxWidth='md' sx={{mt: 1}}>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Grid item xs={2}>
                    <Typography variant={'h3'} fontWeight={500}>
                        {num}/5
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant={'h6'} align={'center'}>
                        {props.question}
                    </Typography>
                </Grid>
            </Grid>
            <Stack mt={2} justifyContent={'space-between'} alignItems={'center'}>
                <img
                    src={city}
                    alt={'Comics'}
                    style={{
                        height: 'auto',
                        width: '95%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        borderWidth: 8,
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                        borderImageSlice: 1,
                    }}/>
                <Stack mt={2} spacing={1}>
                    {
                        props.answers.map((el, ix) => {
                            return el === selectedAnswer ?
                                <SelectedAnswerButton key={ix}
                                                      onClick={handleChange}
                                                      sx={{py: 1}}
                                >
                                    {el}
                                </SelectedAnswerButton>
                                :
                                <AnswerButton key={ix}
                                              onClick={handleChange}
                                              sx={{py: 1}}
                                >
                                    {el}
                                </AnswerButton>
                        })
                    }
                </Stack>
                <Box mt={3} textAlign={'center'}>
                    <Typography color={'error'} hidden={!hasError}>
                        Выберите один из вариантов ответа
                    </Typography>
                    <GoButton variant={'contained'}
                              size={'large'}
                              sx={{mt: 1}}
                              onClick={goNext}
                    >
                        {num == 5 ? 'Завершить' : 'Далее'}
                    </GoButton>
                </Box>
            </Stack>
        </Container>
    )
}

export default TestPage;

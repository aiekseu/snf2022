import * as React from 'react';
import ButtonUnstyled, {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled';
import {styled} from '@mui/system';

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const {children, ...other} = props;

    return (
        <svg width="300" height="50" {...other} ref={ref}>
            <polygon points="0,50 0,0 300,0 300,50" className="bg"/>
            <polygon points="0,52 0,0 302,0 302,52" className="borderEffect"/>
            <foreignObject x="0" y="0" width="300" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

const pink = {
    50: '#ff4edd',
    100: '#C50099',
    200: '#C50099',
    400: '#C50099',
    500: '#C50099',
    600: '#C50099',
    800: '#C50099',
    900: '#C50099',
};

const CustomButtonRoot = styled(ButtonRoot)(
    ({theme}) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${pink[600]};
  --hover-color: ${pink[600]};
  --active-color: ${pink[600]};

  & polygon {
    fill: #C50099;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: transparent;
    stroke-width: 3;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: #C50099;
  }

  & .borderEffect {
    stroke: ${pink[50]};
    stroke-width: 3;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
    -webkit-filter: blur(6px);
    -moz-filter: blur(6px);
    -o-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 0px solid ${pink[50]};
    outline-offset: 0px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 1.375rem;
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      line-height: 1.3;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      -moz-user-select: -moz-none;
      -o-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
       user-select: none;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref}/>;
});

export default function NeonButton({text, onClick}) {
    return <SvgButton onClick={onClick}>{text}</SvgButton>;
}
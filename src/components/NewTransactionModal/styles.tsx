import styled from 'styled-components';
import { darken , transparentize} from 'polished';

export const Container = styled.form`

h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input{
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    height: 3rem;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body);
    }
    & + input{
        margin-top:1rem;

    }
}

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border:0;
    font-weight: 600;
    font-size: 1rem;
    margin-top:1.5rem;
    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.9);
    }
}

`

export const TransactionTypeContainer = styled.form`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

`


interface radioButtonProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}
const colors = {
    green:'#33CC95',
    red:'#E52E4D'
};

export const RadioButton = styled.button<radioButtonProps>`

height:3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props)=>props.isActive 
    ? transparentize(0.7, colors[props.activeColor])
    : 'transparent'};
    transition: border-color 0.3s;
    &:hover{
        border-color: ${darken('0.1','#d7d7d7')};
    }

    img{
        width:25px;
        height:25px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-title);
    }

`
import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius:10px;
    margin-botton:10px;
    align-items: center;

    input {
        width:25px;
        height:25px;
        margin-right:10px;

    }

    label {
        color: #CCC;
    }
`
));
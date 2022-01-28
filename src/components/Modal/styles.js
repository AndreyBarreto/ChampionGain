import styled from "styled-components";

export const Overlay = styled.div`
    background:rgba(0,0,0,0.4);
    backdrop-filter: blur(4px);
    position:absolute;
    height:100%;
    width:100%;
    left:0px;
    top:0px;
    display:flex;
    align-items:center;
    justify-content:center;

    
    `

export const Container = styled.div`
    background:#fff;
    border-radius:4px;
    padding:24px;
    box-shadow:0px 4px 10px rgba(0,0,0,0.04);
    max-width:450px;
    width:100%;

    h1{
        font-size:22px;
    }

    p{
        margin-top:8px;
    }
`
export const Footer =styled.footer`
    margin-top:22px;
    display:flex;
    align-items:center;
    justify-content:flex-end;


    .cancel-button{
        background:transparent;
        border:none;
        font-size:16px;
        margin-right:8px;
        color:${({theme})=> theme.colors.gray[200]}
    }
    `

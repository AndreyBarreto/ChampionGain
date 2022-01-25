import styled from 'styled-components';

export const Container = styled.div`
  margin-top:32px;`;

export const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
  strong {
    color:#222;
    font-size: 24px;
  }

  a {
    font-size:16px;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration:none;
    font-weight:bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius:6px;
    transition: all 0.2s ease-in;

    &:hover{
      background:${({ theme }) => theme.colors.primary.main};
      color:white;
    }
  }
`;

export const ListContainer = styled.div`
  margin-bottom:8px;
  margin-top:24px;


  .sort-button{
    background:transparent;
    border:none;
    display:flex;
    align-items:center;

    span{
      margin-right:8px;
      font-weight:bold;
      color:${({ theme }) => theme.colors.primary.main}
    }
  }
`;

export const Card = styled.div``;
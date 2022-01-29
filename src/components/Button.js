import styled, { css } from 'styled-components'

export default styled.button`
  padding:0 16px;
  height:52px;
	color: #fff;
  border:none;
  background:${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  box-shadow:0px 4px 10px rgba(0,0,0,0.04);
	font-weight:bold;
	border-radius:4px;
	transition:background 0.2s ease-in;


	&[disabled]{
		background: #ccc;
		cursor:default;
	}
  ${({ theme, danger }) => danger && css`
    background:${theme.colors.danger.main};

  &:hover{
    background:${theme.colors.danger.light};
  }
  &:active{
    background:${theme.colors.danger.dark};
  }
  `}

`;

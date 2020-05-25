import styled from 'styled-components'

export const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 1100px) {
    height: 40px;
  }
  
  & a {
    display: inline-block;
    position: absolute;
    top: 0; bottom: 0;
    float: left;
    margin: auto auto auto 30px;
    text-decoration: none;
    color: ${({ theme }) => theme.text[1]};
    
    cursor: pointer;
    
    ${({ theme }) => theme.type.display[1]};
    font-family: ${({ theme }) => theme.type.serif};

    &:hover {
      transition: all 0.15s ease;
      color: ${({ theme }) => theme.colors.buttonHover};
    }

    @media (max-width: 1100px) {
      margin-left: 7px;
      font-size: 30px;
      line-height: 40px;
    }
  }
`

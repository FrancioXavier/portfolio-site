import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: absolute;
  z-index: 9999999;
  height: fit-content;
  width: fit-content;
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
    height: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
    background-color: ${({ theme }) => theme.colors.primary};
    height: 5px;
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0 !important;
  }
  .menu__btn {
    position: fixed;
    top: 50px;
    left: 50px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: fit-content;
    height: fit-content;
    margin-left: 30px;
    margin-top: 20px;
    padding: 80px 3vw 30px 0;
    list-style: none;
    background-color: #d9d9d9;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
  }
  .menu__item {
    display: block;
    padding: 12px 24px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
  }
`;

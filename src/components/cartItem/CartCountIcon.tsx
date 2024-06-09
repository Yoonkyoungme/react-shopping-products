import useFetchCartItems from '@/queries/cartItem/useFetchCartItems';

import CartIcon from '@/assets/cart.svg?react';

import { STYLE_THEME } from '@/styles/constants/theme';
import styled from '@emotion/styled';

const CartCountIcon = () => {
  const { cartItems } = useFetchCartItems();
  return (
    <S.Container>
      <CartIcon />
      {cartItems.length !== 0 && <S.Circle>{cartItems.length}</S.Circle>}
    </S.Container>
  );
};

export default CartCountIcon;

const S = {
  Container: styled.div`
    position: relative;
    display: inline-block;
    width: 30px;
  `,
  Circle: styled.div`
    position: absolute;
    top: 80%;
    right: 20%;
    transform: translate(50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${STYLE_THEME.color.white};
    color: ${STYLE_THEME.color.black};
    font-size: ${STYLE_THEME.fontSize.xs};
    font-weight: ${STYLE_THEME.fontWeight.bold};
  `,
};
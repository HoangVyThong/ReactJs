import React from "react";
import styled, { css } from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, p, a)``
 * CSS in JS
 */

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardContent = styled.div`
  position: absolute;
  width: calc(100% - 36px);
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #fff;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0%;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserName = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 300;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

const CardAmount = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    87deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(87deg, #20e382 1.38%, #2cccff 64.35%);
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledCard = styled.div`
  position: relative;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=450x338&vertical=center"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=450x338&vertical=center"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/coolicon.svg" alt="" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary}>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;

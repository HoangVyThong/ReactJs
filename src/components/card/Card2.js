import React from "react";
import styled, { css } from "styled-components";

/**
 * const StyledCard = styled.tag(h1, h2, p, a)``
 * CSS in JS
 */
const StyledCard = styled.div`
  position: relative;
  .card-image {
    border-radius: 8px;
    height: 400px;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .card-content {
    position: absolute;
    width: calc(100% - 36px);
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0%;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100rem;
      object-fit: cover;
      flex-shrink: 0;
    }
    span {
      color: #333;
      font-size: 16px;
      font-weight: 300;
    }
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #000;
      font-size: 18px;
      font-weight: 500;
    }
    span {
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
    }
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=450x338&vertical=center"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=450x338&vertical=center"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/coolicon.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;

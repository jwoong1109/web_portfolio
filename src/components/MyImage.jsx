import React from 'react';
import MyImage from '../assets/img/jinwoong.png';
import { AiFillGithub, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import styled from 'styled-components';
import data from '../data/data';
import Tech from './Tech';

const StyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const SocialIconItem = styled.li`
  margin-top:10px;
  margin-left: 3.15rem;
  flex-grow: 1; /* 아이콘 간격을 동일하게 설정 */
`;

const SocialIconLink = styled.a`
  font-size: 2rem; /* 아이콘 크기 조절 */
`;

const Image = () => {
  return (
    <StyledComponent>
      <div>
        <h1>{data.comment}<br/>
          {data.name}입니다.</h1>
        <img src={MyImage} alt="MyImage" />
        <div>
          <div>
            <Tech>
              
            </Tech>
          </div>
          <SocialIcons>
            <SocialIconItem>
              <SocialIconLink href='https://github.com/jwoong1109' rel='noopener noreferrer'>
                <AiFillGithub />
              </SocialIconLink>
            </SocialIconItem>
            <SocialIconItem>
              <SocialIconLink href='https://www.youtube.com/jwoong1109' rel='noopener noreferrer'>
                <AiFillYoutube />
              </SocialIconLink>
            </SocialIconItem>
            <SocialIconItem>
              <SocialIconLink href='https://www.instagram.com/iam_jin.woong' rel='noopener noreferrer'>
                <AiOutlineInstagram />
              </SocialIconLink>
            </SocialIconItem>
          </SocialIcons>
        </div>
      </div>
    </StyledComponent>
  );
}

export default Image;

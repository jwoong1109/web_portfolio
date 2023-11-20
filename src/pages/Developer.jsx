import React from 'react';
import Main from '../components/section/Main';
import MyImage from '../components/MyImage';
import styled from 'styled-components';


const Developer = () => {
    return (
        <Main 
            title="추천 개발자"
            description="오늘의 추천 개발자 .">
            <CenteredContent>
                <MyImage />
            </CenteredContent>
        </Main>
    );
}

export default Developer;


// 중앙 정렬을 위한 스타일드 컴포넌트 생성
const CenteredContent = styled.div`
    display: flex;
    align-items: center;
    height: 100vh; // 화면 높이의 100%를 차지하도록 설정 (선택적으로 조절 가능)
`;
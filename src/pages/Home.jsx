import React, { useEffect, useState } from 'react';
import '../assets/scss/section/_home.scss';
import Main from '../components/section/Main';

const MyPhoto = () => {
  const images = [
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
  ];

  const [current, setCurrent] = useState(0);

  const go = (dir) => {
    if (current + dir < 0) setCurrent(images.length - 1);
    else if (current + dir >= images.length) setCurrent(0);
    else setCurrent(current + dir);
  }

  useEffect(() => {
    const wheel = (props) => {
      if (props.deltaY < -80) {
        go(-1);
      }
      else if (props.deltaY > 80) {
        go(1);
      }
    }

    window.addEventListener('mousewheel', wheel, false);
    window.addEventListener('wheel', wheel, false);

    return () => {
      window.removeEventListener('mousewheel', wheel, false);
      window.removeEventListener('wheel', wheel, false);
    }
  }, []);

  return (
    <div id="square">
      <h2>About Me</h2>
      <div className="photo">
        <img src={images[current]} alt="slideshow" />
      </div>
      <div className="buttons">
        <button className="next" onClick={() => go(-1)}></button>
        <button className="prev" onClick={() => go(1)}></button>
      </div>
    </div>
  )
}


const Home = () => {
  return (
    <Main title="이진웅의 공간" 
          description="저에 대한 소개입니다."
    >
      <MyPhoto/>
    </Main>
  )
}

export default Home;
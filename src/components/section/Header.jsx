import React from "react";

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import Clock from "../Clock";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />Portfolio</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseball /> 이진웅
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 /> 추천 개발자
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 웹표준 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup /> GSAP Parallax
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell /> 포트폴리오 사이트
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>
            
            <Clock/>

            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/jwoong1109' rel='noopener noreferrer'>
                            <AiFillGithub />jwoong1109
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/jwoong1109' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                
                    <li>
                        <a href='https://www.instagram.com/iam_jin.woong' rel='noopener noreferrer'>
                            <AiOutlineInstagram /> iam_jin.woong
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header

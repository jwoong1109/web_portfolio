import React, { useEffect, useRef } from 'react';
import Main from '../components/section/Main'
import '../assets/scss/section/_scroll.scss';

const Scroll = () => {
    const scrollAnimateEl = useRef(null);
    const scrollAnimateMainEl = useRef(null);
    const headerEl = useRef(null);
    const footerEl = useRef(null);
    const contentEl = useRef(null);
    const wrapperParallaxEl = useRef(null);

    useEffect(() => {
        const scrollFooter = (scrollY, heightFooter) => {
            if (scrollY >= heightFooter) {
                footerEl.current.style.bottom = '0px';
            } else {
                footerEl.current.style.bottom = '-' + heightFooter + 'px';
            }
        }

        const onScroll = () => {
            const scroll = window.scrollY;
            scrollAnimateMainEl.current.style.top = '-' + scroll + 'px';
            headerEl.current.style.backgroundPositionY = 50 - (scroll * 100 / heightDocument) + '%';
            scrollFooter(scroll, footerHeight);
        }

        const windowHeight = window.innerHeight;
        const footerHeight = footerEl.current.offsetHeight;
        const heightDocument = (windowHeight) + (contentEl.current.offsetHeight) + (footerEl.current.offsetHeight) - 20;

        scrollAnimateEl.current.style.height = heightDocument + 'px';
        scrollAnimateMainEl.current.style.height = heightDocument + 'px';

        headerEl.current.style.height = windowHeight + 'px';
        headerEl.current.style.lineHeight = windowHeight + 'px';

        wrapperParallaxEl.current.style.marginTop = windowHeight + 'px';

        scrollFooter(window.scrollY, footerHeight);

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <div id="scroll-animate" ref={scrollAnimateEl}>
            <div id="scroll-animate-main" ref={scrollAnimateMainEl}>
                <div className="wrapper-parallax" ref={wrapperParallaxEl}>
                    <div className="scroll-header" ref={headerEl}>
                        <h2>Header</h2>
                    </div>

                    <section className="content" ref={contentEl}>
                        <h2>Content</h2>
                    </section>

                    <footer ref={footerEl}>
                        <h2>Footer</h2>
                    </footer>
                </div>
            </div>
        </div>
    )
}

const Port = () => {
    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
            Port
            <Scroll/>
        </Main>
    )
}

export default Port
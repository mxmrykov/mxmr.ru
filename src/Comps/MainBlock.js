import React, { Component } from "react"
import WOW from 'wowjs';
import logo from '../lib/logo.png'
import { Typewriter } from 'react-simple-typewriter'
import coder from '../lib/coding.gif'

export default class MainBlock extends Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return <article id="main__" className="sub_about wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <div>
                {/* <img src={logo} /> */}
                <div style={{ marginBlock: 20 }}>
                    <h1>Разработка Веб-сайтов<br />Любой сложности</h1>
                    {/* <h4>Лэндинги, альбомы, многостраничные сайты, фул-стек приложения</h4> */}
                </div>
                <h3>
                    <Typewriter
                        words={['Лэндинги', 'Сайты-визитки', 'Многостраничные сайты', 'Фул-стек приложения']}
                        cursor
                        loop={true}
                        cursorBlinking={true}
                        typeSpeed={150}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    //
                    />
                </h3>
            </div>
            <img src={coder} style={{ width: 200 }} />
        </article>
    }
}
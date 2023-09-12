import React from "react";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet"
import HALO from 'vanta/dist/vanta.halo.min'
import NET from 'vanta/dist/vanta.net.min'
import logo from '../lib/logo.png'
import menu from '../lib/menu.png'
import node from '../lib/nodejs.png'
import react from '../lib/reactjs.png'
import php from '../lib/php.png'
import mysql from '../lib/mysql.png'
import jquery from '../lib/JQuery.png'
import bootstrap from '../lib/bootstrap.png'
import tw from '../lib/tw.png'
import html from '../lib/html.png'
import css from '../lib/css.png'
import MainBlock from "../Comps/MainBlock"
import { useLocation, useParams } from "react-router-dom";
import vk from '../lib/vk.png'
import inst from '../lib/inst.png'
import ds from '../lib/ds.png'
import tg from '../lib/tg.png'
import axios from "axios";
export default function Home() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    const [vantaEffectN, setVantaEffectN] = useState(null)
    let [globalPrice, setGlobalPrice] = useState(0)
    let [localPrice, setLocalPrice] = useState(0)
    let [durance, setDurance] = useState(0)
    let [LCount, setLCount] = useState(0)
    let [PCount, setPCount] = useState(0)
    let [isDesign, setDesign] = useState(false)
    const [side, setSide] = useState(false)
    let [isBackend, setBackend] = useState(false)
    let [name, setName] = useState()
    let [tel, setTel] = useState()
    let [email, setEmail] = useState()
    let [desc, setDesc] = useState()
    const location = useLocation()
    useEffect(() => {
        setLocalPrice(PCount * 4500 + LCount * 10000)
        setGlobalPrice(localPrice + 0.3 * isDesign * localPrice + 0.3 * isBackend * localPrice)
        setDurance(parseInt(PCount * 0.5) + parseInt(LCount) + parseInt(isDesign * (2 * PCount)) + parseInt(isBackend * (2 * PCount)))
    })
    const myRefN = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(HALO({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                baseColor: 0x101345,
                backgroundColor: 0xa0f2f,
                amplitudeFactor: 1.20,
                size: 0.90
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    useEffect(() => {
        if (!vantaEffectN) {
            setVantaEffectN(NET({
                el: myRefN.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x919191,
                backgroundColor: 0x31184d,
                points: 20.00,
                maxDistance: 14.00,
                spacing: 20.00
            }))
        }
        return () => {
            if (vantaEffectN) vantaEffectN.destroy()
        }
    }, [vantaEffectN])
    return <div className="App">
        <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" />
            <title>RYKOV development</title>
            <meta name="description" content="RYKOV development - Разработка веб-сайтов разной сложности." />
            <script src="/script.js" />
        </Helmet>
        {/* (window.location.protocol + '//' + window.location.host + '#fe') */}
        <div className="sidemenu_">
            <span className={location.hash == '#main' ? 'sidespan__active' : ''} onClick={() => window.location.href = '#main'} />
            <span className={location.hash == '#about' ? 'sidespan__active' : ''} onClick={() => window.location.href = '#about'} />
            <span className={location.hash == '#skills' ? 'sidespan__active' : ''} onClick={() => window.location.href = '#skills'} />
            <span className={location.hash == '#calculator' ? 'sidespan__active' : ''} onClick={() => window.location.href = '#calculator'} />
            <span className={location.hash == '#feedback' ? 'sidespan__active' : ''} onClick={() => window.location.href = '#feedback'} />
        </div>
        <div className="firstlayer__section_bg" ref={myRef}></div>
        <section onClick={() => setSide(!side)} className={side ? "sd__menu_main sd_act" : "sd__menu_main"} data-wow-duration="1s" data-wow-delay="0s" style={(window.innerWidth > 500) ? { display: 'none' } : { display: 'flex' }}>
            <ul>
                <li><a href="#main" className="wow fadeInRight">Главная</a></li>
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#skills">Навыки</a></li>
                <li><a href="#calculator">Калькулятор</a></li>
                <li><a href="#feedback">Обратная связь</a></li>
            </ul>
            <div className="fl alc">
                <a href="https://t.me/mxmrykov" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.1s"><img src={tg} style={{ marginInline: 5 }} width='40' /></a>
                <a href="https://vk.com/mxmrykov" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.3s"><img src={vk} style={{ marginInline: 5 }} width='40' /></a>
                <a href="https://instagram.com/mxmrykov?igshid=OGQ5ZDc2ODk2ZA==" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.5s"><img src={inst} style={{ marginInline: 5 }} width='40' /></a>
                <a href="https://discordapp.com/users/570258958258929671/" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.7s"><img src={ds} style={{ marginInline: 5 }} width='40' /></a>
            </div>
        </section>
        <header>
            <article>
                <img className="side_activator" src={menu} width='35' onClick={() => setSide(!side)} />
                <ul className="hdble_menu">
                    <li><a href="#main">Главная</a></li>
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#skills">Навыки</a></li>
                    <li><a href="#calculator">Калькулятор</a></li>
                </ul>
                <button onClick={() => window.location.href = '#feedback'}>Заказать</button>
            </article>
        </header>
        <section id="main" className="firstlayer__section">
            <MainBlock />
        </section>
        <section className="f__transition"></section>
        <section className="slayer__starts">
            <div className="slayer__starts_bg" id="about"></div>
            <h1 className="about_m_h wow fadeInUp" style={{ marginBottom: 50 }} data-wow-duration="1s" data-wow-delay="0s">Обо мне</h1>
            <article className="about_m_h_m">
                <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s" style={{ justifyContent: "center" }} >Привет, меня зовут Максим<img style={{ marginInline: 5 }}
                    width='20' src='https://em-content.zobj.net/thumbs/120/apple/354/waving-hand_1f44b.png' />
                </h2> <br /><p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">Вот уже 3 года я занимаюсь веб-программированием.
                    За это время я многому научился, писал как свои проекты, так и сайты на заказ.
                    Имею опыт в написании формуов, социальных сетей, мессенджеров, что уж говорить о
                    простых одностраничных сайтах. Создавал свой бекенд-фреймворк на основе PHP. В данный
                    момент создаю целевые сайты для <span>заказчиков <img width='20'
                        src='https://em-content.zobj.net/thumbs/72/apple/354/man-technologist-medium-light-skin-tone_1f468-1f3fc-200d-1f4bb.png' /></span></p>
            </article>
            <article className="about_m_h_m" >
                <h2 className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.0s" style={{ justifyContent: "center" }} >Мои принципы работы<img style={{ marginInline: 5 }}
                    width='20' src='https://em-content.zobj.net/thumbs/72/apple/354/bar-chart_1f4ca.png' />
                </h2> <br /><p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s"><span style={{ textDecoration: 'underline', fontWeight: 200 }}>Простота работы.</span> При отсутствии материала
                    (дизайн, шрифты, иконки, картинки) все будет разработано совместно с вами в процессе написания основной части.<br />
                    <span style={{ textDecoration: 'underline', fontWeight: 200 }}>Постоянная связь.</span> Весь процесс сопровождается диалогом, клиент всегда может попросить изменить какую-либо часть сайта,
                    внести иные коррективы.<br />
                    <span style={{ textDecoration: 'underline', fontWeight: 200 }}>Долгосрочные перспективы.</span> Работа с клиентами происходит даже после выполнения заказа. Вне зависимости от срока давности
                    сотрудничества вы имеете возможность обращаться за дополнительной помощью, запрашивать внесение изменений в интерфейс сайта, и прочее.</p>
            </article>
            <article className="about_m_h_m">
                <h2 className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5" style={{ justifyContent: "center" }} id="skills">Навыки<img style={{ marginInline: 5 }}
                    width='20' src='https://em-content.zobj.net/thumbs/72/apple/354/check-mark-button_2705.png' />
                </h2><br /><p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1.5s">
                    За время своей работы я имел опыт программирования на разных языках и применения разных фреймворков. Среди них я смело могу выделить основные:
                </p>
                <div>
                    <ul className="wk4e">
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>React.js</p><img width='60' style={{ margin: 5 }} src={react} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>Node.js</p><img width='60' style={{ margin: 5 }} src={node} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>PHP</p><img width='60' style={{ margin: 5 }} src={php} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>JQuery</p><img width='60' style={{ margin: 5 }} src={jquery} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>MYSQL</p><img width='60' style={{ margin: 5 }} src={mysql} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>Bootstrap.css</p><img width='60' style={{ margin: 5 }} src={bootstrap} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>Tailwind.css</p><img width='60' style={{ margin: 5 }} src={tw} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>HTML5</p><img width='40' style={{ margin: 5 }} src={html} /></li>
                        <li className="fl alc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s"><p>CSS</p><img width='50' style={{ margin: 5 }} src={css} /></li>
                    </ul>
                </div>
            </article>
        </section>
        <section className="calc_par" id="calculator">
            <h1 className="wow fadeInUp" style={{ fontSize: '2.5rem' }} data-wow-duration="1s" data-wow-delay="1.1s">Калькулятор</h1>
            <h4 className="wow fadeInUp" style={{ fontSize: '1.3rem', marginBottom: 45 }} data-wow-duration="1s" data-wow-delay="1.3s">Расчет стоимости сайта</h4>
            <article className="calc wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">
                <div>
                    <input type="number" onChange={(e) => setLCount(e.target.value.replace(/[^0-9]/, ''))} value={LCount} placeholder="Количество лэндингов" />
                    <p className="psev__">Лэндинг - развернутая версия обычной страницы. Включает в себя больше контента, стилей, динамических структур.</p>
                    <input onChange={(e) => setPCount(e.target.value.replace(/[^0-9]/, ''))} value={PCount} placeholder="Количество страниц" />
                    <p className="psev__">Страница подразумевает обычный 3-х секционный шаблон.</p>
                    <span className='fl alc' style={{ marginBlock: 5 }}><input type="checkbox" id="check_des" onChange={() => setDesign(!isDesign)} checked={isDesign} className="css-checkbox" /><label for='check_des' style={{ color: "white", fontSize: '.9rem' }}>Необходим дизайн</label></span>
                    <span className='fl alc' style={{ marginBlock: 5 }}><input type="checkbox" id="check_bek" onChange={() => setBackend(!isBackend)} checked={isBackend} className="css-checkbox" /><label for='check_bek' style={{ color: "white", fontSize: '.9rem' }}>Необходим бек-енд</label></span>
                </div>
                <h3 style={{ textAlign: "right" }}>Предварительная стоимость: {globalPrice}</h3>
                <h3 style={{ textAlign: "right" }}>Длительность работ: ~{durance} дня(-ей)</h3>
            </article>
        </section>
        <section id="feedback">
            <div ref={myRefN} className="feedback_bottom_s"></div>
            <h1 className="wow fadeInUp" style={{ fontSize: '2.5rem', position: "relative", textAlign: "center" }}>Обратная связь</h1>
            <article className="feedback_W wow fadeInUp">
                <h4 style={{ fontSize: '1.3rem', marginBottom: 20 }} data-wow-duration="1s" data-wow-delay="1.3s">Задайте вопросы, оставьте заявку</h4>
                <input onChange={e => setName(e.target.value)} value={name} placeholder="Ваше Имя" />
                <input onChange={e => setTel(e.target.value)} value={tel} placeholder="Ваш Телефон" />
                <input onChange={e => setEmail(e.target.value)} value={email} placeholder="Ваш E-mail" />
                <textarea onChange={e => setDesc(e.target.value)} value={desc} rows='5' className="input" placeholder="Дополнительные данные"></textarea>
                <button onClick={() => {
                    axios.get(`https://mxmr.ru/server/feedback.php?name=${name}&tel=${tel}&email=${email}&about=${desc}`)
                    .then(res => {
                        if (res.data.ok) alert('Спасибо за обращение! Я скоро свяжусь с Вами!')
                        else alert('Упс... Произошла ошибка')
                    })
                }} style={{ marginBlock: 10 }}>Отправить</button>
            </article>
            <div className="fl alc bot_soc" style={{ position: "relative", justifyContent: "center" }}>
                <a href="https://t.me/mxmrykov" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.1s"><img src={tg} style={{ marginInline: 5 }} width='40' /></a>
                <a href="https://vk.com/mxmrykov" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.3s"><img src={vk} style={{ marginInline: 5 }} width='40' /></a>
                <a href="https://instagram.com/mxmrykov?igshid=OGQ5ZDc2ODk2ZA==" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.5s"><img src={inst} style={{ marginInline: 5 }} width='40' /></a>
                <a href="https://discordapp.com/users/570258958258929671/" className="wow fadeInUp animfu" data-wow-duration="1s" data-wow-delay="1.7s"><img src={ds} style={{ marginInline: 5 }} width='40' /></a>
            </div>
        </section>
    </div>
}
import React from "react";
import {Link} from "react-router-dom";
import './User.scss';

const User = () => {
    return (
        <div className="user-cab">
            <div className="card">
                <div className="avatar">
                    <img src={process.env.PUBLIC_URL + "/avatar.png"} alt=""/>
                </div>
                <div className="nik">
                    Незнайка на Луне
                </div>
                <div className="info">
                    <div className="status">
                        <div>Статус</div>
                        <div className="bold">Начинающий</div>
                    </div>
                    <div className="complited">
                        <div>Выполнено</div>
                        <div className="bold">45 %</div>
                    </div>
                </div>
                <div className="progress">
                    <svg width="284" height="16" viewBox="0 0 284 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="6" width="284" height="4" rx="2" fill="#B8BDCE"/>
                        <rect y="6" width="128" height="4" rx="2" fill="#0057B6"/>
                        <circle r="8" transform="matrix(-1 0 0 1 134 8)" fill="#0057B6"/>
                    </svg>
                </div>
                <div className="condition">
                    <Link to={'/'}>Условия для следующего уровня
                        <span>
                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10L7 5.5L1 1" stroke="#0057B6"/>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="tabs">
                <div className="tabs_container">
                    <div className="head">
                        <div className="tab">Мои проекты (3)</div>
                        <div className="tab">Мои голоса (18)</div>
                        <div className="tab">Проекты в работе (1)</div>
                    </div>
                    <div className="line">
                        <svg width="100%" height="4" viewBox="0 0 1023 4" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect x="12" width="1001" height="4" rx="2" fill="#B8BDCE"/>
                            <rect width="240" height="4" rx="2" fill="#0057B6"/>
                        </svg>
                    </div>
                    <div className="projects">
                        <div className="item">
                            <div className="theme">
                                <span>Тема</span>
                            </div>
                            <div className="text">
                                Подготовка команды для участия в летней спартакиаде ПАО “Газпром”
                            </div>
                            <button className="item-btn">Подробнее</button>
                        </div>
                        <div className="item">
                            <div className="theme">
                                <span>Тема</span>
                            </div>
                            <div className="text">
                                Разработка и внедрение программы адаптации новых сотрудников на “удаленке” в период
                                режима
                                самоизоляции
                            </div>
                            <button className="item-btn">Подробнее</button>
                        </div>
                        <div className="item">
                            <div className="theme">
                                <span>Тема</span>
                            </div>
                            <div className="text">
                                Обучение по теме "Обновление законодательства в банковском деле в 2020 году"
                            </div>
                            <button className="item-btn">Подробнее</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="points-card">
                <div className="balance">
                    Баланс
                </div>
                <div className="num">
                    <span>790</span>
                    <div className="valute">Gazcoin</div>
                </div>
                <Link to="/">Обменять Gazcoin
                    <span>
                        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10L7 5.5L1 1" stroke="#7C8793" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default User;

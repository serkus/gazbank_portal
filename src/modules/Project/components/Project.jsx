// import {Link} from "react-router-dom";
import React from "react";
import './Project.scss';
import {Input} from 'antd';

const {TextArea} = Input;

const Project = () => {
    // console.log(params);
    return (
        <div className="project">
            <h3>Проект</h3>
            <div className="top">
                <div className="project-card">
                    <div className="photo">
                        <img src={process.env.PUBLIC_URL + "/man.png"} alt=""/>
                    </div>
                    <div className="info">
                        <div className="theme">
                            Тема
                        </div>
                        <div className="info-text">
                            Подготовка команды для участия в летней спартакиаде ПАО “Газпром”
                        </div>
                    </div>
                    <button className="vote">Проголосовать за проект</button>
                    <div className="points">
                        <span>+ 80 Gazcoin</span>
                    </div>
                </div>
                <div className="project-info">
                    <div className="description">
                        <div className="description-title">
                            Подготовка команды для участия в летней спартакиаде ПАО “Газпром”
                        </div>
                        <div className="text">
                            <p>Спартакиаду дочерних компаний “Газпрома” можно назвать уникальной. Соревнования проходят
                                на
                                легендарных спортивных площадках: “Адлер-Арена”, СК “Юность”, “Ледяной куб” и ГТЦ ПАО
                                “Газпром”.
                            </p>
                            <p>По традиции в главном корпоративном состязании примут участие спортсмены, показавшие
                                лучшие
                                результаты на региональных отборочных турах, всего около двух с половиной тысяч человек:
                                28
                                взрослых и 14 детских команд из России и Беларуси. Будет разыграно 180 комплектов
                                наград, из
                                них в командном первенстве — 23, в личном — 157.
                            </p>
                            <p>Взрослые будут бороться за победу в шести видах спорта: волейбол, гиревой спорт, легкая
                                атлетика, плавание, шахматы и футбол. Дети — в четырех: легкая атлетика, шахматы,
                                плавание и
                                футбол. Впервые в рамках Спартакиады “Газпрома” состоится выполнение нормативов

                                Всероссийского физкультурно-спортивного комплекса “Готов к труду и обороне”.
                            </p>
                            <p>Есть предложение собрать команду спортсменов из сотрудников Газпромбанка для участия в
                                летней спартакиаде.</p>
                        </div>
                        <div className="author">
                            Автор
                            <div className="username">Незнайка на луне</div>
                        </div>
                    </div>

                    <div className="comments-form">
                        <div className="title">Оставить комментарий</div>
                        <TextArea rows={6}/>
                        <button className="comment-btn">Прокомментировать</button>
                    </div>
                </div>
            </div>
            <h3>Другие проекты</h3>
            <div className="middle">
                <div className="project-cards">
                    <div className="project-card">
                        <div className="photo">
                            <img src={process.env.PUBLIC_URL + "/recycle.png"} alt=""/>
                        </div>
                        <div className="info">
                            <div className="theme">
                                Тема
                            </div>
                            <div className="info-text">
                                Участие сотрудников в программе экоофис (раздельный сбор отходов
                            </div>
                        </div>
                        <button className="vote">Проголосовать за проект</button>
                        <div className="points">
                            <span>+ 80 Gazcoin</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="photo">
                            <img src={process.env.PUBLIC_URL + "/children.png"} alt=""/>
                        </div>
                        <div className="info">
                            <div className="theme">
                                Тема
                            </div>
                            <div className="info-text">
                                Сбор средств для покупки игрушек детям из дома малютки (к дню защиты детей)
                            </div>
                        </div>
                        <button className="vote">Проголосовать за проект</button>
                        <div className="points">
                            <span>+ 80 Gazcoin</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="photo">
                            <img src={process.env.PUBLIC_URL + "/fanny_man.png"} alt=""/>
                        </div>
                        <div className="info">
                            <div className="theme">
                                Тема
                            </div>
                            <div className="info-text">
                                Проведение вебинара
                                “Как компании повысить клиентоориентированность”
                            </div>
                        </div>
                        <button className="vote">Проголосовать за проект</button>
                        <div className="points">
                            <span>+ 80 Gazcoin</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="photo">
                            <img src={process.env.PUBLIC_URL + "/petrol.png"} alt=""/>
                        </div>
                        <div className="info">
                            <div className="theme">
                                Тема
                            </div>
                            <div className="info-text">
                                Подготовка корпоратива к Дню работников нефтяной и газовой промышленности
                            </div>
                        </div>
                        <button className="vote">Проголосовать за проект</button>
                        <div className="points">
                            <span>+ 80 Gazcoin</span>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Топ наших лучших экспертов</h3>
            <div className="bottom">
                <div className="persons">
                    <div className="first">
                        <svg width="270" height="271" viewBox="0 0 270 271" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="39" y="40" width="192"
                                  height="191">
                                <path
                                    d="M202.5 202.948C239.779 165.75 239.779 105.439 202.5 68.24C165.221 31.0413 104.779 31.0413 67.5 68.24C30.2208 105.439 30.2208 165.75 67.5 202.948C104.779 240.147 165.221 240.147 202.5 202.948Z"
                                    fill="#50B4DE"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path
                                    d="M202.5 202.948C239.779 165.75 239.779 105.439 202.5 68.24C165.221 31.0413 104.779 31.0413 67.5 68.24C30.2208 105.439 30.2208 165.75 67.5 202.948C104.779 240.147 165.221 240.147 202.5 202.948Z"
                                    fill="#E1F5E5"/>
                                <path
                                    d="M169.271 136.417C169.271 136.417 171.701 89.2449 133.335 89.4469C95.0695 89.2449 97.3978 136.417 97.3978 136.417C92.9437 136.215 88.0846 136.013 89.0969 148.034C90.1092 160.054 101.245 161.165 101.245 161.165C101.953 173.287 109.647 185.105 115.417 190.156C121.187 195.206 133.335 195.206 133.335 195.206C133.335 195.206 145.482 195.206 151.252 190.156C157.023 185.105 164.716 173.287 165.425 161.165C165.425 161.165 176.56 160.054 177.572 148.034C178.585 136.013 173.726 136.215 169.271 136.417Z"
                                    fill="#F2C4AE"/>
                                <path
                                    d="M183.038 102.579C183.038 87.4268 170.486 80.558 166.032 78.5377C165.627 78.3357 165.728 77.7296 166.234 77.7296C169.271 77.5276 171.498 78.0327 171.498 78.0327C159.755 69.7497 142.749 70.8608 135.966 71.6689C135.156 71.7699 134.853 70.6588 135.46 70.2547C140.42 67.2244 147.304 66.1133 147.304 66.1133C117.947 66.6183 105.698 78.8407 102.256 83.1842C101.953 83.5883 101.345 83.2853 101.447 82.7802C102.459 77.9317 106.407 72.275 106.407 72.275C94.8666 78.0327 94.158 89.2449 94.4616 94.5986C90.5137 97.932 85.4521 104.498 86.9706 114.599C90.21 138.034 92.1334 137.226 92.1334 137.226C92.1334 137.226 97.701 136.215 98.4097 146.519C98.4097 146.519 99.2195 123.69 100.029 120.458C105.395 114.094 109.646 103.185 109.646 103.185C109.646 103.185 148.924 91.2652 162.286 113.387C167.348 121.872 166.032 143.993 166.032 143.993C166.032 143.993 167.854 135.912 173.016 136.518C173.016 136.518 176.155 120.761 176.458 108.74C178.787 111.165 179.09 113.286 179.09 113.286C180.811 106.215 179.293 100.255 178.483 97.6289C178.382 97.3259 178.787 97.0229 179.09 97.3259C180.609 99.3461 183.038 102.579 183.038 102.579Z"
                                    fill="#864242"/>
                                <path d="M114.91 201.469H112.38L114.708 203.59L114.91 201.469Z" fill="#CED0D1"/>
                                <path
                                    d="M210.37 221.772L165.12 208.843L146.797 236.52L136.067 223.085L135.865 223.186L135.561 222.984L135.662 223.085L124.932 236.52L106.811 209.247L61.359 221.772C61.359 221.772 53.3618 229.752 42.6313 249.045H136.067H229.098C218.367 229.752 210.37 221.772 210.37 221.772Z"
                                    fill="#00ABEC"/>
                                <path
                                    d="M152.163 189.348C151.859 189.651 151.556 189.853 151.353 190.156C151.556 189.954 151.859 189.651 152.163 189.348Z"
                                    fill="#EDC0AA"/>
                                <path d="M116.125 190.661L115.923 192.277L116.125 190.661Z" fill="#EDC0AA"/>
                                <path
                                    d="M155.706 193.186L154.795 186.519C153.884 187.529 153.074 188.539 152.163 189.347C152.973 188.539 153.884 187.63 154.795 186.519L155.706 193.186Z"
                                    fill="#EDC0AA"/>
                                <path
                                    d="M135.561 222.985L135.865 223.187L136.067 223.086L157.022 203.59L156.718 201.469L155.605 193.287C152.973 196.722 140.42 203.691 135.055 203.792C129.892 203.893 116.53 194.802 115.619 194.196L114.809 201.469L114.606 203.691L135.561 222.985Z"
                                    fill="#EDC0AA"/>
                                <path
                                    d="M135.663 223.086L135.562 222.985L114.708 203.59L112.38 201.469L106.61 208.843L106.913 209.247L124.932 236.52L135.663 223.086Z"
                                    fill="#EFEFF0"/>
                                <path
                                    d="M157.123 203.792L157.022 203.59L136.067 223.086L146.798 236.52L165.12 208.944V208.843L159.451 201.469L157.123 203.792Z"
                                    fill="#EFEFF0"/>
                                <path d="M157.123 203.792L159.452 201.469H156.82L157.022 203.59L157.123 203.792Z"
                                      fill="#CED0D1"/>
                                <path
                                    d="M135.156 203.793C140.521 203.692 153.074 196.722 155.706 193.287L154.795 186.621C153.884 187.631 153.074 188.641 152.163 189.449C151.859 189.752 151.556 189.954 151.353 190.257C145.583 195.308 133.435 195.308 133.435 195.308C133.435 195.308 122.097 195.308 116.226 190.762L116.024 192.378L115.72 194.196C115.72 194.196 115.72 194.196 115.821 194.196C116.631 194.803 129.993 203.793 135.156 203.793Z"
                                    fill="#E0A489"/>
                            </g>
                        </svg>
                    </div>

                    <div className="leader">
                        <img src={process.env.PUBLIC_URL + "/Alephtina.png"} alt=""/>
                        <div className="name">
                            Алефтина Петрова
                        </div>
                        <div className="user-wrapper">
                            <div className="user-projects">
                                <div>29</div>
                                <span>предложенных<br/>проектов</span>
                            </div>
                            <div className="user-votes">
                                <div>157</div>
                                <span>отданных<br/>голосов</span>
                            </div>
                        </div>

                    </div>
                    <div className="last">
                        <svg width="270" height="271" viewBox="0 0 270 271" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="39" y="40" width="192"
                                  height="191">
                                <path
                                    d="M202.5 202.947C239.779 165.748 239.779 105.437 202.5 68.2381C165.221 31.0394 104.779 31.0394 67.5 68.2381C30.2208 105.437 30.2208 165.748 67.5 202.947C104.779 240.145 165.221 240.145 202.5 202.947Z"
                                    fill="#50B4DE"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path
                                    d="M202.5 202.947C239.779 165.748 239.779 105.437 202.5 68.2381C165.221 31.0394 104.779 31.0394 67.5 68.2381C30.2208 105.437 30.2208 165.748 67.5 202.947C104.779 240.145 165.221 240.145 202.5 202.947Z"
                                    fill="#F5984E"/>
                                <path
                                    d="M174.525 140.172C174.525 140.374 174.525 140.476 174.525 140.678C173.108 141.991 171.59 145.021 170.476 146.637C171.387 141.183 172.501 135.425 170.679 127.243C170.476 126.637 170.274 126.031 170.071 125.324C168.047 120.273 163.188 119.061 157.924 117.344C150.736 115.021 143.346 116.738 136.159 114.92C131.705 113.808 128.162 109.768 123.607 109.465C102.956 108.051 99.1088 130.374 101.64 146.536C100.121 144.617 98.8051 142.496 97.5903 140.374C93.0349 137.95 87.8722 141.89 88.7832 148.657C90.9091 164.314 98.7038 161.587 98.7038 161.587C112.167 195.224 135.855 195.123 135.855 195.123C135.855 195.123 159.442 195.325 173.007 161.587C173.007 161.587 180.903 164.314 182.928 148.657C183.839 142.092 179.081 138.253 174.525 140.172Z"
                                    fill="#FFC7AD"/>
                                <path d="M176.55 112.899C177.36 118.657 175.841 108.152 176.55 112.899V112.899Z"
                                      fill="#864242"/>
                                <path
                                    d="M123.607 109.566C128.061 109.869 131.604 113.808 136.159 115.02C143.347 116.839 150.737 115.121 157.924 117.445C163.188 119.162 168.047 120.374 170.072 125.425C170.274 125.93 170.477 126.536 170.679 127.243V127.344C172.501 135.526 171.489 141.283 170.477 146.738C171.59 145.122 173.109 142.192 174.526 140.778C174.526 140.576 174.526 140.475 174.526 140.273C175.336 130.475 178.069 123.505 176.449 113C174.526 99.6665 169.464 91.4845 157.114 85.8279C157.721 72.2923 142.537 64.1103 130.49 66.5346C123.404 67.9488 119.254 72.1913 115.306 77.7469C112.471 81.7874 112.775 82.1915 109.333 85.2218C106.701 87.4441 103.664 88.8582 101.134 91.4845C87.9737 105.525 88.7835 125.121 97.4893 140.475C98.7041 142.597 100.02 144.718 101.539 146.637C99.109 130.475 102.956 108.151 123.607 109.566Z"
                                    fill="#864242"/>
                                <path
                                    d="M144.562 219.669L138.994 223.81L141.423 253.609H194.569C194.569 253.609 188.091 218.659 182.219 214.719C179.284 212.8 166.225 209.467 154.685 206.84L148.408 223.911L144.562 219.669Z"
                                    fill="#F35B74"/>
                                <path
                                    d="M127.15 219.669L123.303 223.81L117.027 206.638C105.385 209.264 92.1239 212.699 89.0869 214.618C83.1143 218.558 76.7368 253.508 76.7368 253.508H130.49L132.819 223.709L127.15 219.669Z"
                                    fill="#F35B74"/>
                                <path
                                    d="M135.855 210.173L146.485 199.567V192.496C140.31 195.223 135.855 195.223 135.855 195.223C135.855 195.223 131.199 195.223 124.821 192.294L124.619 199.365L135.855 210.173Z"
                                    fill="#F0BBA3"/>
                                <path
                                    d="M138.993 223.81L144.561 219.668L135.855 210.173L127.149 219.668L132.717 223.81L130.389 253.608H141.322L138.993 223.81ZM135.855 223.305C135.855 223.305 135.956 223.305 136.058 223.305C135.956 223.305 135.855 223.305 135.855 223.305Z"
                                    fill="#26A7DE"/>
                                <path
                                    d="M127.15 219.668L135.855 210.173L124.619 199.365L116.925 206.537L117.027 206.638L123.303 223.81L127.15 219.668Z"
                                    fill="white"/>
                                <path
                                    d="M135.855 210.173L144.561 219.668L148.408 223.81L154.684 206.739V206.537L146.485 199.567L135.855 210.173Z"
                                    fill="white"/>
                                <path
                                    d="M145.877 139.667C142.334 141.283 138.588 144.112 136.159 144.112C133.729 144.112 129.68 141.182 126.238 139.667C121.885 137.647 108.32 134.617 98.8047 138.354C98.8047 139.162 98.8047 139.97 98.8047 140.778C98.8047 140.778 100.627 141.384 101.032 144.213C101.538 147.041 101.943 151.587 103.259 154.516C104.676 157.546 105.992 159.87 113.483 161.284C120.974 162.698 124.821 160.981 127.858 157.647C130.895 154.213 133.021 149.263 133.83 148.455C134.64 147.647 135.248 147.243 136.26 147.243C137.171 147.243 137.88 147.546 138.689 148.455C139.499 149.263 141.625 154.213 144.662 157.647C147.699 161.082 151.444 162.799 158.936 161.284C166.427 159.87 167.743 157.546 169.059 154.516C170.375 151.587 170.577 147.041 171.083 144.213C171.589 141.384 173.007 140.778 173.007 140.778C173.007 139.97 173.007 139.162 173.007 138.354C164.503 134.617 150.23 137.647 145.877 139.667ZM129.073 153.001C127.858 155.223 125.428 159.567 120.974 160.274C116.115 160.981 111.458 159.87 108.017 158.051C104.676 156.233 104.17 152.698 103.664 149.768C103.158 146.839 103.158 141.081 104.777 139.768C106.397 138.455 112.876 138.556 116.925 139.061C120.67 139.465 126.947 140.98 129.781 144.112C132.616 147.243 130.085 151.284 129.073 153.001ZM168.654 149.768C168.148 152.698 167.641 156.233 164.301 158.051C160.96 159.87 156.202 160.981 151.343 160.274C146.889 159.567 144.561 155.223 143.245 153.001C142.233 151.284 139.601 147.243 142.435 144.112C145.269 140.98 151.647 139.465 155.291 139.061C159.34 138.657 165.819 138.455 167.439 139.768C169.16 141.081 169.16 146.839 168.654 149.768Z"
                                    fill="#323232"/>
                                <path
                                    d="M174.222 187.951C170.274 183.304 168.249 178.052 167.439 172.9C163.289 179.769 158.733 184.516 154.381 187.85C172.703 208.557 148.61 253.608 148.61 253.608C148.61 253.608 165.01 253.608 184.243 253.608C188.799 238.457 189.204 205.527 174.222 187.951Z"
                                    fill="#864242"/>
                            </g>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project;
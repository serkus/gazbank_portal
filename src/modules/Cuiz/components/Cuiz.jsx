import React from "react";
import './Cuiz.scss';


const Cuiz = () => {


    return (
        <section className="questions">
            <div className="container">
                <div className="head">
                    <ul className="question-line">
                        <li className="question-item active">1</li>
                        <li className="question-item">2</li>
                        <li className="question-item">3</li>
                        <li className="question-item">4</li>
                        <li className="question-item">5</li>
                        <li className="question-item">6</li>
                    </ul>
                </div>
                <div className="question-text">
                    <h1>При каком уровне дохода на одного члена семьи в месяц нужно начинать планирование семейного
                        бюджета?</h1>
                </div>
                <div className="variants">
                    <div className="answer">
                        <input className="custom-checkbox" type="checkbox"/>
                        <label htmlFor="checkbox">

                            от 7000 до 15000 рублей;
                        </label>
                        {/*<Checkbox className="checkbox" onChange={onChange}>от 7000 до 15000 рублей;</Checkbox>*/}
                    </div>
                    <div className="answer">
                        <input className="custom-checkbox" type="checkbox"/>
                        <label htmlFor="checkbox">

                            от 15000 до 30000 рублей;
                        </label>
                        {/*<Checkbox className="checkbox" onChange={onChange}>от 15000 до 30000 рублей;</Checkbox>*/}
                    </div>
                    <div className="answer">
                        <input className="custom-checkbox" type="checkbox"/>
                        <label htmlFor="checkbox">

                            от 30000 до 100000 рублей;
                        </label>
                        {/*<Checkbox className="checkbox" onChange={onChange}>от 30000 до 100000 рублей;</Checkbox>*/}
                    </div>
                    <div className="answer">
                        <input className="custom-checkbox" type="checkbox"/>
                        <label htmlFor="checkbox">
                            независимо от уровня дохода.
                        </label>
                        {/*<Checkbox className="checkbox" onChange={onChange}>независимо от уровня дохода.</Checkbox>*/}
                    </div>
                </div>
                <div className="submit">
                    <button className="sub-btn">Следующий вопрос</button>
                </div>
            </div>
        </section>
    )
}
export default Cuiz;


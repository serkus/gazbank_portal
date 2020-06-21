import {Link} from "react-router-dom";
import React from "react";


const Interview = () => {
    return (
        <section className="content">
            <div className="interview">
                <div className="text">
                    Пройди опрос и получи 150 Gazcoin на счет
                </div>
                <Link className="interview-btn" to={'/home/cuiz'}>Пройти опрос</Link>
            </div>
        </section>
    )
}

export default Interview;

//@flow

import React from 'react'
import {
    best_phone_part,
    text,
    description,
    input,
    button_try_now,
    for_example,
    photos,
    photo,
    cards,
    background,
    mocup,
    best_inner
} from './styles/bestPhone.module.scss'
import './styles/bestPhonestyles.scss'
import {
    OBJ_PHONE,
    PATTERN,
    PHONE1,
    PHONE2,
    PHONE3,
    PHONE4
} from 'common/images'


const BestPhone = () => {
    setInterval(function () {
        var phones = document.getElementsByClassName("object_phone");
        if (phones.length > 0) {
            var activeImage = 0;
            for (var i = 0; i < phones.length; i++) {
                if (phones[i].classList.contains('active')) {
                    phones[i].classList.remove("active");
                    activeImage = (i + 1) % 4;
                    // console.log(activeImage);
                }
            }

            phones[activeImage].classList.add("active");
        }

    }, 500)
    return (
        <div className={best_phone_part}>
            <div className={best_inner}>
                <div className={text}>
                    <p>The Fastest Way to Compare Devices</p>
                    <div className={description}>
                    Stop wondering “which phone model is better” and put TechSpecs VS tool to work for you. In seconds, our powerful comparison tool can generate standardized, accurate tech specs for thousands of popular devices.  
                    </div>
                    <div className={input}>
                        <input type="text" defaultValue="" placeholder="Enter a device name"></input>
                        <div className={for_example}><span>For example:</span> iPhone X, iPhone XS, iPad, Note 10</div>
                        <div className={button_try_now}>Try it Now</div>
                    </div>
                </div>
                <div className={photos}>
                    <img className={["object_phone", "active"].join(" ")} src={PHONE1} />
                    <img className="object_phone" src={PHONE2} />
                    <img className="object_phone" src={PHONE3} />
                    <img className="object_phone" src={PHONE4} />

                </div>
            </div>

        </div>
    )
}

export default BestPhone

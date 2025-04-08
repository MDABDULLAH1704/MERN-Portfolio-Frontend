import React from 'react'
import './ExperiencePage.css'
import Component1 from '../../component1/Component1'
import Component2 from '../../component2/Component2'
import Experience100 from '../../../assets/experience100.png'
import Experience99 from '../../../assets/experience99.png'
import EdgeX_Contest_Certificate from '../../../assets/EdgeX_Contest_Certificate.png'
import Paranox_Contest_Certificate from '../../../assets/Paranox_Contest_Certificate.png'

const ExperiencePage = () => {
    return (
        <div className='experiencePage'>
            <Component1
                image={Experience99}
                title='AzionXSourcify'
                detailOne={
                    <span>
                        I participated in the <strong>EdgeX Contest</strong> organized by <strong>Azion</strong> and <strong>Sourcify</strong>, which took place from November 17th to November 30th, 2024. I'm excited to share that I <strong>ranked 5th</strong> in the contest.
                    </span>
                }
                detailTwo={
                    <span>
                        During the contest, I developed a responsive <strong>eCommerce site</strong> featuring shopping, learning courses, and a cart. The site features a dynamic home screen where the color changes continuously for an engaging user experience.
                    </span>
                }
                ViewCertificate='Click here to View the Certificate'
                certificate={EdgeX_Contest_Certificate}
                link1='https://jg54v54eip.map.azionedge.net/'
                linkText1='Visit AzionXSourcify , Link :- https://jg54v54eip.map.azionedge.net/'
            />

            <Component2
                image={Experience100}
                title='Fitness GYM'
                detailOne={
                    <span>
                        I took part in the <strong>Paranox Contest</strong> organized by <strong>TechXNinjas</strong> and <strong>Azion</strong> from October 24th to October 31st, 2024. During the contest, I developed a responsive ReactJS landing page for a fitness gym and secured <strong>13th position</strong>.
                    </span>
                }
                detailTwo='I optimized the site with smooth animations and dynamic components for improved performance and responsiveness across devices. The result is a sleek, functional, and interactive page that effectively showcases the gym services.'
                ViewCertificate='Click here to View the Certificate'
                certificate={Paranox_Contest_Certificate}
                link1='https://yh845byydf.map.azionedge.net/'
                linkText1='Visit Fitness GYM , Link :- https://yh845byydf.map.azionedge.net/'
            />
        </div>
    )
}

export default ExperiencePage

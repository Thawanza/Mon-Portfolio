import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
function About() {
    return (
        <div id='à propos de moi' className='about'>
            <div className="about-title">
                <h1>About Me</h1>

            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Bonjour, je suis Thawanza Boulanouar, une développeuse Full Stack passionnée, spécialisée dans la création d’applications web et mobiles modernes et évolutives.
                            Je travaille avec des technologies telles que React, React Native, Node.js, Express, et MongoDB pour concevoir des solutions propres, efficaces et conviviales.

                        </p>
                        <p>


                            Forte d’une expérience à la fois en frontend et en backend, j’aime résoudre des problèmes concrets grâce au code et donner vie aux idées.
                            Je suis toujours motivée à apprendre, collaborer et évoluer dans ce monde technologique en constante évolution.
                        </p>
                    </div>
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <p>Langues</p>
                            <hr style={{ width: "37%" }} />
                            <li>Francais</li>
                            <li>Anglais</li>
                            <li>Arabe</li>
                            <li>Kabyle</li>

                        </div>
                        <div className="about-achievement">
                            <p>Education</p>
                            <hr style={{ width: "43%" }} />
                            <li>Master’s Degree in Software Engineering</li>
                            <h6>University of Béjaïa</h6>
                            <h6>2023 - 2025</h6>
                        </div>
                        <div className="about-achievement">
                            <p className="section-title">Trainings & Courses</p>
                            <hr style={{ width: "76%" }} />
                            <ul className="courses-list">
                                <li>Développeur Application Android (École Amis de Java)</li>
                                <li>Développeur Java (École Java)</li>
                                <li>Apprenez à programmer avec JavaScript (OpenClassrooms)</li>
                                <li>Passez au Full Stack avec Node.js, Express et MongoDB (OpenClassrooms)</li>
                            </ul>
                        </div>




                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
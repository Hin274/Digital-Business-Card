import React from "react"

export default function Info() {
    return (
        <header>
            <div className="container-grid">
                <img src="./images/Profile-Picture.jpg" className="info--pic" />
                <div>
                    <h1 className="heading">Chong Hin Yu</h1>
                    <h3 className="sub-heading">Junior Frontend Developer</h3>
                    <h4><a href="https://github.com/Hin274">https://github.com/Hin274</a></h4>
                </div>
                <div className="container-flex">
                    <button onclick="location.href='mailto:';">
                        <i className="fa-solid fa-envelope"></i>Email
                    </button>
                    <button onclick="window.open('https://www.linkedin.com/in/chong-hin-yu-152912229','blank')" type="button" className="button--blue">
                        <i className="fa-brands fa-linkedin"></i>LinkedIn
                    </button>
                </div>
            </div>
        </header>
    )
}
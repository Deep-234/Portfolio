import prof from '../img/profile.jpg';
const about = ()=>{
    return (
        <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src= {prof} alt=""/>
                </div>
                <div className="column right">
                    <div className="text">I'm Deep and I'm a <span className="typing-2"></span></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quisquam odio alias beatae in
                        illum reiciendis ipsa molestias! Quibusdam unde omnis obcaecati saepe reprehenderit praesentium
                        veniam odit excepturi reiciendis similique?</p>
                    <a href="cv-link" target="_blank">Open CV</a>
                </div>
            </div>
        </div>
    </section>
    );
}
export default about;
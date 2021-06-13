const contacts = ()=> {
    return (
        <section className ="contact" id="contact">
        <div className ="max-width">
            <h2 className ="title">Contact me</h2>
            <div className ="contact-content">
                <div className ="column left">
                    <div className ="icons">
                        <div className ="row">
                            <i className ="fas fa-user"></i>
                            <div className ="info">
                                <div className ="head">Name</div>
                                <div className ="sub-title">Deep Chaudhary</div>
                            </div>
                        </div>
                        <div className ="row">
                            <i className ="fas fa-map-marker-alt"></i>
                            <div className ="info">
                                <div className ="head">Home</div>
                                <div className ="sub-title">Etawah</div>
                            </div>
                        </div>
                        <div className ="row">
                            <i className ="fas fa-envelope"></i>
                            <div className ="info">
                                <div className ="head">E-mail</div>
                                <div className ="sub-title">chaudharydeep118@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className ="column right">
                    <div className ="text">
                        <q>Your Favouarite Quote <br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
                            cumque tempore consectetur.</q>
                        <br/>
                    </div>
                    <cite>-Deep Chaudhary</cite>
                </div>
            </div>
        </div>
    </section>

    );
} 
export default contacts;
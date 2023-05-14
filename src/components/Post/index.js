import React, { Component } from "react";
import "./Post.css";

class Post extends Component {

    render() {

        return <article className="Post" ref="Post">

            <header>

                <div className="Post-user">

                    <div className="Post-user-profilepicture" href="#"> <img src="https://xmag.live/wp-content/uploads/2022/04/blackpink-jennie-rose-lisa-jisoo-album-comeback-kpop-rumor-info-1.jpeg"alt='Textp'/>

                    </div>

                    <div className="Post-user-nickname">

                        <span>_Saddairj_</span>

                    </div>

                </div>

            </header>

            <div className="Post-image">

                <div className="Post-image-bg">



                </div>

            </div>

            <div className="Post-caption">

                <p>Correo: Zuleyma.juarez_2002@hotmail.com</p>
                <p>Matrícula: S20006762</p>
                <p>Ingeníeria de Software</p>

            </div>

        </article>;

    }

}

export default Post;
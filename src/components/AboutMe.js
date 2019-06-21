import React from 'react';
import {Header, Icon, Image} from "semantic-ui-react";
import MySQLLogo from '../img/MySQLLogo.png';
import GitLogo from '../img/GitLogo.png';
import JavaLogo from '../img/JavaLogo.png';
import JavaScriptLogo from '../img/JavaScriptLogo.png';
import MongoDBLogo from '../img/MongoDBLogo.png';
import NodeJSLogo from '../img/NodeJSLogo.png';
import NPMLogo from '../img/NPMLogo.png';
import ReactLogo from '../img/ReactLogo.png';
import SpringBootLogo from '../img/SpringBootLogo.png';
import classNames from 'classnames';

class AboutMe extends React.Component {

    state = {
        mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };

    render() {

        return (
            <div id={'about-me'} className={classNames('page-section', {'mobile-about-me': this.state.mobile})}>
                <Header className={'page-section-header'} id={'about-me-header'} size={'huge'}>
                    About Me
                </Header>
                <div id={'about-me-subheader'}>
                    <p>
                        I'm Evan - full stack web-developer with a B.Eng in <strong>Software Engineering</strong>.
                    </p>
                    <p>
                        I aim to create engaging, functional and efficient <strong>web applications</strong>.
                    </p>
                    <p>
                        During my free time I work on <strong>personal projects</strong>, watch football and study.
                    </p>
                    <p>
                        Based in
                        <Icon color={'red'} name={'map marker'}/>
                        Paris, France.
                    </p>
                    <p>
                        <strong>
                            <a href="../files/Evan_Bruchet_Resume.docx" download>
                                Download My Resume
                                <Icon name={'download'}/>
                            </a>
                        </strong>
                    </p>
                </div>
                <div id={'about-me-languages-subheader'}>
                    <Image.Group size='tiny'>
                        <Image src={ReactLogo}/>
                        <Image src={NodeJSLogo}/>
                        <Image src={JavaScriptLogo}/>
                        <Image src={MongoDBLogo}/>
                        <Image src={NPMLogo}/>
                        <Image src={GitLogo}/>
                        <Image src={JavaLogo}/>
                        <Image src={SpringBootLogo}/>
                        <Image src={MySQLLogo}/>
                    </Image.Group>
                </div>
            </div>
        );
    }

}

export default AboutMe;
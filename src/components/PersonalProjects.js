import React from 'react';
import {Header, Icon, Image} from "semantic-ui-react";
import ReactLogo from "../img/ReactLogo.png";
import NodeJSLogo from "../img/NodeJSLogo.png";
import JavaScriptLogo from "../img/JavaScriptLogo.png";
import MongoDBLogo from "../img/MongoDBLogo.png";
import NPMLogo from "../img/NPMLogo.png";
import GitLogo from "../img/GitLogo.png";
import classNames from 'classnames';

class PersonalProjects extends React.Component {

    state = {
        mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };

    render() {
        return (
            <div className={'special-page-section'}>
                <div id={'personal-projects-container'}>
                    <div className={'personal-projects-container-row'}>
                        <div id={'plpredictions-image-column'} className={classNames('personal-projects-container-column', {'mobile-plpredictions-image-column': this.state.mobile})}/>
                        <div id={'plpredictions-info-column'}
                             className={classNames('personal-projects-container-column', {
                                 'mobile-info-column': this.state.mobile,
                                 'info-column': !this.state.mobile
                             })}>
                            <Header size={'huge'}>
                                PL Predictions
                                <Header.Subheader>
                                    <p>Personal passion project based on the English Premier League.</p>
                                    <p>Users can earn points from predictions, challenge other users to <strong>prediction
                                        challenges.</strong></p>
                                </Header.Subheader>
                            </Header>
                            <div>
                                <Image.Group size='mini'>
                                    <Image src={ReactLogo}/>
                                    <Image src={NodeJSLogo}/>
                                    <Image src={JavaScriptLogo}/>
                                    <Image src={MongoDBLogo}/>
                                    <Image src={NPMLogo}/>
                                    <Image src={GitLogo}/>
                                </Image.Group>
                            </div>
                            <div>
                                <Icon.Group className={'personal-projects-icon-links'} size={'tiny'}>
                                    <a href={'https://github.com/EBruchet/PLPredictions-JS'}>
                                        <Icon name={'code'}/>
                                        source code
                                    </a>
                                </Icon.Group>
                            </div>
                        </div>
                    </div>
                    <div className={'personal-projects-container-row'}>
                        <div id={'tombot-info-column'}
                             className={classNames('personal-projects-container-column', {
                                 'mobile-info-column': this.state.mobile,
                                 'info-column': !this.state.mobile
                             })}>
                            <Header size={'huge'}>
                                TomBot
                                <Header.Subheader>
                                    <p>Discord Bot inspired by a close friend.</p>
                                    <p>Specializes in <strong>music playback</strong>: song request/queueing, playlist
                                        creation and modification.</p>
                                </Header.Subheader>
                            </Header>
                            <div>
                                <Image.Group size='mini'>
                                    <Image src={NodeJSLogo}/>
                                    <Image src={JavaScriptLogo}/>
                                    <Image src={NPMLogo}/>
                                    <Image src={GitLogo}/>
                                </Image.Group>
                            </div>
                            <div>
                                <Icon.Group className={'personal-projects-icon-links'} size={'tiny'}>
                                    <a href={'https://github.com/EBruchet/TomBot'}>
                                        <Icon name={'code'}/>
                                        source code
                                    </a>

                                </Icon.Group>
                            </div>
                        </div>
                        <div id={'tombot-image-column'} className={classNames('personal-projects-container-column', {'mobile-tombot-image-column': this.state.mobile})}/>
                    </div>
                    <div className={'personal-projects-container-row'}>
                        <div id={'witluv-image-column'}
                             className={classNames('personal-projects-container-column', {'mobile-witluv-image-column': this.state.mobile})}/>
                        <div id={'witluv-info-column'}
                             className={classNames('personal-projects-container-column', {
                                 'mobile-info-column': this.state.mobile,
                                 'info-column': !this.state.mobile
                             })}>
                            <Header size={'huge'}>
                                WitLuv Farms
                                <Header.Subheader>
                                    <p>Website design and implementation for Trinidadian business WitLuvFarms.</p>
                                </Header.Subheader>
                            </Header>
                            <div>
                                <Image.Group size='mini'>
                                    <Image src={JavaScriptLogo}/>
                                    <Image src={GitLogo}/>
                                </Image.Group>
                            </div>
                            <div>
                                <Icon.Group className={'personal-projects-icon-links'} size={'tiny'}>
                                    <a href={'https://github.com/EBruchet/TomBot'}>
                                        <Icon name={'code'}/>
                                        source code
                                    </a>
                                </Icon.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalProjects;
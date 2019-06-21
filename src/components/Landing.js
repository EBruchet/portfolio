import React from 'react';
import {Header, Icon} from "semantic-ui-react";
import classNames from 'classnames';

class Landing extends React.Component {

    state = {
        mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };

    render() {
        return (

            <div className={'page-section'}>
                <div>
                    <Header className={'page-section-header'} size={'huge'} id={'landing-header'}>
                        <Header.Subheader>Hi, I'm</Header.Subheader>
                        Evan Bruchet
                        <Header.Subheader>A full-stack web developer.</Header.Subheader>
                    </Header>

                    <a href={'https://github.com/EBruchet'}>
                        <Icon size={'large'} color={'black'} name={'github'}/>
                    </a>
                    <a href={'https://linkedin.com'}>
                        <Icon size={'large'} color={'blue'} name={'linkedin'}/>
                    </a>
                    <a href={'mailto:evanbruchet@outlook.com'}>
                        <Icon size={'large'} color={'black'} name={'mail'}/>

                    </a>

                </div>
                <div id={'landing-chevron-icon'} className={classNames({'not-displayed': this.state.mobile})}>
                    <Icon color={'black'} size={'large'} name={'chevron down'}/>
                </div>
            </div>

        );
    }
}

export default Landing;
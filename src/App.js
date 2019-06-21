import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-less/semantic.less'
import {Header, Icon, Menu, Sticky} from "semantic-ui-react";
import 'typeface-montserrat';
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import PersonalProjects from "./components/PersonalProjects";
class App extends Component {

    state = {
        context: null,
    };

    handleContextRef = ref => {
        this.setState({context: ref});
    };

    render() {
        return (
            <div className="App" ref={this.handleContextRef}>
                <Sticky context={this.state.context}>
                    <Menu
                        id={'navbar-menu'}
                        size={'huge'}
                        borderless={true}
                        style={{margin: 0, borderRadius: '0'}}>
                        <Menu.Menu position={'left'}>
                            <Menu.Item>
                                <Header as='h2'>
                                    <Icon name='terminal' />
                                    <Header.Content>EB</Header.Content>
                                </Header>
                            </Menu.Item>
                        </Menu.Menu>
                        <Menu.Menu position={'right'}>
                            <Menu.Item position="right">
                                <Header size={'tiny'} className={'navbar-menu-header'}>
                                    <a href="mailto: evan.bruchet@outlook.com">
                                        <Icon color={'black'} name={'mail'}/>
                                    </a>
                                    {/*Contact Me*/}
                                </Header>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Sticky>
                <Landing />
                <AboutMe />
                <PersonalProjects />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';

import './styles.css';
import moon from '../../assets/moon-regular.svg';

class Header extends Component {

    state = {
        themeDark: false,
        headerContainer: 'header-container',
        title: 'title-white',
        theme: 'theme-white',
        mainContainer: '',
    };

    changeTheme = () => {

        const divRoot = document.getElementById('root');
        //const btn = document.getElementById('btn');
        const label = document.getElementById('label');

        if (!this.state.themeDark) {
            divRoot.style.backgroundColor = 'hsl(207, 26%, 17%)';
            //btn.style.background = '#2D3744';
            label.style.color = 'hsl(0, 0%, 100%)';

            this.setState({
                themeDark: true,
                headerContainer: 'header-container-dark',
                title: 'title-dark',
                theme: 'theme-dark',
                mainContainer: 'main-container-dark'
            });
        } else {
            divRoot.style.backgroundColor = '';
            //btn.style.background = '#fff';
            label.style.color = 'hsl(0, 0%, 52%)';

            this.setState({
                themeDark: false,
                headerContainer: 'header-container',
                title: 'title-white',
                theme: 'theme-white',
                mainContainer: ''
            });
        }
    };

    render() {
        const { headerContainer, title, theme } = this.state;
        return (
            <div className={headerContainer}>
                <h2 className={title}>Where in the world?</h2>
                <div className={theme} onClick={() => this.changeTheme()}>
                    <img src={moon} />
                    <h5>Dark Mode</h5>
                </div>
            </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import './header.css';
import dots from '../assets/images/dots.png';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import Hamburger from './hamburger';

class Header extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            path: props.path,
            sidebarOpen: false
        };
    }

    onSetSidebarOpen = (open) => {
        this.setState({ 
            sidebarOpen: open 
        });
    }

    sidebar = {
        sidebar: { height: "100vh", width: "50vw", "overflowY": "unset", position: "fixed" },
        overlay: {backgroundColor: "#237E80"}

    }

    render() {
        const { path } = this.state;
        switch(path) {
            // case "/about_us":
                // return(
                //     <div className="headContainer header">
                //         {this.props.title || ''}
                //         <Sidebar
                //         sidebar={<Hamburger/>}
                //         open={this.state.sidebarOpen}
                //         styles={this.sidebar}
                //         >
                //         <div>
                //             <img className="dots" onClick={() => this.onSetSidebarOpen(true)} src={dots}/>
                //         </div>
                //         </Sidebar>   
                //     </div> 
                //  );
            default:
                return (
                    <div>
                    <Sidebar
                        sidebar={<Hamburger/>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={this.sidebar}
                    >
                        <div className="header">
                            <img className="dots" onClick={() => this.onSetSidebarOpen(true)} src={dots}/>
                        </div>
                    </Sidebar>
                    </div>
        
              );  
        }      
    }
}

export default Header;

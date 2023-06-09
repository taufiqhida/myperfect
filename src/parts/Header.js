import React from 'react'

import Button from 'elements/Button'
import BranIcon from 'parts/IconText'
import { useLocation } from 'react-router-dom'
export default function Header(props) {
    const location = useLocation();
    const getNavLinkClass = (path) => {
        return location.pathname === path ? "active" : ""
    };
    if (props.isCentered)
        return (
            <header className='spacing-sm'>
                <div className='container'>
                    <nav className='navbar navbar-expand-lg navbar-light'>
                        <Button className="brand-text-icon mx-auto" href="" type="link">
                            myPerfect<span className="text-gray-900"> Hotel.</span>
                        </Button>
                    </nav>
                </div>
            </header>
        );

    return(
    <header className = "spacing-sm">
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light'>
                <BranIcon />
            <div className='collapse navbar-collapse'>
            <ul className='navbar-nav ml-auto'>
                <li className={`nav-item${getNavLinkClass("/")}`}>
                    <Button className="nav-link" type="link" href="">
                        Home
                    </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                    <Button className="nav-link" type="link" href="/browse-by">
                        Browse-by
                    </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                    <Button className="nav-link" type="link" href="/stories">
                        Stories
                    </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agent")}`}>
                    <Button className="nav-link" type="link" href="/agent">
                        Agent
                    </Button>
                </li>
            </ul>
            </div>
            </nav>
        </div>
    </header>
    
  )
}

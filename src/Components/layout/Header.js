import React from 'react'

const Header = (props) => {
    switch(props.page) {
        case 'Home':
            return (<div></div>)
        case 'Why':
            return (<div></div>)
        case 'Works':
            return (<div></div>)
        case 'Merchant':
            return (<div></div>)
        default :
            return (<div></div>);
    }

}

export default Header

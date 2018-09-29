import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Home page</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
            </div>
        )

    }
}
// Export home
export default Home

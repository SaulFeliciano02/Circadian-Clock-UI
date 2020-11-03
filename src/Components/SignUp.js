import React, { Component } from 'react';
import '../Styles/SignIn.css';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first">
                        <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="firstname" class="fadeIn second" name="login" placeholder="First Name" onChange={this.handleChange}/>
                        <input type="text" id="lastname" class="fadeIn third" name="login" placeholder="Last Name" onChange={this.handleChange}/>
                        <input type="text" id="email" class="fadeIn second" name="login" placeholder="Email" onChange={this.handleChange}/>
                        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" onChange={this.handleChange}/>
                        <input type="submit" class="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a class="underlineHover" href="/">Sign In!</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default SignUp;
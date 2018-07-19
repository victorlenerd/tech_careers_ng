import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';

class FormReCaptcha extends Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
    componentDidMount() {
        if (this.recaptchaInstance) {
            console.log("started, just a second...")
            this.recaptchaInstance.reset();
        }
    }
    onLoadRecaptcha() {
        if (this.recaptchaInstance) {
            this.recaptchaInstance.reset();
        }
    }
    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!! 
        document.getElementById('submitBtn').disabled = false;
        console.log(recaptchaToken, "<= your recaptcha token")
    }
    render() {
        return (
            <ReCaptcha
                ref={(el) => { this.recaptchaInstance = el; }}
                size="normal"
                theme="dark"
                data-badge="bottomleft"
                render="explicit"
                sitekey="6Le-DWUUAAAAACV8i08pvWThMRDKgPfNvzOIHCVr"
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
            />
        );
    };
};
export default FormReCaptcha;
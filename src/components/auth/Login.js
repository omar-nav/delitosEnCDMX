import React, { Component } from 'react';
import axios from 'axios';
import toastr from 'toastr';

const url = 'https://delitos-en-cdmx.herokuapp.com/login';

class Login extends Component {

    state = {
        auth: {},
        loading: false
    }

    login = (e) => {
        this.setState({ loading: true });
        e.preventDefault();
        const { auth } = this.state;
        axios.post(url, auth)
            .then(res => {
                console.log(res);
                toastr.success("Te logueate!");
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', res.data.token);

                this.setState({ loading: false });
                const bonito = this.props.history;
                bonito.push('/crimemap');

            })
            .catch(e => {
                toastr.error("clave equivocada")
                this.setState({ loading: false })

            })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const { auth } = this.state
        auth[field] = value
        this.setState({ auth })
    }

    render() {
        const { auth, loading } = this.state
        return (
            <form class="filterMunicipios" onSubmit={this.login} style={{ width: 600, margin: "0 auto", padding: 20 }}>
                <p>
                    <input
                        name="email"
                        type="email"
                        onChange={this.onChange}
                        value={auth.email}
                        placeholder="Tu correo"
                    />
                </p>
                <p>
                    <input
                        name="password"
                        type="password"
                        onChange={this.onChange}
                        value={auth.password}
                        placeholder="Tu Password"
                    />
                </p>
                <button loading={loading} type="primary" htmlType="submit" >Inicia sesión</button>
            </form>
        )
    }
}

export default Login
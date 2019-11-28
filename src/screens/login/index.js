import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Keyboard, StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import {
    Text,
    Button,
    LoginView,
    TextInput,
} from '../../components';
import {
  login,
} from '../../store/actions/auth-actions';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    componentDidMount(){    
        // if(this.props.user){
        //     this.props.navigation.navigate('home')
        // }
    }

    _login = () => {
        let { navigate } = this.props.navigation;
        let { email, password } = this.state;
        if (email && password) {
            console.log(email, password, navigate);
            this.props.login({ email, password, navigate })
        }
    }
    render() {
        let { email, password } = this.state;
        let { loading, errorMessage } = this.props
        return (
            <LoginView title="Welcome back.">
                <View style={styles.formContainer}>
                    {!!errorMessage && (
                        <View style={{ marginHorizontal: 8 }}>
                            <Text color={Colors.red}>{errorMessage}</Text>
                        </View>
                    )}
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={email => this.setState({ email })}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => this.setState({ password })}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry
                    />
                </View>
                <View style={{ marginBottom: 2 }}>
                    <Button
                        text="Sign In"
                        disabled={!(email && password)}
                        loading={loading}
                        onPress={() => {
                            Keyboard.dismiss();
                            this._login();
                        }}
                    />
                    
                </View>
            </LoginView>
        );
    }

}

function mapStateToProps(state) {
    return {
        loading: state.authReducer.loading,
        user: state.authReducer.user,
        errorMessage: state.authReducer.errorMessage
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (obj) => dispatch(login(obj))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});


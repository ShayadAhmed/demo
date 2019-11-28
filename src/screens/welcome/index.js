import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {
    Logo,
    Text,
    Button,
    StatusBar,
} from '../../components';
import { connect } from 'react-redux'
import { Colors } from '../../theme';


class Welcome extends React.Component {

    render() {
        let {
            container,
            logoContainer,
            actionsContainer,
            welcomeContainer,
        } = styles;
        let { navigate } = this.props.navigation;
        return (
            <>
                <StatusBar />
                <SafeAreaView style={container}>
                    <View style={{ flex: 1 }}>
                        <View style={logoContainer}>
                            <Logo />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={welcomeContainer}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Welcome to Shayan Movie Store</Text>
                                <Text
                                    extraLarge
                                    color={Colors.white}
                                    style={{ marginTop: 20 }}
                                >
                                    Get Started.
                    </Text>
                            </View>
                        </View>
                        <View style={actionsContainer}>
                            <View>
                                <Button
                                    text="Sign In"
                                    onPress={() => navigate('login')}
                                />
                            </View>
                            {/* <View style={{ alignSelf: 'center' }}>
                                <Button
                                    transparent
                                    text="Sign Up"
                                    tintColor={Colors.white}
                                    onPress={() => navigate('register')}
                                />
                            </View> */}
                        </View>
                    </View>
                </SafeAreaView>
            </>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    welcomeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionsContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: 20,
    },
});

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from '../../theme';
import { Text, Container } from '../../components';
import { logout } from '../../store/actions/auth-actions';
import MenuConfigItem from './menu-config-item';
import { connect } from 'react-redux'
class Settings extends React.Component {

    render() {

        return (
            <Container>
                <View style={styles.imageProfileContainer}>
                    <Image
                        style={{ marginBottom: 6 }}
                        source={{ uri: 'https://image.flaticon.com/icons/png/512/149/149071.png', width: 80, height: 80 }}
                    />
                    <Text numberOfLines={2}>{this.props.user.name}</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <View style={styles.separator} />

                    <MenuConfigItem
                        icon="git-branch"
                        description="Version"
                        right={<Text>1.0.0</Text>}
                    />
                    <MenuConfigItem
                        last
                        icon="log-out"
                        description="Logout"
                        onPress={() => this.props.logout(this.props.navigation)}
                    />
                </View>
            </Container>
        );

    }
};


function mapStateToProps(state) {
    return {
        user: state.authReducer.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        logout: (navigation) => dispatch(logout(navigation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
const styles = StyleSheet.create({
    imageProfileContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 16,
    },
    separator: {
        borderBottomColor: Colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});


import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Colors } from '../../theme';
import { Logo, Loading } from '../../components';
import { connect } from 'react-redux';
import {
  setUser,
} from '../../store/actions/auth-actions';


class LoadingScreen extends React.Component {

  componentDidMount() {
    if (!this.props.user) {
      AsyncStorage.getItem('movieUser').then(user => {
        if (user) {
          user = JSON.parse(user)
          this.props.setUser(user);
          this.props.navigation.navigate('main')
        } else {
          this.props.navigation.navigate('auth')
        }
      }).catch(_ => {
        this.props.navigation.navigate('auth')
      })
    } else {
      this.props.navigation.navigate('main')
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  loadingContainer: {
    marginTop: 20,
  },
});

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setUser: (obj) => dispatch(setUser(obj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);

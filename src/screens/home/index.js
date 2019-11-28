import React from 'react';
import { View } from 'react-native';
import { Container, TextInput } from '../../components';
import PopularMovieList from './components/PopularMovieList';
import { search } from './mockData'
class Home extends React.Component {

    render() {
        return (
            <Container>
                <View style={{ marginTop: 20 }} />
               
                <PopularMovieList prefix={'onne'} movies={search.Search} />
                <PopularMovieList prefix={'twoo'} movies={search.Search} />
                <PopularMovieList prefix={'three'} movies={search.Search} />
            </Container>
        )
    }
}


export default Home;

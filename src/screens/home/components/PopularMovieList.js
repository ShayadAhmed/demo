import React from 'react';
// import { useFetch } from '~/hooks';
import { List, Loading } from '../../../components';
import PopularMovieItem from './PopularMovieItem';
// import { connect } from 'react-redux';
class PopularMovieList extends React.Component {



  render() {

    let { loading, movies, prefix } = this.props;

    return (loading
      ? <Loading />
      : (
        <List
          data={movies}
          title="Movies"
          // onViewAllPress={() => { }}
          keyExtractor={({ imdbID }) => prefix + String(imdbID)}
          subtitle="Most popular movies in the world"
          renderItem={({ item }) => <PopularMovieItem movie={item} />}
        />
      )
    );
  }
};



export default PopularMovieList;

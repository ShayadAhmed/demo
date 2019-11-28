import React from 'react';
import { View } from "react-native"
// import { useFetch } from '~/hooks';
import { ListVerticle, Loading,Container, TextInput } from '../../../components';
import PopularMovieItem from './PopularMovieItem';
// import { connect } from 'react-redux';
class MovieSearch extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      s: '',
      loading: false,
    };
  }
  componentDidMount() {
    // console.log(search);
    // this.setState({
    //   movies: [...search.Search],
    // });

    this.getData(this.state.s);
  }
  getData = async s => {
    this.setState({
      loading: true,
    });
    var res = await fetch(`https://www.omdbapi.com/?apikey=f732104e&s=${s}`);
    // console.log(res);
    var data = await res.json();
    console.log(data, 'data');
    if (data.Response === 'True') {
      this.setState({
        movies: [...data.Search],
        loading: false,
      });
    } else {
      this.setState({
        movies: [],
        loading: false,
      });
    }
    return data;
  };

  onTextChange = async text => {
    this.setState({ s: text });
    // console.log()
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.getData(text);
    }, 2000);
  };



  render() {

    let { loading, movies, s } = this.state;

    return (
      <Container>
        <View style={{ marginTop: 20 }} />

        {

          loading
            ? <Loading />
            : (
              <View>
                <TextInput
                  label="Movie Name "
                  value={s}
                  onChangeText={text => this.onTextChange(text)}
                  autoCapitalize="none"
                // keyboardType="text"
                />
                <ListVerticle
                  data={movies}
                  title="Searh Movie"
                  // onViewAllPress={() => { }}
                  keyExtractor={({ imdbID }) => 'search'+ String(imdbID)}
                  subtitle="Movies"
                  renderItem={({ item }) => <PopularMovieItem isLarge={true} movie={item} />}
                />
              </View>
            )
        }
      </Container>
    );
  }
};



export default MovieSearch;

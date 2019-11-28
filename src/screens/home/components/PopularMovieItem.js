import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '../../../components';

const propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
    Year: PropTypes.string
  }).isRequired,
};

function PopularMovieItem({isLarge, movie, navigation: { navigate } }) {
  const {
    Title,
    imdbID,
    Type,
    Poster,
    Year
  } = movie;
  // const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });

  return (
    <View style={{ width: isLarge?'100%': 130 }}>
      <TouchableOpacity onPress={() => navigate('movie', { imdbID })}>
        <Image
          style={{ width: isLarge?'100%':120, height:isLarge?300: 170, borderRadius: 5 }}
          source={{ uri: `${Poster}` }}
          resizeMode="stretch"
        />
        <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
          <Text
            small
            bold
            numberOfLines={1}
          >
            {Title}
          </Text>
          <Text
            small
            bold
            numberOfLines={1}
          >
            {Type}
          </Text>
          <Text small>{Year}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

PopularMovieItem.propTypes = propTypes;

export default withNavigation(PopularMovieItem);

import React from 'react';
import {
    View,
    Linking,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import {
    Icon,
    Text,
    List,
    Person,
    Loading,
    Container,
    HeaderBack,
} from '../../components';
import { Colors } from '../../theme';


class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            moviesData: null,
        };
    }
    componentDidMount() {
        let imdbID = this.props.navigation.getParam('imdbID');
        this.getItem(imdbID);
    }
    getItem = async id => {
        this.setState({
            loading: true,
        });
        var res = await fetch(`https://www.omdbapi.com/?apikey=f732104e&i=${id}`);
        // console.log(res);
        var data = await res.json();
        // console.log(data.Response, 'data');
        if (data.Response === 'True') {
            // console.log(data,this, 'data');
            this.setState({
                moviesData: { ...data },
                loading: false,
            });
        } else {
            this.setState({
                moviesData: null,
                loading: false,
            });
        }
        return data;
    };
    // = ({ navigation: { getParam } }) => {
    //   const movieId = getParam('id', null);
    //   const youtubeUrl = useRemoteConfig({ key: YOUTUBE_URL });
    //   const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });
    //   const { response, loading } = useFetch({ path: `/movie/${movieId}?append_to_response=videos,credits` });
    // const {
    //     credits,
    //     title,
    //     videos,
    //     runtime,
    //     overview,
    //     genres = [],
    //     poster_path: pic,
    //     release_date: date,
    //     vote_average: rating,
    // } = response || {};
    // const { cast, crew } = credits || {};
    // const duration = `${Math.floor(runtime / 60)}h ${(runtime % 60)}min`;

    render() {

        let {
            infoContainer,
            headerContainer,
            ratingContainer,
            loadingContainer,
            backgroundContainer,
        } = styles;

        let { moviesData ,loading} = this.state;
        return (loading
            ? (
                <View style={loadingContainer}>
                    <Loading />
                </View>
            )
            : (
                moviesData &&
                <ImageBackground
                    source={{ uri: `${moviesData.Poster}` }}
                    style={backgroundContainer}
                >
                    <Container transparency>
                        <HeaderBack />
                        <View style={headerContainer}>
                            <View style={{ flex: 1 }}>
                                <Text
                                    bold
                                    large
                                    color={Colors.white}
                                >
                                    {moviesData.Title}
                                </Text>
                                <Text>{moviesData.Year}</Text>
                            </View>

                        </View>
                        <View style={infoContainer}>
                            <View style={{ flex: 1 }}>
                                <Text color={Colors.white}>
                                    {/* {genres.map(({ name }) => name).join(', ')} */}
                                    {moviesData.Rated}
                                </Text>
                                <Text color={Colors.white}>{moviesData.Runtime.toString()}</Text>
                            </View>
                            <View style={ratingContainer}>
                                <View style={{ marginRight: 5 }}>
                                    <Icon
                                        name="star"
                                        color={Colors.green}
                                    />
                                </View>

                                {/* <Text color={Colors.white}>{rating.toString()}</Text> */}
                            </View>
                        </View>
                        {/* <View style={{ marginHorizontal: 16 }}>
                            <Text color={Colors.white}>Sinopsi</Text>
                            <Text>
                                {overview}
                            </Text>
                        </View> */}
                        <View style={{ marginTop: 20 }}>
                            {moviesData.Ratings.map((i,ind) => (
                                <Text key={'demo'+ind} style={styles.ti}>
                                    {i.Source + " " + i.Value}
                                </Text>
                            ))}
                        </View>
                    </Container>
                </ImageBackground>
            )
        );
    }
};

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: Colors.black,
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: 16,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.black,
    },
});

export default Movie;

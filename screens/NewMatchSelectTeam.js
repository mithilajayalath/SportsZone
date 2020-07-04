import React from 'react';
import { StatusBar, StyleSheet, ImageBackground, Dimensions, FlatList } from 'react-native';
import { Block, Text, theme, Button, Input } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import GuButton from '../components/Button';
import { Images, materialTheme } from '../constants';
import Icon from '../components/Icon';

import Mybutton from '../components/MyButton';
import TeamItem from '../components/TeamItem';
import  Team from '../Models/team';
import  {teams} from '../Data/DummyData';
const { width, height } = Dimensions.get('screen');

const NewMatchSelectTeam = props => {
    const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />
    const teamData = teams;
    const name =props.route.params.teamName;
    const name2 = props.route.params.courtName;
    console.log("name",name);
    console.log('name2',name2);
    const renderTeams = itemData => {

        return (
            <TeamItem
               teamName = {itemData.item.teamName}
               image = {itemData.item.imageUrl}/>
        );
    };
    return (
        <Block flex style={styles.screen}>
            <Block flex>
                <ImageBackground
                    source={{ uri: Images.Openchallange }}
                    style={styles.profileContainer}
                    imageStyle={styles.profileImage}>
                    <Block flex style={styles.profileDetails}>
                        <Block style={styles.profileTexts}>

                            <Block row space="between">
                                <Text color="black" size={28} style={{ paddingBottom: 8 }}>OPEN CHALLENGE</Text>
                                <Mybutton onPress={() => { }} style={styles.button}>

                                </Mybutton>
                            </Block>
                            <Text size={16}>Challenge all teams</Text>
                        </Block>
                        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
                    </Block>
                </ImageBackground>
                <Block>
                    <Block style={styles.heading}>
                        <Text style={styles.headingText}>Challenge a team</Text>

                    </Block>
                    <Input
                        right
                        color="black"
                        style={styles.search}
                        iconContent={iconCamera}
                        placeholder="Select a team"
                        onFocus={() => { }}
                    />
                </Block>
                <Block style={styles.container}>

                    <FlatList
                        data={teamData}
                        renderItem={renderTeams}
                    />


                </Block>
            </Block>

        </Block>
    );
};
const styles = StyleSheet.create({
    screen: {

    },
    profileImage: {
        width: width * 1.1,
        height: 'auto',
    },
    profileContainer: {
        width: width,
        height: height / 4,
    },
    profileDetails: {
        paddingTop: theme.SIZES.BASE * 4,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    profileTexts: {
        paddingHorizontal: theme.SIZES.BASE * 7,
        paddingVertical: theme.SIZES.BASE * 4,
        zIndex: 2,
        fontWeight: 'bold'
    },
    button: {
        width: theme.SIZES.BASE * 5,
        height: theme.SIZES.BASE * 5,
        marginLeft: 10
    },
    heading: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    headingText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    search: {
        height: 48,
        width: width - 32,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'transparent'
    },
    container: {

    }
});
export default NewMatchSelectTeam;
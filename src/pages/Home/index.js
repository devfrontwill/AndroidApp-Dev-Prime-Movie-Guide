import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { 
    Container, 
    SearchContainer, 
    Input, 
    SearchButton, 
    Title, 
    BannerButton, 
    Banner,
    SliderMovie
} from './styles';

import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';


function Home() {
    return (
        <Container>
            <Header title="Dev Prime </>" />

            <SearchContainer>
                <Input 
                placeholder="Ex: Vingadores"
                placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name='search' size={30} color="#FFF" />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false} >
                <Title>Em cartaz</Title>

                <BannerButton activeOpacity={0.8} onPress={ () => alert('KamehameHaaa') } >
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: 'https://maissuperior.com/wp-content/uploads/2023/02/vdsffs.jpg' }}
                    />
                </BannerButton>

                <SliderMovie 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={ ({ item }) => <SliderItem /> }
                />

                <Title> Populares </Title>

                <SliderMovie 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={ ({ item }) => <SliderItem /> }
                />

                <Title> Mais votados </Title>

                <SliderMovie 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4]}
                renderItem={ ({ item }) => <SliderItem /> }
                />

            </ScrollView>
            
        </Container>
    )
}

export default Home;
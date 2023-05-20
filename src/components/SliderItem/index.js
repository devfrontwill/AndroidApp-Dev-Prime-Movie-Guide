import React from 'react';
import { Container, BannerItem, Title, RateContainer, Rate } from './style';
import { Ionicons } from '@expo/vector-icons';

function SliderItem() {
    return (
        <Container activeOpacity={0.8} >
            <BannerItem
                
                source={{ uri: 'https://presleyson.com.br/wp-content/uploads/2019/02/mr-robot-1200x630-min.jpg' }}
            />

            <Title numberOfLines={1} > Mr Robot </Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="#E7A74e" />
                <Rate>
                    9/10
                </Rate>
            </RateContainer>
        </Container>
    )
}

export default SliderItem;
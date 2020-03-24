import React, { Component } from 'react';
import { Image, FlatList } from 'react-native';
import { Container, ListButton, ListButtonText, Logo } from './styles';
import star from '../../assets/star.png';
import api from '../../services/api';

export default class Home extends Component {
    state = {
        list: [],
    };

    async componentDidMount() {
        try {
            const getId = await api.get('/tarefa');
            const id = getId.data.lista;

            console.tron.log(id);
            // const test = id.forEach(async id => {
            //     const response = await api.get(`/tarefa/${id}`);
            //     console.tron.log(id);
            //     const { urlLogo, titulo } = response.data;
            //     const data = { id, urlLogo, titulo };
            //     this.setState({ list: [...this.state.list, data] });
            // });
            const test = id.map(async id => {
                const response = await api.get(`/tarefa/${id}`);

                console.tron.log(id);
                const { urlLogo, titulo } = response.data;
                const data = { id, urlLogo, titulo };
                this.setState({ list: [...this.state.list, data] });
            });
            await Promise.all(test);
        } catch (err) {
            console.tron.log(err);
        }
    }

    handleNavigate = item => {
        const { navigation } = this.props;
        navigation.navigate('Main', item.id);
    };

    render() {
        const { list } = this.state;
        if (!list) {
            return null;
        }

        return (
            <Container>
                <FlatList
                    data={list}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <ListButton onPress={() => this.handleNavigate(item)}>
                            <Logo source={{ uri: item.urlLogo }} />
                            <ListButtonText>{item.id}</ListButtonText>
                        </ListButton>
                    )}
                />
            </Container>
        );
    }
}

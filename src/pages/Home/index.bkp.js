import React, { Component } from 'react';
import { Container, List, ListButton, ListButtonText } from './styles';
import api from '../../services/api';

export default class Home extends Component {
    state = {
        list: [],
    };

    async componentDidMount() {
        try {
            const response = await api.get('/tarefa');
            this.setState({ list: response.data.lista });
        } catch (err) {
            console.tron.log(error);
        }
    }

    handleNavigate = item => {
        const { navigation } = this.props;
        navigation.navigate('Main', item);
    };

    render() {
        const { list } = this.state;

        return (
            <Container>
                <List
                    data={list}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => (
                        <ListButton onPress={() => this.handleNavigate(item)}>
                            <ListButtonText>{item}</ListButtonText>
                        </ListButton>
                    )}
                />
            </Container>
        );
    }
}

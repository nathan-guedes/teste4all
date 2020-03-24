import React, { Component } from 'react';
import {
    StatusBar,
    Linking,
    Button,
    View,
    Text,
    Modal,
    Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Star from '../../assets/star.png';
import Comment from '../../assets/comment.png';
import Service from '../../assets/service.png';
import Telephone from '../../assets/telephone.png';
import AdressPoint from '../../assets/adressPoint.png';
import {
    Container,
    BannerImage,
    InfoHeader,
    InfoBtn,
    InfoBtnText,
    InfoBtnImg,
    Description,
    MarkerImg,
    AdressLocation,
    Header,
    HeaderImg,
    HeaderTitle,
    CommentList,
    Comments,
    CommentAvatar,
    CommentName,
    CommentNote,
    CommentNoteImg,
    CommentTitle,
    CommentDesc,
    CommentWrapper,
    CommentWrapperHeader,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        data: {},
        isModalVisible: false,
    };

    async componentDidMount() {
        const item = this.props.route.params;
        const response = await api.get(`/tarefa/${item}`);
        this.setState({ data: response.data });
    }

    renderNote = note => {
        const rows = [];
        for (let i = 0; i < note; i++) {
            rows.push(<CommentNoteImg key={i} source={Star} />);
        }
        return rows;
    };

    handleModal = () => {
        const { isModalVisible } = this.state;
        this.setState({ isModalVisible: !isModalVisible });
    };

    handleCall = number => {
        Linking.openURL(`tel: ${number}`);
    };

    render() {
        const { data, isModalVisible } = this.state;
        const comments = data.comentarios;

        if (!data.longitude || !data.latitude) {
            return null;
        }

        return (
            <>
                <StatusBar
                    backgroundColor="#e08b00"
                    options={{ title: 'lal' }}
                />
                <Container>
                    <BannerImage source={{ uri: data.urlFoto }} />
                    <Header>
                        <HeaderTitle> {data.titulo}</HeaderTitle>
                        <HeaderImg source={{ uri: data.urlLogo }} />
                    </Header>
                    <InfoHeader>
                        <InfoBtn onPress={() => this.handleCall(data.telefone)}>
                            <InfoBtnImg source={Telephone} />
                            <InfoBtnText>Ligar</InfoBtnText>
                        </InfoBtn>
                        <InfoBtn onPress={this.handleModal}>
                            <InfoBtnImg source={Service} />
                            <InfoBtnText>Serviços</InfoBtnText>
                        </InfoBtn>
                        <InfoBtn
                            onPress={() =>
                                Alert.alert('Endereço', data.endereco)
                            }
                        >
                            <InfoBtnImg source={AdressPoint} />
                            <InfoBtnText>Endereço</InfoBtnText>
                        </InfoBtn>
                        <InfoBtn>
                            <InfoBtnImg source={Comment} />
                            <InfoBtnText>Comentários</InfoBtnText>
                        </InfoBtn>
                        <InfoBtn>
                            <InfoBtnImg source={Star} />
                            <InfoBtnText>Favortos</InfoBtnText>
                        </InfoBtn>
                    </InfoHeader>
                    <Modal
                        visible={isModalVisible}
                        onRequestClose={this.handleModal}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                }}
                            >
                                Serviços
                            </Text>
                            <Button title="Fechar" onPress={this.handleModal} />
                        </View>
                    </Modal>
                    <Description
                        onPress={() => Alert.alert('Continuação', data.texto)}
                    >
                        {data.texto}
                    </Description>

                    <MapView
                        style={{ flex: 1, maxHeight: 100 }}
                        initialRegion={{
                            latitude: data.latitude,
                            longitude: data.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                    >
                        <Marker
                            title={data.titulo}
                            coordinate={{
                                latitude: data.latitude,
                                longitude: data.longitude,
                            }}
                        >
                            <MarkerImg source={{ uri: data.urlLogo }} />
                        </Marker>
                    </MapView>
                    <AdressLocation>{data.endereco}</AdressLocation>
                    <CommentList
                        data={comments}
                        keyExtractor={comments => String(comments.titulo)}
                        renderItem={({ item }) => (
                            <Comments>
                                <CommentAvatar source={{ uri: item.urlFoto }} />
                                <CommentWrapper>
                                    <CommentWrapperHeader>
                                        <CommentName>{item.nome}</CommentName>
                                        <CommentNote>
                                            {this.renderNote(item.nota)}
                                        </CommentNote>
                                    </CommentWrapperHeader>
                                    <CommentTitle>{item.titulo}</CommentTitle>
                                    <CommentDesc>{item.comentario}</CommentDesc>
                                </CommentWrapper>
                                <CommentNote>
                                    {this.renderNote(item.nota)}
                                </CommentNote>
                            </Comments>
                        )}
                    />
                </Container>
            </>
        );
    }
}

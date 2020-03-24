import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #ddd;
    /* background-color: #0d0c22; */
`;

export const ListButton = styled(RectButton)`
    align-items: center;
    margin: 10px 30px;
    padding: 15px 40px;
    background-color: #00bcd4;
    border-radius: 15px;
    border: none;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
`;
export const ListButtonText = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`;
export const Logo = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
`;

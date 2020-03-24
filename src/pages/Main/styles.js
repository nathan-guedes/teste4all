import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 0 10px;
    background-color: #fff;
`;

export const BannerImage = styled.Image`
    flex: 1;
    /* max-height: 250px; */
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    max-height: 50px;
    padding: 0;
    align-items: flex-end;
`;
export const HeaderTitle = styled.Text`
    text-transform: uppercase;
    color: #e08b00;
    /* font-weight: bold; */
    font-size: 16px;
    padding: 10px;
`;
export const HeaderImg = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #fff;
    margin-right: 20px;
    margin-bottom: 20px;
`;

export const InfoHeader = styled.View`
    flex-direction: row;
    justify-content: space-around;
    border-bottom-width: 1px;
    border-color: #ddd;
    max-height: 50px;
    flex: 1;
`;
export const InfoBtn = styled(RectButton)`
    max-height: 54px;

    align-items: center;
`;
export const InfoBtnImg = styled.Image`
    max-width: 37px;
    max-height: 25px;
`;
export const InfoBtnText = styled.Text`
    font-size: 11px;
    color: #e08b00;
`;

export const MarkerImg = styled.Image`
    width: 40px;
    height: 40px;
`;

export const AdressLocation = styled.Text`
    background-color: #e08b00;
    color: #fff;
    flex-direction: row;
    text-align: right;
    margin-bottom: 5px;
`;
export const Description = styled.Text.attrs({
    numberOfLines: 4,
})`
    font-size: 16px;
    /* display: none; */
    color: #e08b00;
`;

export const Comments = styled.View`
    flex-direction: row;
    /* border: 4px solid black; */
`;
export const CommentList = styled.View`
    /* padding-top: 100px; */
`;
export const CommentWrapper = styled.View`
    margin-left: 15px;
    /* border: 4px solid green; */
`;

export const CommentAvatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;
export const CommentWrapperHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const CommentName = styled.Text`
    /* border: 4px solid rebeccapurple; */
    text-transform: capitalize;
    flex: 1;
    color: #e08b00;
`;
export const CommentNote = styled.View`
    flex-direction: row;
    /* flex: 1; */
    /* justify-content: flex-start; */
    max-width: 200px;
    /* border: 4px solid yellow; */
`;
export const CommentNoteImg = styled.Image`
    max-width: 30px;
    max-height: 30px;
`;
export const CommentTitle = styled.Text`
    color: #e08b00;
    text-transform: uppercase;

    /* border: 4px solid red; */
`;
export const CommentDesc = styled.Text`
    color: #e08b00;
    /* border: 4px solid blue; */
`;

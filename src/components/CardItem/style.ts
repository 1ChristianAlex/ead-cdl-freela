import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface CardProp {
  color?: string;
  textColor?: string;
}

export const CardIcon = styled.img``;
export const CardIconConten = styled.div`
  min-height: 150px;
  display: flex;
  text-align: center;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  background-color: ${Colors.white};
`;
export const CardTitle = styled.span<CardProp>`
  text-transform: uppercase;
  padding: 10px;
  background-color: ${Colors.white};
  display: block;
  color: ${props => (props.color ? props.color : Colors.darkBlue)};
  flex: 1;
`;
export const CardContent = styled.p<CardProp>`
  flex: 1;
  background-color: ${props => (props.color ? props.color : Colors.darkBlue)};
  color: ${props => (props.textColor ? props.textColor : Colors.white)};
  align-self: center;
  padding: 0 30px;
`;
export const CardContentDiv = styled.div<CardProp>`
  background-color: ${props => (props.color ? props.color : Colors.darkBlue)};
  flex: 10;
  display: flex;
`;
export const CardContainer = styled.div<CardProp>`
  border: 3px solid ${props => (props.color ? props.color : Colors.darkBlue)};
  background-color: ${props => (props.color ? props.color : Colors.darkBlue)};

  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  box-shadow: 6px 6px 14px #00000067;
  min-height: calc(100vh - 250px);
  display: flex;
  flex-flow: column;
`;

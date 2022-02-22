import ButtonComponent from "../components/button/ButtonComponent";
import styled from "styled-components";
import CardComponent from "../components/card/CardComponent";
import BadgeComponent from "../components/badge/BadgeComponent";

declare interface UserCardProps {
    onContactClick: () => void;
}

function UserCard(props: UserCardProps): React.ReactElement {
    return (
        // MWC Step 5: Reference the wrapped component.
        <CardComponent height="250px" width="550px">
            <Content>
                <Image src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                <Info>
                    <Name>Jaydn Zhang</Name>
                    <Role>Senior Backend Engineer</Role>
                    <Badges>
                        <Badge>
                            <BadgeComponent color="success">C#</BadgeComponent>
                        </Badge>
                        <Badge>
                            <BadgeComponent color="primary">SQL</BadgeComponent>
                        </Badge>
                        <Badge>
                            <BadgeComponent color="warning">TypeScript</BadgeComponent>
                        </Badge>
                    </Badges>
                    <ButtonComponent color="primary" onClick={() => props.onContactClick()}>Contact</ButtonComponent>
                </Info>
            </Content>
        </CardComponent>
    );
}

export default UserCard;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid rgb(0, 99, 163);
  width: 200px;
  height: 200px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 24px;
`;

const Name = styled.span`
  font-size: 24px;
`;

const Role = styled.span`
  font-size: 18px;
`;

const Badges = styled.div`
  display: flex;
  margin-bottom: 48px;
`;

const Badge = styled.div`
  margin: 4px 6px 0 0;
`;






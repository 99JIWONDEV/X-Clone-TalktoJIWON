import { styled } from "styled-components";
import { ITweet } from "./timeline";
import { auth } from "../firebase";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div``;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const Payload = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;

const DeleteButton = styled.button`
background-color: tomato;
color: white;
font-weight: 600;
border: 0;
font-size: 12px;
padding: 5px 10px;
text-transform: uppercase;
border-radius: 5px;
cursor: pointer;

`;

export default function Tweet({ username, photo, tweet, userId }: ITweet) {
  const user = auth.currentUser;
  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        <Payload>{tweet}</Payload>
        {user?.uid === userId ? <DeleteButton>삭제</DeleteButton> : null }
      </Column>
      <Column>{photo ? <Photo src={photo} /> : null}</Column>
    </Wrapper>
  );
}
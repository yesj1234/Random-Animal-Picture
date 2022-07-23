import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { animalAtom } from "../recoil/atoms";

function Animal() {
  const [src, setSrc] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const animal = useRecoilValue(animalAtom);
  useEffect(() => {
    if (animal === "Dog") {
      fetch("https://random.dog/woof.json")
        .then((res) => res.json())
        .then((data) => data.url)
        .then((url) => {
          setSrc(url);
          setLoading(false);
          setClicked(false);
        })
        .catch((e) => console.log(e));
      return;
    } else if (animal === "Fox") {
      fetch("https://randomfox.ca/floof")
        .then((res) => res.json())
        .then((data) => data.image)
        .then((url) => {
          setSrc(url);
          setLoading(false);
          setClicked(false);
        })
        .catch((e) => console.log(e));
      return;
    }
  }, [clicked, animal]);
  return (
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Title>Here Is Your {animal}</Title>
          <ImageWrapper>
            <Image loading="lazy" alt="dog" src={`${src}`}></Image>
          </ImageWrapper>
        </>
      )}
      <RefreshWrapper>
        <Refresh onClick={() => setClicked(true)}>
          Show Me Another {animal}
        </Refresh>
      </RefreshWrapper>
    </Container>
  );
}

export default Animal;
const Title = styled.div`
  align-self: center;
  /* margin-bottom: 12px; */
  padding-bottom: 12px;
  font-size: 2rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  clear: both;
`;
const ImageWrapper = styled.div`
  width: 480px;
  height: 300px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const RefreshWrapper = styled.div`
  margin-top: 12px;
  align-self: center;
`;
const Refresh = styled.button`
  border-radius: 5px;
  border: solid 4px black;
  font-size: 20px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  background: linear-gradient(90deg, yellow, white);
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  transition: all 0.2s ease-in-out;
`;

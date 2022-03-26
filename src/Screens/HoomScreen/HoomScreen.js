import Card from "../../Components/Cards/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  IneerContainer,
  HeaderPage,
  HeaderInputSearch,
  ContentContainer,
  HeroSection,
  Title,
  CardSection,
} from "./Styles.js";

const HoomScreen = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setList(response.data.splice(0, 10));
    } catch (e) {
      console.log(e, "error fetchData");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IneerContainer>
      <HeaderPage>
        <HeaderInputSearch
          type="search"
          id="search"
          name="search"
          autoComplete="off"
          placeholder="search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </HeaderPage>
      <ContentContainer>
        <HeroSection>
          <Title>Your Space To WatchThe Best Pictures</Title>
        </HeroSection>
        <CardSection>
          {list?.length ? (
            list
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => (
                <Card
                  Title={item.title}
                  key={item.id}
                  handleSearch={() => {
                    const filterdItems = list.filter(
                      (filterItem) => filterItem.id !== item.id
                    );
                    setList(filterdItems);
                  }}
                />
              ))
          ) : (
            <span>loading...</span>
          )}
        </CardSection>
      </ContentContainer>
    </IneerContainer>
  );
};

export default HoomScreen;

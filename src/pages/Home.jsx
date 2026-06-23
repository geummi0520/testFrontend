import styled from "styled-components";
// import {mockup} from "../components/Home/data";
import { useState } from "react";
import { useEffect } from "react";
import ListSection from "../components/ListType/ListSection";
import HeaderSection from "../components/common/HeaderSection";
import FeedSection from "../components/FeedType/FeedSection";
import BoardSection from "../components/BoardType/BoardSection";
import GallerySection from "../components/GalleryType/GallerySection";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("리스트");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/articles`
        );

        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setPosts(data.data.reverse());
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <div>
        <HeaderSection filter={filter} setFilter={setFilter} />
        {(filter === "리스트" && <ListSection posts={posts} />) ||
          (filter === "보드" && <BoardSection posts={posts} />) ||
          (filter === "갤러리" && <GallerySection posts={posts} />) ||
          (filter === "피드" && <FeedSection posts={posts} />)}
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
    max-width: 74.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`;

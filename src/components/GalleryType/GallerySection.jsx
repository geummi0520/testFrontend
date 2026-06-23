import styled from "styled-components";
import GalleryItem from "./GalleryItem";

export default function GallerySection({ posts }) {
  return (
    <GalleryItemSectionWrapper>
      <Gallery>
        {posts.map((post) => (
          <GalleryItem key={post.id} {...post} postId={post.id} />
        ))}
      </Gallery>
    </GalleryItemSectionWrapper>
  );
}

const GalleryItemSectionWrapper = styled.section`
  width: 100%;
  max-width: 74.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
`;

const Gallery = styled.ul`
  > li {
    border-radius: 1.2rem;
    border: 1px solid var(--line-primary);
  }
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 50%;
`;

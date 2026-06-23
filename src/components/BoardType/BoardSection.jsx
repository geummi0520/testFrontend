import styled from "styled-components";
import BoardItem from "./BoardItem";

export default function BoardSection({ posts }) {
  return (
    <BoardItemSectionWrapper>
      <Board>
        {posts.map((post) => (
          <BoardItem key={post.id} {...post} postId={post.id} />
        ))}
      </Board>
    </BoardItemSectionWrapper>
  );
}

const BoardItemSectionWrapper = styled.section`
  width: 100%;
  max-width: 74.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 2rem;
`;

const Board = styled.ul`
  > li {
    border-radius: 1.2rem;
    border: 1px solid var(--line-primary);
  }
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 50%;
`;

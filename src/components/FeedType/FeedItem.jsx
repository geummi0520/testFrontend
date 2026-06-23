import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatKoreanDate } from "../../utils/dateFormat";

import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";

export default function FeedItem({
  content,
  title,
  author,
  createdAt,
  totalComments,
  totalLikes,
}) {
  const navigate = useNavigate();

  return (
    <FeedItemWrapper>
      <FeedItemTitle>{title}</FeedItemTitle>
      <FeedItemAuthor>{author}</FeedItemAuthor>
      <FeedItemDate>{formatKoreanDate(createdAt)}</FeedItemDate>
      <FeedItemContent> {content === " " ? "\u00A0" : content}</FeedItemContent>

      <div className="info">
        <IoHeartOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalLikes}</span>
        <span>·</span>
        <IoChatbubbleOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalComments}</span>
      </div>
    </FeedItemWrapper>
  );
}

const FeedItemWrapper = styled.li`
  border-radius: 1.2rem;
  border: 1px solid var(--line-primary, rgba(112, 115, 124, 0.22));
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: var(--background-secondary);
  }

  .info {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    align-self: stretch;
    color: var(--text-tertiary);

    /* label/small */

    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 138.5%; /* 1.8005rem */
    letter-spacing: 0.0252rem;
  }
`;
const FeedItemTitle = styled.div`
  overflow: hidden;
  color: var(--text-primary);
  text-overflow: ellipsis;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.0091rem;
`;

const FeedItemContent = styled.div`
  margin: 6rem 0;
  overflow: hidden;
  color: var(--text-primary);

  /* body/medium */
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%; /* 2.4rem */
  letter-spacing: 0.0091rem;
`;

const FeedItemAuthor = styled.div`
  color: var(--text-secondary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 2.4rem */
  margin-bottom: 0.4rem;
`;

const FeedItemDate = styled.div`
  color: var(--text-tertiary);
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 138.5%; /* 1.8005rem */
  letter-spacing: 0.0252rem;
`;

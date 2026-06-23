import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { formatKoreanDate } from "../../utils/dateFormat";

import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";

export default function ListItem({
  content,
  title,
  author,
  createdAt,
  totalComments,
  totalLikes,
}) {
  const navigate = useNavigate();

  return (
    <ListItemWrapper>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemContent> {content === " " ? "\u00A0" : content}</ListItemContent>
      <div className="info">
        <ListItemAuthor>{author}</ListItemAuthor>
        <span>·</span>
        <ListItemDate>{formatKoreanDate(createdAt)}</ListItemDate>
      </div>
      <div className="info">
        <IoHeartOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalLikes}</span>
        <span>·</span>
        <IoChatbubbleOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalComments}</span>
      </div>
    </ListItemWrapper>
  );
}

const ListItemWrapper = styled.li`
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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
const ListItemTitle = styled.div`
  overflow: hidden;
  color: var(--text-primary);
  text-overflow: ellipsis;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.0091rem;
`;

const ListItemContent = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  color: var(--text-tertiary);
`;

const ListItemAuthor = styled.div`
  color: var(--text-quaternary);
`;
const ListItemDate = styled.div`
  color: var(--text-quaternary);
`;

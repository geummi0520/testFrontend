import styled from "styled-components";
import { formatKoreanDate } from "../../utils/dateFormat";

import { IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";

const photos = [
  "/photos/001.png",
  "/photos/002.png",
  "/photos/003.png",
  "/photos/6.png",
];

export default function GalleryItem({
  postId,
  content,
  title,
  author,
  createdAt,
  totalComments,
  totalLikes,
}) {
  const photo = photos[postId % photos.length];
  return (
    <GalleryItemWrapper>
      <img src={photo} alt="" />
      <GalleryItemTitle>{title}</GalleryItemTitle>
      <GalleryItemContent>
        {content === " " ? "\u00A0" : content}
      </GalleryItemContent>
      <div className="info">
        <GalleryItemAuthor>{author}</GalleryItemAuthor>
        <span>·</span>
        <GalleryItemDate>{formatKoreanDate(createdAt)}</GalleryItemDate>
      </div>
      <div className="info">
        <IoHeartOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalLikes}</span>
        <span>·</span>
        <IoChatbubbleOutline size={16} color="var(--icon-tertiary)" />
        <span>{totalComments}</span>
      </div>
    </GalleryItemWrapper>
  );
}

const GalleryItemWrapper = styled.li`
  padding: 2rem 1rem;
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
const GalleryItemTitle = styled.div`
  overflow: hidden;
  color: var(--text-primary);
  text-overflow: ellipsis;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.0091rem;
`;

const GalleryItemContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  color: var(--text-tertiary);
  line-height: 150%;
`;

const GalleryItemAuthor = styled.div`
  color: var(--text-quaternary);
`;
const GalleryItemDate = styled.div`
  color: var(--text-quaternary);
`;

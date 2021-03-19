import styled, { css } from "styled-components";
import { BiPencil, BiRefresh, BiStar } from "react-icons/bi";
import { RiGroupLine, RiBookMarkLine } from "react-icons/ri";
import { AiOutlineFork, AiOutlineEye } from "react-icons/ai";

export const Container = styled.div`
  margin: 1rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Avatar = styled.img`
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 25%;
    height: 25%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: var(--gray);
    font-weight: 600;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
  flex-shrink: 0;
  margin-left: 1rem;
  cursor: pointer;
`;

export const EditIcon = styled(BiPencil)`
  ${iconCSS}
`;

export const RefreshIcon = styled(BiRefresh)`
  ${iconCSS}
`;

const infoIconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--primary);
  flex-shrink: 0;
  margin-right: 0.5rem;
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${infoIconCSS}
`;

export const StarIcon = styled(BiStar)`
  ${infoIconCSS}
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${infoIconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${infoIconCSS}
`;

export const EyeIcon = styled(AiOutlineEye)`
  ${infoIconCSS}
`;
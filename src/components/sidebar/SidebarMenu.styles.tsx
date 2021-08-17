import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const sidebarMenu = css`
    cursor: pointer;
`;
export const sidebarMenuDiv = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem 1rem 0.5rem;
`;
export const sidebarMenuTitle = (theme: Theme) => css`
    text-transform: uppercase;
    font-size: 13px;
    line-height: 15px;
    font-family: ${theme.fonts.robotoBold};
    color: ${Colors.Gray};
`;

export const sidebarMenuOpenImage = css`
    transform: rotate(0deg);
    transition: all 0.5s;
`;

export const sidebarMenuCloseImage = css`
    transform: rotate(-90deg);
    transition: all 0.5s;
`;

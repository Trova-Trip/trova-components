import { css, Theme } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

export const sidebar = (theme: Theme) => css`
    @media (min-width: ${theme.breakpoints.lg + 1}px) {
        min-width: 274px;
        padding: 0 2rem;
    }
    @media (max-width: ${theme.breakpoints.lg}px) {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        min-height: 100vh;
        overflow-y: auto;
    }

    padding: 5rem 2rem 2rem;
    box-sizing: border-box;
    background-color: ${Colors.White};
`;

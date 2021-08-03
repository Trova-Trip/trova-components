import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';


export const table = (theme: Theme) =>
    css`
        border-radius: 11px;
        overflow-x: visible;
        background-color: ${Colors.White};
        @media (min-width: ${theme.breakpoints.md}px) {
            min-width: 650px;
        }
    `;

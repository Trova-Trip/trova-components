import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const tableContainer = () =>
    css`
        margin: 1rem 0 0.5rem 0;
    `;

export const table = () =>
    css`
        border-radius: 0.75rem;
        background-color: ${Colors.White};
        overflow-x: auto;
        white-space: nowrap;
    `;

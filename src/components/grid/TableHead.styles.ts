import { css } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';


export const tableHead = () =>
    css`
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border-bottom: 1px solid ${Colors.LightGray};

         tr:first-child {
            border-radius: inherit;
             th {
                 padding: 16px 16px 4px 16px;
             }
         }
         tr:last-child {
            border-radius: inherit;
             th {
                 padding: 4px 16px 16px;
             }
         }
    `;
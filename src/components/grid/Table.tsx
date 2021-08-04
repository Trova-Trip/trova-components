/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import MaterialTableContainer from '@material-ui/core/TableContainer';
import MaterialTable from '@material-ui/core/Table';

import TableProps from './Table.types';
import { table } from './Table.styles';

/**
 * Renders a <Table /> component
 * @param  props
 * @param  props.children - The table head contents.
 * @param  props.className - For usage as an emotion styled component.
 */

const Table: React.FC<TableProps> = ({ children, className }) => {
    const theme = useTheme();
    return (
        <MaterialTableContainer className={className}>
            <MaterialTable css={table(theme)}>{children}</MaterialTable>
        </MaterialTableContainer>
    );
};

export default Table;

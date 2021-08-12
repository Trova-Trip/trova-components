/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, useState } from 'react';

import SidebarMenuProps from './SidebarMenu.types';

import {
    sidebarMenu,
    sidebarMenuDiv,
    sidebarMenuTitle,
    sidebarMenuCloseImage,
    sidebarMenuOpenImage,
} from './SidebarMenu.styles';
import imgArrow from '../../shared/images/icons/small gray arrow.svg';

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    open = true,
    onToggle,
    title,
    children,
    className,
}) => {
    const theme = useTheme();
    const [openMenu, setOpenMenu] = useState(open);

    const toggle = useCallback(() => {
        if (onToggle) {
            onToggle(!openMenu);
        }
        setOpenMenu(!openMenu);
    }, [openMenu]);
    return (
        <div
            data-testid="sidebar__menu"
            css={sidebarMenu}
            className={className}
        >
            <div css={sidebarMenuDiv} onClick={() => toggle()}>
                <h5 css={sidebarMenuTitle(theme)}>{title}</h5>
                {openMenu ? (
                    <img
                        alt="Open"
                        src={imgArrow}
                        css={sidebarMenuOpenImage}
                        onClick={() => toggle()}
                    />
                ) : (
                    <img
                        alt="Close"
                        src={imgArrow}
                        css={sidebarMenuCloseImage}
                        onClick={() => toggle()}
                    />
                )}
            </div>
            {openMenu ? children : null}
        </div>
    );
};

export default SidebarMenu;

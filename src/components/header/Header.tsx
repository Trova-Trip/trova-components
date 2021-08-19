/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import HeaderProps from './Header.types';
import {
    header,
    headerTitle,
    headerDetails,
    headerDates,
    headerLocation,
    headerDetailsInnerLeft,
    headerDetailsInnerRight,
    headerDetailOrder,
} from './Header.styles';

const Header: React.FC<HeaderProps> = ({
    title,
    subtitle,
    iconDescription,
    backgroundImage,
    icon,
    className,
    detail,
    badge
}) => {
    const theme = useTheme();
    const labelDetail = 'Order #:';

    return (
        <div css={header(theme, backgroundImage)} className={className}>
            <p css={headerTitle(theme)}>{title}</p>
            <div css={headerDetails(theme)}>
                <div css={headerDetailsInnerLeft(theme)}>
                    <span css={headerDates(theme)}>{subtitle}</span>
                    {iconDescription && (
                        <span css={headerLocation(theme)}>
                            {icon && icon}
                            {iconDescription}
                        </span>
                    )}
                </div>
                <div css={headerDetailsInnerRight(theme)}>
                    {detail && (
                        <p css={headerDetailOrder()}>
                            {labelDetail}<span>{detail}</span>
                        </p>
                    )}
                    {badge && badge}
                </div>
            </div>
        </div>
    );
};
export default Header;

import { SyntheticEvent } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import DialogHeaderProps from './dialogHeader.types';
import { Colors } from '../../shared/constants/colors';
import { ReactNode } from 'react';

export default interface DialogProps extends SimpleComponent {
    children: ReactNode;
    header?: DialogHeaderProps;
    backgroundColor?: Colors;
    showCloseButton?: boolean;
    enableBackgroundClick?: boolean;
    open: boolean;
    onClose?: (event: SyntheticEvent) => void;
}

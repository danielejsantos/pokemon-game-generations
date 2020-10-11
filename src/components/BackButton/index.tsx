import React from 'react';

import { BackButtonProps } from '../../types';
import { BackButtonStyle } from './styles';

const BackButton: React.FC<BackButtonProps> = ({ back }) => <BackButtonStyle onClick={back}>←</BackButtonStyle>

export default BackButton;
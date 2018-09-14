import { default as originalStyled, ThemedStyledInterface } from 'styled-components';
import { IThemeInterface } from '@theme';

export * from 'styled-components';

export default originalStyled as ThemedStyledInterface<IThemeInterface>;

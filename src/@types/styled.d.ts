import { theme } from '@/theme';
import 'styled-components';

type ITheme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
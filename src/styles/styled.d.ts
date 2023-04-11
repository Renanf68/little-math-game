// import original module declarations
import 'styled-components';
import { CustomTheme } from './theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

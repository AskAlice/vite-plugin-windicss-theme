# vite-plugin-windicss-theme

[![npm](https://img.shields.io/npm/v/vite-plugin-windicss-theme.svg)](https://www.npmjs.com/package/vite-plugin-windicss-theme)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

> Access your WindiCSS theme and colors objects from a vite app.

&nbsp;

### Usage

tsconfig.json

```json
{
    "include": ["src", "windi.config.ts", "vite.config.ts"]
}
```

vite.config.ts

```ts
import windiCSS from 'vite-plugin-windicss'
import windiThemePlugin from 'vite-plugin-windicss-theme'
import windiTheme from './windi.config'

export default {
  plugins: [
    windiCSS(), 
    windiThemePlugin({config: "./windi.config.ts"})
  ]
};
 
```

component.tsx
  
```tsx
import {colors,theme} from 'virtual:windi-theme';
export const Root  = () => (
  <div>
    {JSON.stringify(colors,null,2)}
    <br/><br/><br/><br/>
    {JSON.stringify(theme,null,2)}
  </div>
);
```

import React from 'react';
import {colors,theme} from 'virtual:windi-theme';
export const Root  = () => <div>Hello<br/>{JSON.stringify(colors,null,2)}<br/><br/><br/><br/>{JSON.stringify(theme,null,2)}</div>

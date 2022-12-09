import { loadConfiguration, LoadConfigurationOptions } from '@windicss/config'
import type { Plugin } from 'vite'
import w from 'windicss'

export type PluginConfig = any
export default (options: LoadConfigurationOptions): Plugin => {
  let config = new w().allTheme;
  if(typeof process.env.VITEST === 'undefined'){
    const loaded = loadConfiguration(options);
    const config = new w(loaded.config).allTheme;
  }
  const vmId = 'virtual:windi-theme'
  const resolvedVMId = '\0' + vmId

  const v = JSON.stringify(config);
  return {
    name: 'windi-theme',
    resolveId: id => {
      if (id === vmId) return resolvedVMId
    },
    load: id => {
      if (id === resolvedVMId) return `const theme = ${v};
export default theme;
const {colors} = theme;
export { theme, colors }`;
    },
  }
}

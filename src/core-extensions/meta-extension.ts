import { commandInfo, optionInfo, getVersion, getDescription } from '../toolbox/meta-tools'
import { GluegunToolbox } from '../domain/toolbox'

export interface GluegunMeta {
  version: () => string
  description: () => string
  commandInfo: () => string[][]
  optionInfo: () => string[][]
}

/**
 * Extension that lets you learn more about the currently running CLI.
 *
 * @param toolbox The running toolbox.
 */
export default function attach(toolbox: GluegunToolbox): void {
  const meta: GluegunMeta = {
    version: () => getVersion(toolbox),
    description: () => getDescription(toolbox),
    commandInfo: () => commandInfo(toolbox),
    optionInfo: () => optionInfo(toolbox),
  }
  toolbox.meta = meta
}

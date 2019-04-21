import { exec as execWithCb } from 'child_process'
import { promisify } from 'util'
const exec = promisify(execWithCb)

export async function windowsWhich (name: string) {
  if (process.platform !== 'win32') return undefined
  const { stdout } = await exec(`where.exe ${name}`)
  return stdout
}

export async function linuxOrMacosWhich (name: string) {
  if (process.platform === 'win32') return undefined
  const { stdout } = await exec(`which ${name}`)
  return stdout
}

export default async function which (name: string) {
  try {
    return await linuxOrMacosWhich(name) || await windowsWhich(name)
  } catch(e) {
    return undefined
  }
}

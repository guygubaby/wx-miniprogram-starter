import { resolve } from 'path'
import { Parser } from 'htmlparser2'
import { readFileSync, readdirSync, writeFileSync } from 'fs-extra'

interface Context {
  avaliableComponents: string[]
  componentMap: Record<string, string[]>
}

const cwd = process.cwd()

const ctx: Context = {
  avaliableComponents: [],
  componentMap: {},
}

const getVantComponentsFromRawHtml = (rawHtml: string) => {
  const components: string[] = []

  const parser = new Parser({
    onopentag(name, _attribs, isImplied) {
      if (name.startsWith('van-') && !isImplied && !components.includes(name))
        components.push(name)
    },
  })

  parser.write(rawHtml)
  parser.end()

  return components
}

const getComponentPath = (componentName: string) => {
  return `@vant/weapp/${componentName}/index`
}

const getJsonPath = (id: string) => {
  const fileName = id.split('.')[0]
  return resolve(cwd, `miniprogram/pages/${fileName}.json`)
}

const persistComponents = (id: string, components: string[]) => {
  const jsonPath = getJsonPath(id)
  const json = readFileSync(jsonPath, 'utf-8')
  const jsonObj = JSON.parse(json)
  const { usingComponents } = jsonObj

  components.forEach((component) => {
    usingComponents[`van-${component}`] = getComponentPath(component)
  })

  jsonObj.usingComponents = usingComponents
  const newJson = JSON.stringify(jsonObj, null, 2)
  writeFileSync(jsonPath, newJson)
}

const applyComponents = (ctx: Context) => {
  const { componentMap, avaliableComponents } = ctx

  Object.entries(componentMap).forEach(([id, components]) => {
    const temp = components
      .map(com => com.replace('van-', ''))
      .filter(component => avaliableComponents.includes(component))
    temp.length && persistComponents(id, temp)
  })
}

const init = () => {
  const vantLibPath = 'miniprogram/miniprogram_npm/@vant/weapp'
  const vantPath = resolve(cwd, vantLibPath)
  const files = readdirSync(vantPath)

  ctx.avaliableComponents = files
}

const boostrap = () => {
  init()

  const rawHtml = readFileSync(resolve(cwd, 'miniprogram/pages/index/index.wxml'), 'utf-8')
  const vantComponents = getVantComponentsFromRawHtml(rawHtml)

  ctx.componentMap['index/index'] = vantComponents

  applyComponents(ctx)
}

boostrap()

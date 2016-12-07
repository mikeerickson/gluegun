const test = require('ava')
const Runtime = require('../../src/domain/runtime')
const loadPluginFromPackageJson = require('../../src/loaders/package-json-plugin-loader')

const createRuntime = () => {
  const r = new Runtime()
  r.directories.root = 'generated'
  r.addPlugin(loadPluginFromPackageJson(`${__dirname}/../fixtures/good-plugins/generate`))
  return r
}

test('generates a simple file', async t => {
  const context = await createRuntime().run('generate', 'simple')

  t.is(context.result, 'simple file\n')
})

test('supports props', async t => {
  const context = await createRuntime()
    .run('generate', 'props Greetings_and_salutations', { stars: 5 })

  t.falsy(context.error && context.error.message)
  t.is(context.result, `greetingsAndSalutations world
red
green
blue
*****
`)
})
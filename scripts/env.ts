import dot from 'dot-object'
import {config} from 'dotenv-flow'
import writeJsonFile from 'write-json-file'

const {parsed} = config()

const envs = dot.object(parsed as any)

async function run() {
  await writeJsonFile('./env.json', envs)
}

run()

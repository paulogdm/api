import writeJsonFile from 'write-json-file'

import env from '../lib/env'
// import dot from 'dot-object'
// import {config} from 'dotenv-flow'

// const {parsed} = config()

// const envs = dot.object(parsed?.functions ?? ({} as any))

const envs = {
  hasura: {
    url: env('FUNCTIONS_HASURA_URL'),
  },
}

async function run() {
  await writeJsonFile('./functions/env.json', envs)
}

run()

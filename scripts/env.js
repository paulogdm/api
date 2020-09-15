let envName = process.argv.slice(2)[0]
const ref = process.env.VERCEL_GITHUB_COMMIT_REF

if (ref && ref !== 'master') {
  envName = `${ref.toUpperCase()}_${envName}`
}

// eslint-disable-next-line no-console
console.log(process.env[envName])

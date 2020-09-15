module.exports = function env(name) {
  let envName = name
  const ref = process.env.VERCEL_GITHUB_COMMIT_REF

  if (ref && ref !== 'master') {
    envName = `${ref.toUpperCase()}_${envName}`
  }

  return process.env[envName]
}

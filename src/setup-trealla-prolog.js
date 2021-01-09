const core = require('@actions/core')
const {installTreallaProLog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const branch  = core.getInput('trealla-prolog-branch', {required: false})
  const version = core.getInput('trealla-prolog-version', {required: true})

  console.log(`##[group]Installing Trealla ProLog ${version}`)
  await installTreallaProLog(branch,version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@logtalk-actions/setup-trealla-prolog only supports Ubuntu Linux at this time'
    )
}

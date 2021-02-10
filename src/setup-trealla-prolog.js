const core = require('@actions/core')
const {installTreallaProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const branch  = core.getInput('trealla-prolog-branch', {required: false})
  const version = core.getInput('trealla-prolog-version', {required: true})

  console.log(`##[group]Installing Trealla Prolog ${version}`)
  await installTreallaProlog(branch,version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-trealla-prolog does not support Windows at this time'
    )
}

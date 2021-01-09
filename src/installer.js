const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installTreallaProLog}

/**
 * Install Trealla ProLog.
 *
 * @param {string} branch
 * @param {string} version
 */
async function installTreallaProLog(branch,version) {
  await exec(path.join(__dirname, 'install-trealla-prolog-ubuntu'), [branch,version])
}

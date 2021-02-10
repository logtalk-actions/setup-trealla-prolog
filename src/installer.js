const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installTreallaProlog}

/**
 * Install Trealla Prolog.
 *
 * @param {string} branch
 * @param {string} version
 */
async function installTreallaProlog(branch,version) {
  await exec(path.join(__dirname, 'install-trealla-prolog-ubuntu'), [branch,version])
}

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
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-trealla-prolog-darwin'), [])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-trealla-prolog-ubuntu'), [])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-trealla-prolog-windows'), [])
  }
}

function renderLicenseBadge(license) {
  switch(license) {
    case '':
      return '';

    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

    case 'BSD 3-Clause "New" or "Revised" License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';

    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';

    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

    case 'GNU Lesser General Public License v3.0':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';

    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

  }

}

function renderLicenseLink(license) {
  switch(license) {
    case '':
      return '';

    case 'Apache License 2.0':
      return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU General Public License v3.0':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';

    case 'MIT License':
      return '[MIT License](https://opensource.org/licenses/MIT)';

    case 'BSD 2-Clause "Simplified" License':
      return '[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)';

    case 'BSD 3-Clause "New" or "Revised" License':
      return '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)';

    case 'Boost Software License 1.0':
      return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';

    case 'Creative Commons Zero v1.0 Universal':
      return '[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)';

    case 'Eclipse Public License 2.0':
      return '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-1.0)';

    case 'GNU Affero General Public License v3.0':
      return '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)';

    case 'GNU General Public License v2.0':
      return '[GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';

    case 'GNU Lesser General Public License v3.0':
      return '[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)';

    case 'Mozilla Public License 2.0':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';

    case 'The Unlicense':
      return '[The Unlicense](http://unlicense.org/)';

  }
}

function generateMarkdown() {

  const table = `## Table of Contents \n\n 1. [Description](##Description) \n\n 2. [Installation](##Installation) \n\n 3. [Usage](##Usage) \n\n 4. [License](##License) \n\n 5. [Contribution](##Contribution) \n\n 6. [Tests](##Tests) \n\n 7. [Questions](##Questions)`

  return table

}

module.exports = {renderLicenseBadge, renderLicenseLink, generateMarkdown};

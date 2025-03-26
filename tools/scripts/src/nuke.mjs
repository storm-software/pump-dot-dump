/*-------------------------------------------------------------------

            ⚡ Storm Software - Monorepo Template

 This code was released as part of the Monorepo Template project. Monorepo Template
 is maintained by Storm Software under the Apache-2.0 License, and is
 free for commercial and private use. For more information, please visit
 our licensing page.

 Website:         https://stormsoftware.com
 Repository:      https://github.com/storm-software/monorepo-template
 Documentation:   https://stormsoftware.com/projects/monorepo-template/docs
 Contact:         https://stormsoftware.com/contact
 License:         https://stormsoftware.com/projects/monorepo-template/license

 -------------------------------------------------------------------*/

import { $, chalk, echo, usePwsh } from "zx";

usePwsh();

try {
  await $`pnpm nx clear-cache`;
  await $`pnpm exec rimraf --no-interactive -- ./.nx/cache ./.nx/workspace-data ./dist ./tmp ./pnpm-lock.yaml`.timeout(
    `${5 * 60}s`
  );
  await $`pnpm exec rimraf --no-interactive --glob "./*/**/{node_modules,dist}" `.timeout(
    `${5 * 60}s`
  );
  await $`pnpm exec rimraf --no-interactive --glob "node_modules/!rimraf/**" `.timeout(
    `${5 * 60}s`
  );

  echo`${chalk.green("Successfully nuked the cache, node_modules, and dist folders")}`;
} catch (error) {
  echo`${chalk.red(`A failure occurred while nuking the monorepo:
${error?.message ? error.message : "No message could be found"}
`)}`;
}

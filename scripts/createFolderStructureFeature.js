// mkdir -p src/features/{signin,singup,logout}
import { exec } from 'child_process';

const runShell = async (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      } else {
        resolve(stdout ? stdout : stderr);
      }
    });
  });
};

const createFolderStructure = async () => {
  const feature = process.argv[2];
  const subFolders = ['api', 'components', 'composables', 'stores', 'types'];

  for (const folder of subFolders) {
    await runShell(`mkdir -p src/features/${feature}/${folder}`);
  }

  console.log(`Feature structure created for "${feature}"`);
};

createFolderStructure();

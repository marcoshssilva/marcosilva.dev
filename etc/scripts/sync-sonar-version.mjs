import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const packageJsonPath = path.join(rootDir, "package.json");
const sonarPropertiesPath = path.join(rootDir, "sonar-project.properties");

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const version = packageJson.version;

if (!version) {
  console.error("Erro: campo 'version' não encontrado no package.json.");
  process.exit(1);
}

const sonarContent = fs.readFileSync(sonarPropertiesPath, "utf8");
const updatedContent = /^sonar\.projectVersion=.*$/m.test(sonarContent)
  ? sonarContent.replace(/^sonar\.projectVersion=.*$/m, `sonar.projectVersion=${version}`)
  : `${sonarContent.trimEnd()}\nsonar.projectVersion=${version}\n`;

if (updatedContent !== sonarContent) {
  fs.writeFileSync(sonarPropertiesPath, updatedContent, "utf8");
  console.log(`sonar-project.properties atualizado para a versão ${version}`);
} else {
  console.log(`sonar-project.properties já está sincronizado na versão ${version}`);
}

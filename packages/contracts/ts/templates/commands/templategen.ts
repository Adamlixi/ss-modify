import path from "path";
import { getSrcDirectory } from "@latticexyz/common/foundry";
import { generateIndex, generateSystem, generateTemplates } from "../templategen";
import config from "../../../mud.config";
import { templates } from "../templates";
import {TemplatesConfig} from "../templateConfig";
import {renderTemplate} from "../renderTemplate";
import * as fs from "fs";

const srcDirectory = await getSrcDirectory();
const codegenDirectory = path.join(srcDirectory, config.codegenDirectory);

console.log(process.cwd())
const fileContent = fs.readFileSync("../test.json", 'utf8');
console.log(fileContent);

const ss = JSON.parse(fileContent)

export const changeHeroData = async (templates: TemplatesConfig<StoreConfig>, name: string, her: any) => {
    templates[name] = her
    console.log(templates)
};

await changeHeroData(templates, process.argv[2], ss)
await generateSystem(templates, codegenDirectory);
await generateIndex(templates, codegenDirectory);
await generateTemplates(templates, codegenDirectory);

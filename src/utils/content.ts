import {
  ExperiencesSchema,
  GeneralGrayMatterSchema,
  InfoSchema,
  ProjectSchema,
  ProjectsSchema,
} from '@/content/schemas';
import { readFile, readdir } from 'fs/promises';
import grayMatter from 'gray-matter';
import path from 'path';
import slugify from 'slugify';

const contentsDir = path.join(process.cwd(), 'src/content');

export async function getInfo() {
  const fileStr = await readFile(path.join(contentsDir, 'info.md'), 'utf-8');
  const grayMatterFile = grayMatter(fileStr);

  return InfoSchema.parse({
    ...grayMatterFile.data,
    content: grayMatterFile.content,
  });
}

export async function getAbout() {
  const fileStr = await readFile(path.join(contentsDir, 'about.md'), 'utf-8');
  const grayMatterFile = grayMatter(fileStr);

  return GeneralGrayMatterSchema.parse({
    ...grayMatterFile.data,
    content: grayMatterFile.content,
  });
}

export async function getExperiences() {
  const fileStr = await readFile(
    path.join(contentsDir, 'experiences.md'),
    'utf-8',
  );
  const grayMatterFile = grayMatter(fileStr);
  return ExperiencesSchema.parse(grayMatterFile.data.experiences);
}

async function getProjectFiles() {
  const projectsContentDir = path.join(contentsDir, 'projects');
  const fileNames = await readdir(projectsContentDir);

  return fileNames
    .filter((it) => /\.md$/.test(it))
    .map((filename) => ({
      filename,
      fullPath: path.join(projectsContentDir, filename),
    }));
}

async function getProject(fullPath: string) {
  const projectStr = await readFile(fullPath, 'utf-8');
  const grayMatterParsedProject = grayMatter(projectStr);

  return {
    ...grayMatterParsedProject.data,
    slug: slugify(grayMatterParsedProject.data?.name, { lower: true }),
    content: grayMatterParsedProject.content,
  };
}

export async function getProjects() {
  const projectFiles = await getProjectFiles();
  const projects = await Promise.all(
    projectFiles.map((it) => getProject(it.fullPath)),
  );

  const parsedProjects = await ProjectsSchema.parseAsync(projects);

  return parsedProjects.sort((a, b) =>
    a.startDate < b.startDate ? 1 : a.startDate > b.startDate ? -1 : 0,
  );
}

import { ProjectSchema } from '@/content/types';
import { readFile, readdir } from 'fs/promises';
import grayMatter from 'gray-matter';
import path from 'path';
import slugify from 'slugify';

async function getProjectFiles() {
  const projectsContentDir = path.join(process.cwd(), 'src/content/projects');
  const fileNames = await readdir(projectsContentDir);
  return fileNames
    .filter((it) => /\.md$/.test(it))
    .map((filename) => ({
      filename,
      fullPath: path.join(projectsContentDir, filename),
    }));
}

export async function getProject(fullPath: string) {
  const projectStr = await readFile(fullPath, 'utf-8');

  const grayMatterParsedProject = grayMatter(projectStr);

  try {
    return ProjectSchema.parse({
      ...grayMatterParsedProject.data,
      slug: slugify(grayMatterParsedProject.data?.name, { lower: true }),
      content: grayMatterParsedProject.content,
    });
  } catch (err) {
    return null;
  }
}

export async function getProjects() {
  const projectFiles = await getProjectFiles();
  const projects = await Promise.all(
    projectFiles.map((it) => getProject(it.fullPath)),
  );

  // NOTE: because filter is not smart enough to return the correct type
  return projects
    .flatMap((it) => (it ? [it] : []))
    .sort((a, b) =>
      a.startDate < b.startDate ? 1 : a.startDate > b.startDate ? -1 : 0,
    );
}

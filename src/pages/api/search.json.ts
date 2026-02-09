import { getCollection } from 'astro:content';
import { SITE } from '@/config';

export const GET = async () => {
  const researchProjects = await getCollection('research');

  const researchItems = researchProjects.map((project) => ({
    id: `research-${project.id}`,
    title: project.data.title,
    description: project.data.description,
    url:
      project.data.directLink && project.data.link
        ? project.data.link
        : `/research/${project.id}`,
    kind: 'Research',
  }));

  const searchIndex = [
    ...researchItems,
    {
      id: 'publications-page',
      title: 'Publications',
      description: SITE.publicationsDescription,
      url: '/publications',
      kind: 'Page',
    },
  ];

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

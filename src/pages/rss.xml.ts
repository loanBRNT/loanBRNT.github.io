import rss from '@astrojs/rss';
import type { CollectionEntry } from 'astro:content';
import { SITE } from '@/config';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const researchProjects = await getCollection('research');

  const sortedProjects = researchProjects.sort(
    (a: CollectionEntry<'research'>, b: CollectionEntry<'research'>) => {
      const aDate = a.data.startDate || a.data.endDate || new Date(0);
      const bDate = b.data.startDate || b.data.endDate || new Date(0);
      return bDate.valueOf() - aDate.valueOf();
    }
  );

  return rss({
    title: `${SITE.title} Research`,
    description: SITE.desc,
    site: context.site || SITE.website,
    items: sortedProjects.map((project: CollectionEntry<'research'>) => ({
      title: project.data.title,
      pubDate: project.data.startDate || project.data.endDate || new Date(),
      description: project.data.description,
      link:
        project.data.directLink && project.data.link
          ? project.data.link
          : `/research/${project.id}/`,
      categories: project.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}

import { getWorks, getWorkBySlug, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

export async function getStaticPaths() {
  const works = await getWorks();
  
  return {
    paths: works.map((work: any) => ({
      params: { slug: work.slug.current },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const work = await getWorkBySlug(params.slug);
  
  return {
    props: {
      work,
    },
    revalidate: 60,
  };
}

const WorkDetail: React.FC<{ work: any }> = ({ work }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      <p className="text-xl mb-8">{work.client}</p>
      <Image
        src={urlFor(work.mainImage).url()}
        alt={work.title}
        width={1200}
        height={800}
        className="w-full h-auto mb-8"
      />
      <div className="prose max-w-none">
        <PortableText value={work.content} />
      </div>
    </div>
  );
};

export default WorkDetail;


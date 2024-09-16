import { getAllCategories } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Categories",
    description: "Browse all categories on the site.",
  };
}

export default async function Page() {
  const categories = await getAllCategories();

  return (
    <Section>
      <Container>
        <BackButton />
        <h2>All Categories</h2>
        <div className="  flex flex-row text-[50px]">
          {categories.map((category: any) => (
            <Link key={category.id} href={`/posts/?category=${category.id}`}>
              <div className="border border-black rounded-xl">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

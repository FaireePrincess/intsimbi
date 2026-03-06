import type { BlogPost } from "@/types/blogPost";

export const blogPosts: BlogPost[] = [
  {
    id: "drawings-preparation",
    slug: "how-to-prepare-drawings-for-steel-fabrication",
    title: "How to Prepare Drawings for Steel Fabrication",
    excerpt: "A practical checklist to help teams submit complete drawing packs and reduce RFQ delays.",
    publishDate: "2026-03-01",
    image: "/images/blog/drawings-for-steel-fab.svg",
    category: "Quoting",
    content: [
      "Clear drawing sets improve pricing accuracy and reduce fabrication risk.",
      "Include dimensions, material specifications, finishes, and connection details.",
      "Provide project timelines and site constraints upfront to improve planning."
    ],
    facebookSnippet: "Submitting drawings this week? Use this checklist to avoid quote delays and rework."
  },
  {
    id: "steel-vs-concrete",
    slug: "structural-steel-vs-concrete-construction",
    title: "Structural Steel vs Concrete Construction",
    excerpt: "Comparing speed, flexibility, and lifecycle considerations for commercial projects.",
    publishDate: "2026-02-20",
    image: "/images/blog/steel-vs-concrete.svg",
    category: "Structural Steel",
    content: [
      "Steel often supports faster program timelines with off-site fabrication.",
      "Concrete can perform well depending on project scale and design requirements.",
      "Evaluate long-term maintenance and use-case before committing."
    ],
    facebookSnippet: "Steel or concrete? Here are the practical tradeoffs we discuss with clients."
  },
  {
    id: "fabrication-costs",
    slug: "what-affects-steel-fabrication-costs",
    title: "What Affects Steel Fabrication Costs",
    excerpt: "Key pricing factors that influence quotations and how to control scope risk.",
    publishDate: "2026-02-10",
    image: "/images/blog/steel-fabrication-costs.svg",
    category: "Pricing",
    content: [
      "Material grade and availability can shift project budgets significantly.",
      "Complexity in detailing and installation access affect labor and timelines.",
      "Early coordination helps avoid costly late-stage scope changes."
    ],
    facebookSnippet: "Need a realistic steel fabrication budget? These are the cost drivers that matter most."
  },
  {
    id: "stainless-kitchens",
    slug: "stainless-steel-fabrication-for-commercial-kitchens",
    title: "Stainless Steel Fabrication for Commercial Kitchens",
    excerpt: "Design and fabrication considerations for hygienic, high-throughput kitchen environments.",
    publishDate: "2026-01-28",
    image: "/images/blog/stainless-kitchens.svg",
    category: "Stainless Steel",
    content: [
      "Surface finish and drainage details affect hygiene and maintenance outcomes.",
      "Workflow-driven layouts improve safety and operational speed.",
      "Fabrication precision shortens installation windows in live projects."
    ],
    facebookSnippet: "Planning a kitchen fit-out? Stainless design choices can impact hygiene and speed."
  },
  {
    id: "choose-fabricator",
    slug: "choosing-a-steel-fabrication-company-in-the-western-cape",
    title: "Choosing a Steel Fabrication Company in the Western Cape",
    excerpt: "What to evaluate when selecting a fabrication partner for quality and delivery confidence.",
    publishDate: "2026-01-15",
    image: "/images/blog/choosing-fabricator-wc.svg",
    category: "Procurement",
    content: [
      "Check technical capability across structural, stainless, and custom work.",
      "Review quality processes, project examples, and communication reliability.",
      "Strong local coordination is critical for schedule-sensitive projects."
    ],
    facebookSnippet: "Selecting a steel fabrication partner? Here is a practical shortlist of what to check first."
  }
];

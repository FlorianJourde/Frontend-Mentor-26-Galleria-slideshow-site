import Artworks from "@/data/data.json";
import Link from "next/link";
import convertToSlug from '@/utils/convertToSlug'
import Portfolio from "@/components/Portfolio/page";

export default function Home() {

  return (
    <main>
        <Portfolio />
    </main >
  );
}

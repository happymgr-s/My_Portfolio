import Image from "@/components/ui/Image";
import Title from "@/components/ui/title";
import { Skills } from "./types";
import SkillCard from "@/components/modules/SkillCard";

export default function Home() {
  const skills: Skills[] = [
    {
      title: "Next.JS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.JSの画像",
    },
    {
      title: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "Reactの画像",
    },
    {
      title: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScriptの画像",
    },
    {
      title: "Sass",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      alt: "Sassの画像",
    },
    {
      title: "tailwindCSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      alt: "tailwindCSSの画像",
    },
    {
      title: "Jest",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      alt: "Jestの画像",
    },
    {
      title: "Firebase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      alt: "Firebaseの画像",
    },
    // { title: "SupaBase", src: "supabase-icon.svg", alt: "supabaseの画像" },
    {
      title: "Gulp",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg",
      alt: "Gulpの画像",
    },
    {
      title: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Gitの画像",
    },
    {
      title: "Python（勉強中）",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "pythonの画像",
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-36">
        <div>
          <Title>自己紹介</Title>
          <div className="flex items-start gap-16">
            <div className="flex flex-col items-center gap-4 min-w-fit">
              <Image
                divClassName="w-24 border-2 border-solid border-slate-500 rounded-full"
                src="猫.png"
                alt="プロフィール画像"
              />
              <p className="text-sm">わっしょいもぐら侍</p>
            </div>
            <p className=" leading-loose">
              わっしょいもぐら侍です。埼玉県在住、24歳、エンジニア歴一年の駆け出しエンジニアです。得意な分野はフロントエンドです。現在、バックエンド・データベースも勉強中。
              このサイトは、Next.JS・React・TypeScript・SupaBase・shadcn・tailwindCSSを用いて制作しています。
            </p>
          </div>
        </div>

        <div>
          <Title>経歴</Title>
          <div className="flex flex-col gap-12">
            <p>
              2020年、地元の市役所に入社。鳥獣対策や、森林整備の事業を主に担当する。
            </p>
            <p>↓</p>
            <p>
              高頻度の熊対応により事務作業が追いつかなくなり、改善策としてExcelVBAを学習。業務改善に大きく貢献。これを機にプログラミングに興味を持ち、独学で学習に励む。
            </p>
            <p>↓</p>
            <p>
              2022年、地元を離れて上京。東京のIT企業に転職。SESとして案件をこなす。
            </p>
            <p>↓</p>
            <p>now）スキルアップも兼ねて副業サイトで案件受注。</p>
          </div>
        </div>

        <div>
          <Title>スキル</Title>
          <ul className="grid grid-cols-5 gap-6">
            {skills.map((skill) => (
              <li>
                <SkillCard
                  title={skill.title}
                  src={skill.src}
                  alt={skill.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

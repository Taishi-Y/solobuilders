import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Code2, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-primary/30 to-cyan-600/30 blur-3xl" />
        <div className="container relative px-4 py-12 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              個人開発者のためのナレッジベース
            </div>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold md:text-5xl lg:text-7xl">
              開発の知見を共有し
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
                {' '}コミュニティで成長
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-xl">
              SoloBuilders.jpは、個人開発者のための知見共有プラットフォーム。
              あなたの経験を共有し、他の開発者から学び、共に成長しましょう。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/articles">
                  記事を読む
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/write">
                  記事を書く
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <Code2 className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">技術共有</h3>
            <p className="mt-2 text-muted-foreground">
              開発で得た技術的な知見を共有し、コミュニティ全体のスキル向上に貢献できます。
            </p>
          </Card>
          <Card className="p-6">
            <Rocket className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">プロジェクト展開</h3>
            <p className="mt-2 text-muted-foreground">
              あなたの個人開発プロジェクトを紹介し、フィードバックを得ることができます。
            </p>
          </Card>
          <Card className="p-6">
            <TrendingUp className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-xl font-bold">成長機会</h3>
            <p className="mt-2 text-muted-foreground">
              他の開発者の経験から学び、自身のスキルを向上させる機会を得られます。
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
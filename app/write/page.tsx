"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MarkdownPreview } from "@/components/markdown-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { PencilLine, Eye } from "lucide-react";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement article submission
    console.log({ title, content });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">記事を書く</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              タイトル
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="記事のタイトルを入力"
              className="max-w-2xl"
            />
          </div>
        </div>

        <Tabs defaultValue="write" className="max-w-4xl">
          <TabsList>
            <TabsTrigger value="write" className="flex items-center">
              <PencilLine className="w-4 h-4 mr-2" />
              編集
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              プレビュー
            </TabsTrigger>
          </TabsList>
          <Card className="mt-4 border-t-0 rounded-t-none min-h-[500px]">
            <CardContent className="p-4">
              <TabsContent value="write" className="mt-0">
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Markdownで記事を書く"
                  className="min-h-[500px] font-mono"
                />
              </TabsContent>
              <TabsContent value="preview" className="mt-0">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <MarkdownPreview content={content} />
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>

        <div className="mt-6 flex gap-4">
          <Button type="submit">投稿する</Button>
          <Button variant="outline" type="button">
            下書き保存
          </Button>
        </div>
      </form>
    </div>
  );
}
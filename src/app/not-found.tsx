import React from "react";
import Button from "@/components/buttons/Button";
import PageContainer from "@/components/base/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="w-full h-150 flex flex-col justify-center items-center text-center py-20 ">
        <h1 className="text-4xl font-bold mb-5">404</h1>
        <p className="mb-10">お探しのページは見つかりませんでした。</p>
        <p>このページはすでに削除されたか、移動した可能性があります。</p>
        <Button href="/" className="mt-5">
          ホームに戻る
        </Button>
      </div>
    </PageContainer>
  );
}

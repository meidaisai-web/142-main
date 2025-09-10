import Button from '@/components/buttons/Button';
import React from 'react';

export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-center py-20">
            <h1 className="text-4xl font-bold mb-5">404</h1>
            <p className="mb-10">お探しのページは見つかりませんでした。</p>
            <p>このページはすでに削除されたか、移動した可能性があります。</p>
            <Button href="/" className="mt-5">
                ホームに戻る
            </Button>
        </div>
    );
}
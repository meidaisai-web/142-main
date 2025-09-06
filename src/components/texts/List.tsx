import React, { ReactNode, CSSProperties, isValidElement, Children, cloneElement } from "react";
import Text from "./Text";

// ListItemを子要素に持つことを想定
// Listの中にListを入れ子にすることも可能
// 入れ子にすると自動的にインデントされる

// markは行頭文字を指定
// numberedは番号付きリストにするかどうか

// 使い方の例
/*
<List mark="・">
    <ListItem>リストアイテム1</ListItem>
    <ListItem>リストアイテム2</ListItem>
    <ListItem>リストアイテム3</ListItem>
    <Text>リストアイテム4の説明文。Textコンポーネントを使うと、リストの文字に揃うようにインデントされる。</Text>
    <List numbered>
        <ListItem>入れ子のリストアイテム1</ListItem>
        <ListItem>入れ子のリストアイテム2</ListItem>
    </List>
    <List alphabetic>
        <ListItem>入れ子のリストアイテムA</ListItem>
        <ListItem>入れ子のリストアイテムB</ListItem>
    </List>
</List>
*/

// ListItem は単純に p をラップ
interface ListItemProps {
    className?: string;
    children: ReactNode;
}
export function ListItem({ children, className }: ListItemProps) {
    return <p className={className}>{children}</p>;
};

// List コンポーネント
interface ListProps {
    children: ReactNode;
    mark?: string; // カスタムマーク
    numbered?: boolean;
    alphabetic?: boolean;
    className?: string;
}

export function List({ children, mark, numbered, alphabetic, className }: ListProps) {
    let listCount = 0;
    // 行頭文字の決定
    function listMark(index: number) {
        if (mark) {
            return mark;
        } else if (numbered) {
            return `${index}.`;
        } else if (alphabetic) {
            return String.fromCharCode(96 + index) + "."; // 97は'a'のASCIIコード
        } else {
            return ""; // デフォルトはなし
        }
    }

    return (
        <ul className={`mb-6 ${className}`}>
            {Children.map(children, (child) => {

                if (isValidElement(child) && child.type === ListItem) {
                    listCount++;
                    // 子要素をコピーして、先頭にマークを追加
                    const element = child as React.ReactElement<any>;
                    return cloneElement(element, {
                        ...element.props,
                        children: (
                            <li className="list-none flex items-start mb-1">
                                <span className="mr-1">{listMark(listCount)}</span>
                                <span>{element.props.children}</span>
                            </li>
                        ),
                    });
                }

                if (isValidElement(child) && child.type === List) {
                    // Listコンポーネントが入れ子になっている場合、インデントを加える
                    return (
                        <div className="ml-4">
                            {child}
                        </div>
                    )
                }

                // Textコンポーネントが使用された場合、文字に揃うようにインデント調整
                if (isValidElement(child) && child.type === Text) {
                    return (
                        <div className={`ml-4 pb-6`}>
                            {child}
                        </div>
                    );
                }

                // 通常のテキストノードでもTextコンポーネント風の調整を適用
                if (typeof child === "string" && child.trim()) {
                    return (
                        <div className="ml-4 pb-6">
                            <p>{child}</p>
                        </div>
                    );
                }

                // それ以外はそのまま返す
                return child;
            })}
        </ul>
    );
};
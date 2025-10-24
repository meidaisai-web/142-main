const MeichanSection = () => {
    return (
        <div className="mt-10 relative">
            <div className="absolute border-secondary border-4 rotate-3 rounded-3xl max-w-4xl w-full left-1/2 -translate-x-1/2 inset-y-0"></div>
            <div className="relative rounded-3xl border-accent border-4 bg-white flex flex-col items-center gap-5 w-full max-w-4xl mx-auto">
                <div className="text-primary font-bold text-2xl mt-5">---Meidaisai Championship---</div>
                <div className="text-black font-bold text-center">
                    <div>明大祭のチャンピオンに輝くのは誰だ！</div>
                    <div>企画詳細ページから投票お待ちしています！！</div>
                </div>
                <a className="rounded-xl bg-secondary hover:bg-secondary-700 mb-5 max-w-xs w-full text-sm text-center py-2 transition-colors duration-200" href="/champ">詳しくはこちら</a>
            </div>
        </div>
    )
}

export default MeichanSection
import Image from "next/image";

interface CheckboxProps {
    label: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
}

export default function Checkbox({ label, checked, setChecked }: CheckboxProps) {
    return (
        <div className="flex items-center gap-x-3 cursor-pointer select-none py-1" onClick={() => setChecked(!checked)}>
            <div className={`h-6 w-6 rounded-sm border-2 border-accent ${checked ? 'bg-accent' : 'bg-transparent'}`} >
                {checked &&
                    <Image src='/images/svg/check-secondary.svg' alt='' width={20} height={20} className="w-5 h-5"  />
                }
            </div>
            <p className="font-medium">{label}</p>
        </div>
    )
}
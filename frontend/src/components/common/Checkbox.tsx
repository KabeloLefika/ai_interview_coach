interface CheckboxProps{
    checked: boolean;
    onChange: (checked:boolean) => void;
    label: string;
}

export default function Checkbox({
    checked, onChange,label,
}:CheckboxProps){
    return(
        <label className="flex items-start gap-3 text-sm text-gray-300">

            <input 
                type="checkbox"
                checked = {checked}
                onChange={(e) => onChange(e.target.checked)}
                className="mt-1 h-5 w-5 accent-[#93CD0C]"
            />
            <span>{label}</span>
        </label>
    );
}
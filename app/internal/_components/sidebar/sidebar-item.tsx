import Chip, { TChipStyle } from "../chip/chip";
import IconView, { TIconName } from "../icon-view/icon-view";

export default function SidebarItem(
    {
        iconName,
        itemLabel,
        chip,
        isOpen,
        isSelected,
        onClick = () => {},
    }:{
        iconName:TIconName,
        itemLabel:string,
        chip?:{severity:TChipStyle,chipLabel:string},
        isOpen:boolean,
        isSelected?:boolean
        onClick?:() => void,
    }){
    return (
        <div onClick={onClick} className={`flex flex-row items-center cursor-pointer gap-4 py-2 px-2 rounded-md duration-200 ${isSelected ? 'bg-blue-100':'hover:bg-slate-200'}`}>
            <IconView iconName={iconName} isSelected={isSelected} strokeWidth={1.5}></IconView>
            {isOpen && <p className={`duration-200 ${isSelected ? 'text-blue-500 font-medium':'text-slate-800 font-light'}`}>{itemLabel}</p>}
            {typeof chip !== 'undefined' && isOpen && <Chip severity='purple' chipLabel='Beta'></Chip>}
        </div>
    )
}
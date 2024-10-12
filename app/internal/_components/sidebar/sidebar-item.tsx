import Chip, { TChipStyle } from "../chip/chip";
import IconView, { TIconName } from "../icon-view/icon-view";

export default function SidebarItem({iconName,itemLabel,chip}:{iconName:TIconName,itemLabel:string,chip?:{severity:TChipStyle,chipLabel:string}}){
    return (
        <div className="flex flex-row items-center cursor-pointer gap-4 py-2 px-2 rounded-md hover:bg-slate-200 duration-200">
            <IconView iconName={iconName}></IconView>
            <p className="text-slate-800">{itemLabel}</p>
            {typeof chip !== 'undefined' ? <Chip severity='purple' chipLabel='Beta'></Chip> : ''}
        </div>
    )
}
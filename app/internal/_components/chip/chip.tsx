export const chipStyle:{purple:{chip:string,text:string}} = {
    'purple':{
        chip:'bg-purple-300',
        text:'text-violet-600'
    },
};

export type TChipStyle = keyof typeof chipStyle;

const Chip = ({chipLabel,severity}:{chipLabel:string,severity:TChipStyle}) => {


    return(
        <div className={`px-2 rounded-lg ${chipStyle[severity].chip}`}>
            <p className={`font-semibold ${chipStyle[severity].text}`}>
                {chipLabel}
            </p>
        </div>
    )
};

export default Chip;
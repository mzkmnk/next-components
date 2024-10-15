import CompositionSidebar from "../_components/composition-sidebar/CompositionSidebar";
import { TIconName } from "../_components/icon-view/icon-view";

const Page = () => {

    const sidebarItems:{
        label:string;
        iconName:TIconName
    }[] = [
        {
            label:'github',
            iconName:'githubIcon'
        },
        {
            label:'Twitter',
            iconName:'sidebar',
        },
        {
            label:'Instagram',
            iconName:'sidebar'
        },
        {
            label:'Youtube',
            iconName:'sidebar',
        }
    ];

    return (
        <div className="w-screen h-screen">
            <CompositionSidebar sidebarItems={sidebarItems}></CompositionSidebar>
        </div>
    )
};

export default Page;
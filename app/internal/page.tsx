import Sidebar from './_components/sidebar/sidebar';

export default function Internal(){
    return (
        <div className="w-screen h-screen flex flex-row">
            <Sidebar></Sidebar>
            <div>
                <h3>Content</h3>
            </div>
        </div>
    );
}
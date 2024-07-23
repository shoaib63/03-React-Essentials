export default function TabButton({children}) {

    function onClick(){
        console.log("Test");
    }

    return(
        <li><button onClick={onClick}>{children}</button></li>
    );
}
// an initial section shown on the homepage when the user is not authenticated (signed in)
export default function InitialPage(){
    return(
    <div className="initial-screen">
        <i className="fa-solid fa-circle-user initial-icon"></i>
        <h1 className="initial-text">Log-in to view the content</h1>
        </div>
)
}
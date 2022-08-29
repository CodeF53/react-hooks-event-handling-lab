const log = log => console.log(log);

// Code EyesOnMe Component Here
function EyesOnMe() {
    return <button onFocus={()=>{log("Good!")}} onBlur={()=>{log("Hey! Eyes on me!")}}>Eyes on me</button>
}

export default EyesOnMe;
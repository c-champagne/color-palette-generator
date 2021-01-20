const Color = props => {
    //Our props are set for each color box in the .map() method used in our render from App.js
    let { color, toggle } = props; //defining props.color and props.toggle as color(contains our hex color and lock state) and toggle (contains our toggleLock() method)
    let { hex, isLocked } = color; //color here is our props.color from above. Defining color.hex and color.isLocked as hex and isLocked

    return (
        //Creating a div and setting the backgroundColor of our div to the hex value from color (props.color) above
        <div style={{ backgroundColor: hex }} className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{hex}</h1> {/* Setting the text of our box to our current hex value from color (props.color) */}
            
            {/* Our Lock/Unlock Button */}
            <button onClick={toggle} className={isLocked ? 'btn btn-dark' : 'btn btn-outline-dark'}>{isLocked ? 'UNLOCK' : 'LOCK'}</button>
           {/*  This button calls our toggleLock() method from App.js */}
           {/* Using ternary to set className for fun Bootstrap styling */}
           {/* Using ternary to conditionally render the text for our button */}
        </div>
    )
}
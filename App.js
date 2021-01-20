class App extends React.Component {  //class component
    constructor(props) {
        super(props);
        let initialState = {  //creating our initial state, which holds an array named "colors" in which each object will be the values for one of our colored boxes on the screen"
            colors: [
                {hex: "#54c06c", isLocked: false},
                {hex: "#e4d623", isLocked: false},
                {hex: "#b5453f", isLocked: false},
                {hex: "#e8630c", isLocked: false},
                {hex: "#5d1170", isLocked: false}
            ]
        }

        this.state = initialState;  //setting our state to our defined initialState from above
    }

    toggleLock(i) {  //method we are creating for which will be used to change the isLocked property that is stored in our state above 
        let newColors = this.state.colors.map((color, index) => {  //using map to create a new state
            if (i === index) { //looking through our colors array to only update the color box that was clicked on/selected
                return {
                    ...color, //spread operator to copy all of the properties of our state
                    isLocked: !color.isLocked //flipping our boolean for isLocked. This sets it to the opposite of whatever its current value is.
                }
            } else {
                return color //for boxes we didn't click on, simply returning them as they already were
            }
        })

        this.setState({ //updating our state with setState to reflect the new state of isLocked for the box we clicked on
            colors: newColors 
        });
    }

    randomize() {  //method we are creating to randomize the colors of the color boxes
        let newColors = this.state.colors.map(color => {  //using map to create a new state
            if (!color.isLocked) { //checking to see if color is not locked.  We don't want to change our locked boxes.
                return {
                    ...color, //spread operator to copy all of the properties of our state
                    hex: '#' + Math.floor(Math.random() * 16777215).toString(16) //updating our hex using some code that generates a random hex id.  Don't stress about writing this from scratch - Google it!
                }
            } else { //for boxes that were locked, we return the color they already were
                return color
            }
        })

        this.setState({ //updating our state with setState to reflect the new colors
            colors: newColors
        });
    }

    render() {
        return (
            <div>
               {/*  Our Randomize Colors Button */}
                <div className="text-center bg-dark fixed-top">
                    <button onClick={() => this.randomize()} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>
                </div>


                {/* Container for our color boxes.  All colors boxes will be rendered as separate divs within this div*/}
                <div className="w-100 d-flex" style={{height: "100vh"}}>
                    {
                        //Using .map() to bring in a Color component for each object in our state(the colors array)
                        this.state.colors.map((color, i) => <Color color={color} key={i} toggle={() => this.toggleLock(i)}/>)
                        //Above, the color (from our state) of our current object within our array, is passed as a prop (prop.color) to our Color component
                        //Passing our toggleLock() method as a prop (prop.toggle), so that we can call it when we click the button in our Color component
                   }
                </div>
            </div>
        )
    }
}

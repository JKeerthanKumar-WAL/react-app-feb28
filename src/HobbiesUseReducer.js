import { useReducer } from "react";
import HobbieReducer from "./HobbieReducer";

const HobbiesUseReducer = () => {
    const initialState = ["Initial Hobby 1", "Initial Hobby 2"];
    const [state, dispatch] = useReducer(HobbieReducer, initialState);
    const addHobby = (event) => {
        event.preventDefault();
        dispatch({ type: "add", payload: event.target.hobby.value });
    }
    const clearHobby = () => {
        dispatch({ type: "clear" })
    }
    return (
        <div className="App-div">
            <h1>Hobbies</h1>
            <form onSubmit={addHobby}>
                <b>Enter a Hobby :  </b><input type="text" name="hobby" /><br />
                <button><b>Add</b></button>
            </form>
            <button onClick={clearHobby}><b>Clear All</b></button>
            <div className="divTwo">
                <table>
                    <tr>
                        <td><b>Serial No</b></td>
                        <td><b>Hobby</b></td>
                        <td><b>Button</b></td>
                    </tr>
                    {state.map((val, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{val}</td>
                                <td><button onClick={() => { dispatch({ type: "delete", payload: index }) }}><b>Delete</b></button></td>
                            </tr>
                        )
                    })}
                </table>
            </div>

        </div>
    );
};
export default HobbiesUseReducer;
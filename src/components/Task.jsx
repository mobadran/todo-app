import { useState } from "react";
import CheckBox from "/src/components/CheckBox";
import Button from "/src/components/Button";

function Task(props) {
    const [boxChecked, setBoxChecked] = useState(props.checked);
    return (
        <li className="bg-gray-100 p-4 rounded flex gap-2 items-center flex-wrap justify-center">
            <div className="grow flex">
                <CheckBox
                    updateCheckedBox={props.updateCheckedBox}
                    id={props.id}
                    boxChecked={boxChecked}
                    setBoxChecked={setBoxChecked}
                />
                <p
                    className="grow text-wrap break-words hover:cursor-pointer px-2 peer-has-[input:checked]:line-through"
                    onClick={(e) => {
                        setBoxChecked(prevState => {
                            props.updateCheckedBox(
                                props.id,
                                !prevState
                            );
                            return !prevState;
                        });
                    }}>
                    {props.task}
                </p>
            </div>
            <div className="flex gap-2">
                <Button
                    color="yellow"
                    icon="edit"
                    type="button"
                    onClick={(e) => props.editTask(props.id)}
                />
                {/* bg-yellow-400 shadow-yellow-500/20 hover:shadow-yellow-500/40 */}
                <Button
                    color="pink"
                    icon="trash"
                    type="button"
                    onClick={(e) => props.removeTask(props.id)}
                />
                {/* bg-pink-400 shadow-pink-500/20 hover:shadow-pink-500/40 */}
            </div>
        </li>
    );
}

export default Task;

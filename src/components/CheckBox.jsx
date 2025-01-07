// import { useState } from "react";

function CheckBox(props) {
    return (
        <label className="flex items-center cursor-pointer relative peer">
            <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800 focus:scale-110"
                checked={props.boxChecked}
                onChange={e => {
                    props.setBoxChecked(e.target.checked);
                    props.updateCheckedBox(props.id, e.target.checked);
                }}
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1">
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                </svg>
            </span>
        </label>
    );
}

export default CheckBox;

import React from 'react';
import { store } from "../../store/store";


export function Svg() {

const state = store.getState();

// @ts-ignore
    const url=state.logo.data.icons[0];
    return (
        <div className=" logo w-20 h-20">
            <object data={url}  className="logo" type="image/svg+xml">
                <h1> Svg</h1>
            </object>
        </div>
    );
}

export default Svg;
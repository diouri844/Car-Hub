import { MouseEventHandler } from "react";

export interface  CustomButtonProps{
    title:string;
    containerStyles?:string;
    btnType?:"button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
};



//define search manufacturer interface :

export interface SearchManuFacturerProps {
    manufacturer : string;
    setManufacturer: (manufacturer: string )=> void;
}
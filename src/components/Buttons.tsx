import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
    variant?: Variant
} & ComponentProps<"button">

// can pass className to use custom classnames along with the one defined in the function like if i want to add a separate color to while uisng Buttom component
// also uses tailwind merge library to merge together properties and essentialy it takes the last passed property and uses that one instead of the one defined in the component 
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
                getVariantStyles(variant),
                className,
            )} />
    );
}
// twMerge basically checks the properties in the order they are defined meaning the ones on the last if can will overwrite any clasing property defined above them  

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-violet-600 hover:bg-violet-500"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Invalid Variant: ${variant satisfies never}`)
    }
}


// we're just trying to define the type of data or argument that ButtonProps must receive, like here it should be an object with text which should be a string

// React node basically represents  all things react can render
// children: ReactNode,

// ":" is a Typescript Type annotaiton which basically checks if the object received in props mathces the type described in ButtonProps
// export function Button(props: ButtonProps) {
//     return <button>{props.text}</button>
//
// } 
// I just basically destructured my porp to make is more readable and understandable
// export function Button({ text }: ButtonProps) {

// i am using a special prop called children that store everything between the closing tags, to match with type described above 

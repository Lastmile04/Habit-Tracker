import type { ReactNode } from "react"

// we're just trying to define the type of data or argument that ButtonProps must receive, like here it should be an object with text which should be a string
type ButtonProps = {
    // React node basically represents  all things react can render
    children: ReactNode,
}
// ":" is a Typescript Type annotaiton which basically checks if the object received in props mathces the type described in ButtonProps
// export function Button(props: ButtonProps) {
//     return <button>{props.text}</button>
//
// } 
// I just basically destructured my porp to make is more readable and understandable
// export function Button({ text }: ButtonProps) {

// i am using a special prop called children that store everything between the closing tags, to match with type described above 
export function Button({ children }: ButtonProps) {
    return <button className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{children}</button>
}



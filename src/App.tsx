import { Header } from "./components/Header"

export default function App() {
    return (
        // mx: margin on the left and right of auto
        <div className="max w-2xl mx-auto p-4 flex flex-col">
            <Header></Header>
            <HabitForm></HabitForm>
        </div>
    )
}


function HabitForm() {
    return null;
}

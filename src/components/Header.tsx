import { format, isToday } from "date-fns";
import { useHabits } from "../context/useHabits"
import { Button } from "./Buttons"

type HeaderProps = {
    visibleDates: Date[]
    onNext: () => void
    onPrev: () => void
}

export function Header({ visibleDates, onNext, onPrev }: HeaderProps) {
    const { habits } = useHabits();

    // gives an array of all the ones that are currently done  
    const doneToday = habits.filter(h =>
        h.completions.some(c => isToday(c)),
    ).length;

    const dateRange = `${format(visibleDates[0], "MMM dd")} - ${format(visibleDates.at(-1)!, "MMM dd")}`
    return (
        <header className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold">Habit tracker</h1>
                <span className="text-zinc-400 text-sm">Habits: {doneToday}/{habits.length}</span>

            </div>

            <div className="flex flex-col gap-1 items-end">
                <span className="text-zinc-400 text-sm"> {dateRange}</span>
                <div className="flex items-center gap-3">
                    <Button onClick={onPrev}>Prev</Button>
                    <Button onClick={onNext} disabled={visibleDates.some(d => isToday(d))}>Next</Button>
                </div>
            </div>

        </header>
    )
}

import CountdownTimer from "../myComponents/CountdownTimer";

export default function Countdown() {
    const H_IN_MS = 74 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = new Date(
        "October 11, 2025 16:00:00"
    ).getTime();

    return (
        <div className="flex flex-col items-center lg:mt-40">
            <h1>Mark Your Calendar!</h1>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
    );
}

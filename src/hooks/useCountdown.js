import { useEffect, useMemo, useState } from "react";

import { getCountdown } from "../utils/countdown.js";

export function useCountdown(dateString) {
    const targetTime = useMemo(() => new Date(dateString).getTime(), [dateString]);
    const [timeLeft, setTimeLeft] = useState(() => getCountdown(targetTime));

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTimeLeft(getCountdown(targetTime));
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [targetTime]);

    return timeLeft;
}

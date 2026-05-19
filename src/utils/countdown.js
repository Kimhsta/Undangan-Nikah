export function getCountdown(targetTime) {
    const distance = targetTime - Date.now();

    if (distance <= 0) {
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };
    }

    return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            .toString()
            .padStart(2, "0"),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0"),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0"),
    };
}

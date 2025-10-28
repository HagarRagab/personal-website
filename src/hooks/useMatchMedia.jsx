import { useEffect, useState } from "react";

export function useMatchMedia(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChangeMedia = (e) => setMatches(e.matches);
        mediaQuery.addEventListener("change", handleChangeMedia);
        return () =>
            mediaQuery.removeEventListener("change", handleChangeMedia);
    }, [query]);

    return matches;
}

export function formatText(text: string, type: "lower" | "upper" | "title" = "lower"): string {
    switch (type) {
        case "upper":
            return text.toUpperCase();
        case "title":
            return text.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
        default:
            return text.toLowerCase();
    }
}
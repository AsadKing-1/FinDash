import { PALETTE } from "./palette";
function hashString(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
}
export function getCategoryColor(label: string) {
    const index = hashString(label) % PALETTE.length;
    return PALETTE[index];
}

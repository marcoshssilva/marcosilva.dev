export type SiteMenuItemButton = {
    title: string,
    key: number,
    color: "warning" | "inherit" | "primary" | "secondary" | "error" | "info" | "success",
    size: "large" | "small" | "medium",
    variant: "text" | "outlined" | "contained",
    hash: string
}

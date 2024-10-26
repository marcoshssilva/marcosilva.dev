import React from "react";

export type SiteMenuItemButton = {
    title: string,
    key: number,
    color: "warning" | "inherit" | "primary" | "secondary" | "error" | "info" | "success",
    size: "large" | "small" | "medium",
    variant: "text" | "outlined" | "contained",
    hash: string
}

export type SiteHeaderButtonHello = {
    content: string,
    variant: "text" | "outlined" | "contained",
    color: "warning" | "inherit" | "primary" | "secondary" | "error" | "info" | "success"
    icon?: React.ReactNode
}

export type ProjectCardDataProps = {
    project: ProjectData
}

export type ProjectData = {
    image?: string,
    title: string,
    description: string,
    tags: string[],
    links: { icon: string, href: string }[],
}

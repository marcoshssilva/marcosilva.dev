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
    href?: string
}

export type ProjectCardDataProps = {
    project: ProjectData
}

export type ProjectCardButtonIconProps = {
    icon: string
}

export type ProjectGroupScrollareaProps = {
    children: React.ReactNode
}

export type ProjectData = {
    image?: string,
    title: string,
    description: string,
    tags: string[],
    links: { icon: string, href: string }[],
}

export type PixelActivity =
    | "coding"
    | "coffee"
    | "server"
    | "listening"
    | "celebrating"
    | "alert";

export type PixelActiveField = "none" | "nome" | "email" | "mensagem";

export type PixelDevCardProps = {
    nome?: string,
    email?: string,
    mensagem?: string,
    hasError?: boolean,
    isSuccess?: boolean,
}

export type ContactFormEventDetail = {
    nome: string,
    email: string,
    mensagem: string,
    hasError: boolean,
    isSuccess: boolean,
}

export type FormHudStatus = {
    label: string,
    color: string,
}

export type FooterNavLinkItem = {
    label: string,
    href: string,
}

export type FooterRepoLinkItem = {
    title: string,
    href: string,
}

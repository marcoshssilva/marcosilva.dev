import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/app/components/project-card/ProjectCard";
import { ProjectData } from "@/app/types";

const baseProject: ProjectData = {
  title: "Meu Projeto",
  description: "Descrição do projeto de teste",
  tags: ["React", "TypeScript", "Jest"],
  links: [],
};

describe("ProjectCard", () => {
  it("deve renderizar o título do projeto", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("Meu Projeto")).toBeInTheDocument();
  });

  it("deve renderizar a descrição do projeto", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("Descrição do projeto de teste")).toBeInTheDocument();
  });

  it("deve renderizar todas as tags do projeto", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/Jest/)).toBeInTheDocument();
  });

  it("deve renderizar ícone do GitHub quando o link é do tipo 'github'", () => {
    const project: ProjectData = {
      ...baseProject,
      links: [{ icon: "github", href: "https://github.com/usuario/repo" }],
    };
    render(<ProjectCard project={project} />);

    // GitHubIcon é renderizado como SVG com data-testid ou pode ser encontrado via botão
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://github.com/usuario/repo");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("deve renderizar ícone de website (LanguageIcon) quando o link não é 'github' (branch default)", () => {
    const project: ProjectData = {
      ...baseProject,
      links: [{ icon: "website", href: "https://meusite.com" }],
    };
    render(<ProjectCard project={project} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://meusite.com");
  });

  it("deve renderizar múltiplos links corretamente", () => {
    const project: ProjectData = {
      ...baseProject,
      links: [
        { icon: "github", href: "https://github.com/usuario/repo" },
        { icon: "website", href: "https://meusite.com" },
      ],
    };
    render(<ProjectCard project={project} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "https://github.com/usuario/repo");
    expect(links[1]).toHaveAttribute("href", "https://meusite.com");
  });

  it("deve renderizar sem links quando a lista está vazia", () => {
    render(<ProjectCard project={baseProject} />);
    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);
  });

  it("deve renderizar sem tags quando a lista está vazia", () => {
    const project: ProjectData = { ...baseProject, tags: [] };
    render(<ProjectCard project={project} />);
    expect(screen.queryByText(/React/)).not.toBeInTheDocument();
  });
});

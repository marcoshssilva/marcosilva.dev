export interface HeaderGroupRowComponentData {
  id: number;
  itens: HeaderGroupItemComponentData[];
}

export interface HeaderGroupItemComponentData {
  content: string;
}

export interface HeaderGroupLangRowComponentProps {
  value: HeaderGroupRowComponentData;
}

export interface HeaderGroupLangItemComponentProps {
  value: HeaderGroupItemComponentData;
}



export default function HeaderGroupLangsComponent() {
  const itens: HeaderGroupRowComponentData[] = [
    { 
      id: 1, 
      itens: [{ content: 'JavaScript'}, { content: 'Docker'}, { content: 'HTML'}, { content: 'Jasmine'}, { content: 'Hibernate'}, { content: 'Jenkins'}, { content: 'Git'}, { content: 'Ubuntu'}, { content: 'Oracle Linux'}, { content: 'Netdata'}]
    },
    { 
      id: 2, 
      itens: [{ content: 'TypeScript'}, { content: 'CSS'}, { content: 'Java'}, { content: 'JUnit'}, { content: 'Kubernetes'}, { content: 'Grafana'}, { content: 'Prometheus'}, { content: 'Nest'}, { content: 'RabbitMQ'}]
    },
    { 
      id: 3, 
      itens: [{ content: 'React'}, { content: 'Springboot'}, { content: 'RabbitMQ'}, { content: 'SonarQube'}, { content: 'Gitlab'}, { content: 'Github'}, { content: 'Java-EE'}, { content: 'Apache Kafka'}]
    },
    { 
      id: 4, 
      itens: [{ content: 'Angular'}, { content: 'JQuery'}, { content: 'Quarkus'}, { content: 'MySQL'}, { content: 'Redis'}, { content: 'Linux'}, { content: 'AWS'}, { content: 'Oracle-Cloud '}, { content: 'Jakarta'}]
    },
    { 
      id: 5, 
      itens: [{ content: 'Next-js'}, { content: 'Jest'}, { content: 'Spring-Cloud'}, { content: 'PostgreSQL'}, { content: 'MongoDB'}, { content: 'Podman'}, { content: 'Amazon S3'}, { content: 'SQL-Server'}, { content: 'Azure Cloud'}]
    }
  ];

  return (
    <div className={'header-group-langs-box'}>
      {itens.map(value => <HeaderGroupLangRowComponent key={value.id} value={value} />)}
      <div className='fade'/>
    </div>
  );
};

function HeaderGroupLangRowComponent({ value }: HeaderGroupLangRowComponentProps) {
  return <>
    <div className={'header-group-langs-row'}>
      { value.itens.map(item => <HeaderGroupLangItemComponent key={item.content} value={item}/>) }
    </div>
  </>;
}

function HeaderGroupLangItemComponent({ value }: HeaderGroupLangItemComponentProps) {
  return <>
    <div className={'header-group-langs-item'}>
      <span>#</span> {value.content}
    </div>   
  </>
}
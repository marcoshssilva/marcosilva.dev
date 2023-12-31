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
      itens: [{ content: 'javascript'}, { content: 'docker'}, { content: 'html'}, { content: 'jasmine'}, { content: 'hibernate'}, { content: 'jenkins'}, { content: 'git'}, { content: 'ubuntu'}, { content: 'oracle-linux'}, { content: 'netdata'}]
    },
    { 
      id: 2, 
      itens: [{ content: 'typescript'}, { content: 'css'}, { content: 'java'}, { content: 'junit'}, { content: 'kubernetes'}, { content: 'grafana'}, { content: 'prometheus'}, { content: 'nest'}, { content: 'rabbimq'}]
    },
    { 
      id: 3, 
      itens: [{ content: 'react'}, { content: 'springboot'}, { content: 'rabbimq'}, { content: 'sonarqube'}, { content: 'gitlab'}, { content: 'github'}, { content: 'java-ee'}, { content: 'kafka'}]
    },
    { 
      id: 4, 
      itens: [{ content: 'angular'}, { content: 'jquery'}, { content: 'quarkus'}, { content: 'mysql'}, { content: 'redis'}, { content: 'linux'}, { content: 'aws'}, { content: 'oracle-cloud '}, { content: 'jakarta'}]
    },
    { 
      id: 5, 
      itens: [{ content: 'nextjs'}, { content: 'jest'}, { content: 'spring-cloud'}, { content: 'postgresql'}, { content: 'mongodb'}, { content: 'podman'}, { content: 's3'}, { content: 'sql-server'}, { content: 'azure'}]
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
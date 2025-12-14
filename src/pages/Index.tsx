import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const landmarks = [
  {
    id: 1,
    name: 'Тбилиси',
    description: 'Столица Грузии с древней архитектурой',
    x: 50,
    y: 50,
    type: 'city'
  },
  {
    id: 2,
    name: 'Мцхета',
    description: 'Древняя столица и религиозный центр',
    x: 45,
    y: 48,
    type: 'heritage'
  },
  {
    id: 3,
    name: 'Казбеги',
    description: 'Горный регион с церковью Гергети',
    x: 55,
    y: 30,
    type: 'mountain'
  },
  {
    id: 4,
    name: 'Батуми',
    description: 'Черноморский курорт и порт',
    x: 20,
    y: 65,
    type: 'coast'
  },
  {
    id: 5,
    name: 'Сванетия',
    description: 'Горный регион с древними башнями',
    x: 30,
    y: 35,
    type: 'mountain'
  },
  {
    id: 6,
    name: 'Поти',
    description: 'Древний портовый город на Чёрном море',
    x: 25,
    y: 58,
    type: 'port'
  }
];

const sections = {
  history: {
    title: 'История',
    icon: 'BookOpen',
    content: [
      {
        period: 'Древняя Грузия',
        description: 'Грузинское государство возникло в IV веке до н.э. Колхидское и Иберийское царства были центрами древней культуры.'
      },
      {
        period: 'Золотой век',
        description: 'XII век - эпоха царицы Тамары. Расцвет культуры, искусства и литературы. Создание "Витязя в тигровой шкуре".'
      },
      {
        period: 'История Поти',
        description: 'Поти - древний портовый город на месте античного Фасиса. Здесь согласно легенде аргонавты искали золотое руно. С XIX века - важнейший черноморский порт Грузии.'
      },
      {
        period: 'Современность',
        description: 'С 1991 года Грузия - независимое государство. Сохранение древних традиций при развитии современной культуры.'
      }
    ]
  },
  culture: {
    title: 'Культура',
    icon: 'Palette',
    content: [
      {
        period: 'Полифоническое пение',
        description: 'Грузинское многоголосие входит в список ЮНЕСКО. Уникальная традиция исполнения песен в несколько голосов.'
      },
      {
        period: 'Танец',
        description: 'Картули, Хоруми, Лезгинка - традиционные танцы, демонстрирующие грацию и мужество исполнителей.'
      },
      {
        period: 'Литература',
        description: 'Грузинская письменность существует с V века. Шота Руставели - великий поэт XII века, автор национального эпоса.'
      }
    ]
  },
  traditions: {
    title: 'Традиции',
    icon: 'Heart',
    content: [
      {
        period: 'Супра',
        description: 'Грузинское застолье - целый ритуал с тамадой, тостами и обилием блюд. Важная часть культуры гостеприимства.'
      },
      {
        period: 'Виноделие',
        description: '8000 лет традиций виноделия. Метод квеври - уникальная технология выдержки вина в глиняных сосудах.'
      },
      {
        period: 'Гостеприимство',
        description: 'Гость в грузинском доме - священная персона. Традиция радушного приёма путников уходит корнями в древность.'
      }
    ]
  },
  cuisine: {
    title: 'Кухня',
    icon: 'UtensilsCrossed',
    content: [
      {
        period: 'Хачапури',
        description: 'Национальное блюдо - лепёшка с сыром. Аджарский хачапури в форме лодочки с яйцом - визитная карточка.'
      },
      {
        period: 'Хинкали',
        description: 'Сочные мясные пельмени с пряностями. Едят руками, придерживая за хвостик и выпивая бульон.'
      },
      {
        period: 'Вино и чача',
        description: 'Грузинские вина известны во всём мире. Чача - виноградная водка, традиционный крепкий напиток.'
      }
    ]
  }
};

export default function Index() {
  const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted))] to-[hsl(var(--background))]">
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/b79079f1-718a-4b5b-a1d3-5bff035bbbed/files/22669410-caf5-4a41-8233-1e284b7c208d.jpg')`,
          backgroundSize: '200px'
        }}
      />
      
      <div className="relative z-10">
        <header className="border-b border-[hsl(var(--border))] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-[hsl(var(--primary))] mb-2">Грузия</h1>
                <p className="text-[hsl(var(--muted-foreground))]">Информационный справочник о стране с древней историей</p>
              </div>
              <Icon name="Mountain" size={48} className="text-[hsl(var(--secondary))]" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 animate-fade-in">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[hsl(var(--secondary))]">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Map" size={32} className="text-[hsl(var(--primary))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--primary))]">Интерактивная карта</h2>
              </div>
              
              <div className="relative aspect-video bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl overflow-hidden border-4 border-[hsl(var(--secondary))]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-4xl">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <path
                        d="M 20 40 Q 35 20, 50 25 T 75 40 L 70 70 Q 50 75, 30 65 Z"
                        fill="hsl(var(--primary))"
                        opacity="0.3"
                        className="transition-all duration-300 hover:opacity-50"
                      />
                    </svg>
                    
                    {landmarks.map((landmark) => (
                      <button
                        key={landmark.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                        style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
                        onClick={() => setSelectedLandmark(landmark.id)}
                        onMouseEnter={() => setSelectedLandmark(landmark.id)}
                      >
                        <div className={`
                          w-6 h-6 rounded-full border-3 transition-all duration-300
                          ${selectedLandmark === landmark.id 
                            ? 'bg-[hsl(var(--secondary))] border-[hsl(var(--primary))] scale-150 shadow-lg' 
                            : 'bg-[hsl(var(--primary))] border-white scale-100 shadow-md'
                          }
                        `}>
                          <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-[hsl(var(--secondary))]" />
                        </div>
                        
                        <div className={`
                          absolute top-8 left-1/2 transform -translate-x-1/2 
                          bg-white px-4 py-2 rounded-lg shadow-xl border-2 border-[hsl(var(--secondary))]
                          transition-all duration-300 whitespace-nowrap
                          ${selectedLandmark === landmark.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                        `}>
                          <div className="font-bold text-[hsl(var(--primary))] mb-1">{landmark.name}</div>
                          <div className="text-sm text-[hsl(var(--muted-foreground))]">{landmark.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-6">
                {landmarks.map((landmark) => (
                  <button
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark.id)}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-300
                      ${selectedLandmark === landmark.id
                        ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] border-[hsl(var(--secondary))] shadow-lg scale-105'
                        : 'bg-white hover:bg-[hsl(var(--muted))] border-[hsl(var(--border))] hover:scale-105'
                      }
                    `}
                  >
                    <div className="font-semibold text-sm">{landmark.name}</div>
                  </button>
                ))}
              </div>
            </Card>
          </section>

          <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-white/90 backdrop-blur-sm">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-[hsl(var(--muted))] p-2 h-auto">
                  {Object.entries(sections).map(([key, section]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className="flex items-center gap-2 data-[state=active]:bg-[hsl(var(--primary))] data-[state=active]:text-[hsl(var(--primary-foreground))] py-3"
                    >
                      <Icon name={section.icon} size={20} />
                      <span className="font-semibold">{section.title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(sections).map(([key, section]) => (
                  <TabsContent key={key} value={key} className="mt-8">
                    <div className="grid gap-6 md:grid-cols-3">
                      {section.content.map((item, index) => (
                        <Card
                          key={index}
                          className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-[hsl(var(--secondary))] animate-scale-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
                            {item.period}
                          </h3>
                          <p className="text-[hsl(var(--foreground))] leading-relaxed">
                            {item.description}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>
          </section>

          <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="p-8 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url('https://cdn.poehali.dev/projects/b79079f1-718a-4b5b-a1d3-5bff035bbbed/files/6d36f1d2-f55c-41fd-afbd-433584032e2a.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Info" size={32} />
                  <h2 className="text-3xl font-bold">О Грузии</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={20} />
                      География
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      Грузия расположена на границе Европы и Азии, в Закавказье. Омывается Чёрным морем. 
                      Большую часть территории занимают горы Большого и Малого Кавказа.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Icon name="Users" size={20} />
                      Население
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                      Население около 3,7 млн человек. Тбилиси - столица с населением более 1 млн. 
                      Грузинский язык имеет уникальную письменность, известную с V века.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </main>

        <footer className="border-t border-[hsl(var(--border))] bg-white/80 backdrop-blur-sm mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-[hsl(var(--muted-foreground))]">
              <p className="font-semibold text-[hsl(var(--primary))]">Справочник о Грузии</p>
              <p className="text-sm mt-2">Исследуйте культуру, историю и традиции древней страны</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
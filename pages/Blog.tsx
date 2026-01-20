
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Il Futuro dell'IA nell'industria Farmaceutica",
      date: "Mar 15, 2025",
      excerpt: "Come l'intelligenza artificiale sta rivoluzionando i processi di ricerca e produzione...",
      image: "https://picsum.photos/seed/tech1/600/400"
    },
    {
      id: 2,
      title: "Transizione Digitale: Sfide e Opportunità",
      date: "Feb 28, 2025",
      excerpt: "Gestire il cambiamento in aziende consolidate richiede leadership e visione strategica...",
      image: "https://picsum.photos/seed/tech2/600/400"
    },
    {
        id: 3,
        title: "Dati al Centro: Essere una Data Driven Company",
        date: "Gen 10, 2025",
        excerpt: "Perché ogni decisione aziendale oggi deve basarsi su dati certi e infrastrutture solide...",
        image: "https://picsum.photos/seed/tech3/600/400"
      }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map(post => (
          <div key={post.id} className="group cursor-pointer">
            <div className="overflow-hidden mb-6 aspect-video">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-2">{post.date}</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

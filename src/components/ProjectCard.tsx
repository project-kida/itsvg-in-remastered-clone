
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
  color?: string;
}

const ProjectCard = ({ icon, title, description, link, color = 'bg-gray-100' }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center`}>
            <img src={icon} alt={title} className="w-5 h-5" />
          </div>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray hover:text-black transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

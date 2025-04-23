
import React from 'react';
import { Link } from 'lucide-react';

interface ProjectCardProps {
  icon: string;
  title: string;
  description?: string;
  domain: string;
  link?: string;
}

const ProjectCard = ({ icon, title, description, domain, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <img src={icon} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-blue-500">{domain}</p>
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Link size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

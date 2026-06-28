import { Calendar, Clock, User } from "lucide-react";
import { ResourceMetadata } from "@/lib/mdx";

const ArticleHeader = ({ metadata }: { metadata: ResourceMetadata }) => {
  return (
    <div className="mb-12 text-center max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-ocean/10 text-ocean uppercase tracking-wider border border-ocean/20">
          {metadata.category}
        </span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
        {metadata.title}
      </h1>
      
      <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
        {metadata.description}
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-ocean/20 flex items-center justify-center text-ocean">
                <User size={14} />
            </div>
            <span>{metadata.author}</span>
        </div>
        
        <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{new Date(metadata.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>

        {metadata.readingTime && (
            <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{metadata.readingTime}</span>
            </div>
        )}
      </div>

       {/* Separator Gradient */}
       <div className="h-px w-full max-w-xs mx-auto bg-linear-to-r from-transparent via-border to-transparent mt-12" />
    </div>
  );
};

export default ArticleHeader;

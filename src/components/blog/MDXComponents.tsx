import { Link } from "next-view-transitions";
import { MoveRight } from "lucide-react";
import NextImage from "next/image";
import { ComponentProps } from "react";

// Grade A+ Custom Components for MDX

const CustomLink = (props: ComponentProps<"a">) => {
  const href = props.href;

  if (!href) return <a {...props} />;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="text-ocean hover:text-ocean-light underline decoration-ocean/30 hover:decoration-ocean transition-all duration-300 font-medium" {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a className="text-muted-foreground hover:text-ocean transition-colors" {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" className="text-ocean hover:text-ocean-light font-medium" {...props} />;
};

const TipBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 p-6 rounded-2xl bg-ocean/5 border border-ocean/10 backdrop-blur-sm relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
       {/* Icon placeholder could go here */}
    </div>
    <div className="not-prose text-sm text-foreground/80 leading-relaxed font-medium">
      {children}
    </div>
  </div>
);

const ImportantBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 p-6 rounded-2xl bg-accent/5 border border-accent/10 backdrop-blur-sm relative overflow-hidden">
     <div className="not-prose text-sm text-foreground/80 leading-relaxed font-medium border-l-4 border-accent pl-4">
      {children}
    </div>
  </div>
);

const CTABlock = ({ title, description, label, href }: { title: string; description: string; label: string; href: string }) => (
  <div className="my-12 p-8 rounded-3xl bg-linear-to-br from-gray-900 to-black border border-border shadow-2xl relative overflow-hidden group text-center">
    <div className="absolute inset-0 bg-ocean/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">{title}</h3>
    <p className="text-gray-400 mb-6 max-w-lg mx-auto relative z-10">{description}</p>
    
    <Link 
      href={href} 
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 relative z-10"
    >
      {label}
      <MoveRight className="w-4 h-4" />
    </Link>
  </div>
);

const MDXComponents = {
  a: CustomLink,
  blockquote: (props: ComponentProps<"blockquote">) => <blockquote className="border-l-4 border-ocean pl-4 italic text-muted-foreground my-6" {...props} />,
  NextImage: (props: ComponentProps<typeof NextImage>) => <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-border"><NextImage {...props} /></div>,
  TipBlock,
  ImportantBlock,
  CTABlock,
};

export default MDXComponents;

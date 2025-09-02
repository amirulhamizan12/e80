import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <div className={`prose prose-lg max-w-none text-[#262624] leading-relaxed ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-medium text-[#262624] mb-4" style={{ fontFamily: 'RocaOne-Rg, sans-serif' }}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mb-4 text-[#262624]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-3 text-[#262624]">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mb-2 text-[#262624]">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-[#262624]">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 text-[#262624]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 text-[#262624]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-1 text-[#262624]">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[#262624]">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[#262624]">
              {children}
            </em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#262624] pl-4 italic mb-4 text-[#262624]">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[#262624]">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-[#262624]">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          hr: () => (
            <hr className="border-t border-gray-300 my-8" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

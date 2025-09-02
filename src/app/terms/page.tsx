import { promises as fs } from 'fs';
import path from 'path';
import MarkdownContent from '@/components/MarkdownContent';

export default async function TermsPage() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'src/app/terms/TERMS_OF_SERVICE.md');
  const markdownContent = await fs.readFile(filePath, 'utf8');

  return (
    <div className="font-sans min-h-screen" style={{ backgroundColor: '#FEFCF4' }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <MarkdownContent content={markdownContent} />
      </div>
    </div>
  );
}

import React from 'react';

/**
 * Formats chatbot message text with markdown-style formatting
 * Converts:
 * - **bold text** to <strong>
 * - Bullet points (• or -) to <ul><li>
 * - Numbered lists (1., 2., etc.) to <ol><li>
 * - Double line breaks to paragraphs
 * - Single line breaks within paragraphs preserved
 */
export function FormattedMessage({ content }) {
  if (!content) return null;

  const formatText = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let currentList = null;
    let currentListType = null;
    let currentParagraph = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join('\n');
        const formattedText = formatInlineStyles(paragraphText);
        elements.push(
          <p key={`p-${elements.length}`} className="mb-3 last:mb-0">
            {formattedText}
          </p>
        );
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (currentList && currentList.length > 0) {
        const ListTag = currentListType === 'ol' ? 'ol' : 'ul';
        const listClass = currentListType === 'ol' 
          ? 'list-decimal list-inside mb-3 space-y-1 ml-2' 
          : 'list-disc list-inside mb-3 space-y-1 ml-2';
        
        elements.push(
          <ListTag key={`list-${elements.length}`} className={listClass}>
            {currentList.map((item, idx) => (
              <li key={idx} className="text-white/90">
                {formatInlineStyles(item)}
              </li>
            ))}
          </ListTag>
        );
        currentList = null;
        currentListType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Empty line - flush current paragraph or list
      if (!trimmedLine) {
        flushList();
        flushParagraph();
        return;
      }

      // Detect numbered list (1., 2., etc.)
      const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);
      if (numberedMatch) {
        flushParagraph();
        if (currentListType !== 'ol') {
          flushList();
          currentList = [];
          currentListType = 'ol';
        }
        currentList.push(numberedMatch[2]);
        return;
      }

      // Detect bullet list (• or - or *)
      const bulletMatch = trimmedLine.match(/^[•\-\*]\s+(.+)$/);
      if (bulletMatch) {
        flushParagraph();
        if (currentListType !== 'ul') {
          flushList();
          currentList = [];
          currentListType = 'ul';
        }
        currentList.push(bulletMatch[1]);
        return;
      }

      // Regular text - add to paragraph
      flushList();
      currentParagraph.push(trimmedLine);
    });

    // Flush remaining content
    flushList();
    flushParagraph();

    return elements;
  };

  const formatInlineStyles = (text) => {
    // Split text by **bold** markers
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, index) => {
      // Check if this part is bold
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={index} className="font-bold text-white">{boldText}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return <div className="formatted-message">{formatText(content)}</div>;
}

// src/TiptapEditor.jsx
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
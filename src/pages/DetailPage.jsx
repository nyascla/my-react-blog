import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function DetailPage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}${id}.md`)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error fetching markdown:', error));
  }, [id]);

  return (
    <div className="detail-page">
      <h1>Detalle del Documento {id}</h1>
      <ReactMarkdown className="markdown-content">{content}</ReactMarkdown>    </div>
  );
}

export default DetailPage;

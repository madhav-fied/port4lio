import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
// @ts-ignore
import "@fontsource/jetbrains-mono";
import "./styles/globals.css"
import Contact from './pages/Contact.tsx';
import Lab from './pages/Lab.tsx';
import Gallery from './pages/Gallery.tsx';
import Articles from './pages/Articles.tsx';
import ArticleContent from './components/ArticleContent.tsx';
import LabItem from './components/LabItem.tsx';

import { labItems } from './content/lab/index.ts';
import { articles } from './content/articles/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/articles" element={<Articles />}>
          <Route path="latest" element={<Navigate to={articles[0].slug} replace />} />
          <Route path=":slug" element={<ArticleContent />} />
        </Route>

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/lab" element={<Lab />}>
          <Route path="latest" element={<Navigate to={labItems[0].slug} replace />} />
          <Route path=":slug" element={<LabItem />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

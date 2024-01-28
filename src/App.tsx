import { FC } from 'react';
import { TextRevealCardPreview } from './components/TextReveal';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <TextRevealCardPreview />
    </div>
  );
};

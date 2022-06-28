import { ReactNode } from 'react';
import { LazyMotion } from 'framer-motion';

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default);

type Props = {
  children: ReactNode;
};

export default function MotionLazyContainer({ children }: Props) {
  console.log('lazy motion wil be loading');
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}

import { useEffect, useState, useRef, RefObject } from 'react';
import { useAnimation, useInView as useFramerInView } from 'framer-motion';

type UseInViewOptions = {
  threshold?: number;
  useFramer?: boolean; // Flag to determine which implementation to use
};

type FramerInViewResult = {
  controls: ReturnType<typeof useAnimation>;
  inView: boolean;
};

type NativeInViewResult = [RefObject<HTMLElement>, boolean];

export const useInView = ({
  threshold = 0.1,
  useFramer = false,
}: UseInViewOptions): FramerInViewResult | NativeInViewResult => {
  if (useFramer) {
    // Framer Motion's useInView implementation
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useFramerInView(ref, { once: false, threshold });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);

    return { controls, inView, ref } as FramerInViewResult;
  } else {
    // Native Intersection Observer implementation
    const ref = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [threshold]);

    return [ref, isInView] as NativeInViewResult;
  }
};

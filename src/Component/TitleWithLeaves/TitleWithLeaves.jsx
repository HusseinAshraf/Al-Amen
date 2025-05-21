import { useEffect, useRef, useState } from "react";
import { Suspense, lazy } from "react";

const LazyTitleWithLeaves = lazy(() => import("./TitleWithLeaves"));

export default function LazyLoadedTitle({ title }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <Suspense fallback={<div>Loading title...</div>}>
          <LazyTitleWithLeaves title={title} />
        </Suspense>
      )}
    </div>
  );
}

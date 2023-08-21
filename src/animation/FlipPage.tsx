import anime from 'animejs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteTransitionProps } from '../interface/Interfaces';

export const RouteTransition: React.FC<RouteTransitionProps> = ({
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    const animation = anime.timeline({
      duration: 1000,
      easing: 'easeInOutSine',
    });

    animation
      .add({
        targets: '.route-transition',
        rotateY: '+=180',
      })
      .add({
        targets: '.route-transition',
        rotateY: '+=180',
      });
  }, [location]);

  return <div className="route-transition">{children}</div>;
};

import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

const slideRight = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      left: 0,
      height: '100vh',
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '-100%'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
];

const slideLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      left: 0,
      height: '100vh',
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
];

export const slideInAnimation = 
  trigger('routeAnimations', [

    transition('addjourney => livetracker', slideRight),
    transition('livetracker => overview', slideRight),
    transition('addjourney => overview', slideRight),
    transition('overview => livetracker', slideLeft),
    transition('livetracker => addjourney', slideLeft),
    transition('overview => addjourney', slideLeft),
    
]);
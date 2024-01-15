import React, {JSX, KeyboardEvent, useState} from 'react';
import {RatingProps} from '@/components/Rating/ratingProps';
import s from './rating.module.css';
import classNames from 'classnames';
import {Star} from '@/components';

export const Rating = ({className, rating, setRating, isEditable = true, ...rest}: RatingProps): JSX.Element => {
  const [hoverRating, setHoverRating] = useState(rating);
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    if (isEditable) {
      const onKeyDown = (e: KeyboardEvent<SVGElement>) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          setRating(i);
          setHoverRating(i);
        }
      };
      arr.push(<Star className={`${s.star} ${i <= hoverRating ? s.field : s.noField}`} onClick={() => setRating(i)}
                     onMouseEnter={() => setHoverRating(i)} onMouseLeave={() => setHoverRating(rating)}
                     onKeyDown={onKeyDown}
                     tabIndex={0}/>);
    } else {
      arr.push(<Star className={`${s.star} ${1 <= rating ? s.field : s.noField}`}/>);

    }

  }

  return <div {...rest} className={classNames(className)}>
    {arr}
  </div>;
};



import React from 'react';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

import './NewArticle.scss';

type Props = {
  article: News,
  search: string,
};

export const NewsArticle = (props: Props) => {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
  } = props.article;

  const word = props.search;

  function highlight(text: string, words: string) {
    let newStr = text;

    if (newStr.includes(words)) {
      newStr = newStr.replace(words, `<span style="background-color:yellow;">${words}</span>`);
    }

    return newStr;
  }

  return (
    <>
      <Card sx={{ maxWidth: 300, height: 420, position: 'relative' }}>
        <CardMedia
          component="img"
          height="130"
          sx={{
            objectPosition: 'center',
          }}
          image={urlToImage}
        />
        <CardContent>
          <Typography variant="body2" align="left">{dayjs(`${publishedAt}`).format('MMMM D, YYYY')}</Typography>
          <Typography
            variant="h6"
            sx={{
              margin: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              lineHeight: '20px',
            }}
            dangerouslySetInnerHTML={{ __html: highlight(title, word) }}
          />
          <Typography variant="body2" align="left">{`${description?.slice(0, 100)} ...`}</Typography>
        </CardContent>
        <CardActions sx={{ position: 'absolute', top: '89%', left: 0 }}>
          <Link to={`/articlePage/${title}`} className="link-btn">
           Read more &#8594;
          </Link>
        </CardActions>
      </Card>

    </>
  );
};

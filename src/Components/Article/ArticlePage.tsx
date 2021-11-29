import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import './ArticlePage.scss';
import { getByTitle } from '../../api/api';

export const ArticlePage = () => {
  const [article, setArticle] = useState<News>();
  const match = useParams();

  useEffect(() => {
    if (match.title) {
      getByTitle(match.title)
        .then(response => setArticle(response));
    }
  }, [setArticle]);

  return (
    <Container maxWidth="xl">
      {article ? (
        <>
          <Box className="box">
            <img src={article.urlToImage} alt="news" className="article-img" />
          </Box>
          <Paper elevation={3} id="paper" sx={{ position: 'relative', top: '180px', padding: '20px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {article.title}
            </Typography>
            <Typography variant="body2" align="right" sx={{ margin: '15px' }}>
              Author -
              {' '}
              {article.author}
            </Typography>
            <Typography variant="body1">
              {article.content}
            </Typography>
          </Paper>
          <Box sx={{ position: 'relative', top: '180px', padding: '20px' }}>
            <Link to="/" className="link-btn">&#8592; Back to homepage</Link>
          </Box>
        </>
      ) : (
        <Box sx={{ margin: '20px auto' }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

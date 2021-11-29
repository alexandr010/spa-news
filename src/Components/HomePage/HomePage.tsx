import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';

import { NewsArticle } from '../NewsArticle/NewsArticle';
import { getNews } from '../../api/api';

export const HomePage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getNews(search)
      .then(res => setNews(res.articles));
  }, [setNews, search]);

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ margin: '20px', maxWidth: '50%' }}>
          <FormControl fullWidth>
            <Typography variant="h5" align="left" sx={{ margin: '10px' }}>Filter by keywords:</Typography>
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              size="small"
              value={search}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <Grid container spacing={2} sx={{ paddingBottom: '10px' }}>
          {!news ? (
            <Box sx={{ margin: '20px auto', maxWidth: '100%' }}>
              <CircularProgress />
            </Box>
          ) : (
            news.map((article) => (
              <Grid item xs={3} key={article.title}>
                <NewsArticle article={article} search={search} />
              </Grid>
            )))}
        </Grid>
      </Container>
    </>
  );
};

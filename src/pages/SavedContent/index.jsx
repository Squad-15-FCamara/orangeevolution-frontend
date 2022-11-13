import { useState, useEffect } from 'react';

export function SavedContent() {
  const [filtered, setFiltered] = useState([]);
  const [favThemes, setFavThemes] = useState([]);

  useEffect( async () => {
    statisticsService.getFavoritesCoursesByUser(4);
    let favs = statisticsService.getFavoritesCoursesByUser(4).idTheme;
    setFavThemes(favs)
}, [])

}
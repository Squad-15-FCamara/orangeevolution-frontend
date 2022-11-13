import { useState, useEffect } from 'react';

export function SavedContent() {
  const [filtered, setFiltered] = useState([]);
  const [favThemes, setFavThemes] = useState([]);

  useEffect(async () => {
    statisticsService.getFavoritesCoursesByUser(4);
    let favs = statisticsService.getFavoritesCoursesByUser(4).idTheme;
    setFavThemes(favs)
  }, [])

  const fetchCourses = async (title) => {
    const response = await statisticsService.getFavoritesCoursesByUser(4);
    if (title === "Tudo") {
      return setFiltered(response.data);
    }
    const filteredContent = response.data.filter(item => item.idTheme.toLowerCase().includes(title.toLowerCase()));
    setFiltered(filteredContent);
  }

}
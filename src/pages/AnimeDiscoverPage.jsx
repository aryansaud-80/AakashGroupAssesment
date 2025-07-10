import { useState, useEffect } from 'react';
import AnimeCard from '../components/Anime/AnimeCard';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const AnimeDiscoverPage = () => {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [sortOption, setSortOption] = useState('default');
  const navigate = useNavigate();

  const fetchAnimes = async (page = 1, append = false) => {
    try {
      if (page === 1) setLoading(true);
      else setLoadingMore(true);

      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${page}&limit=20`
      );

      if (append) {
        setAnimes((prev) => [...prev, ...data.data]);
      } else {
        setAnimes(data.data);
      }

      setHasNextPage(data.pagination.has_next_page);
      setCurrentPage(data.pagination.current_page);
    } catch (err) {
      console.error('Error fetching anime:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  useEffect(() => {
    let filtered = [...animes];

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'score') {
      filtered.sort((a, b) => b.score - a.score);
    } else if (sortOption === 'popularity') {
      filtered.sort((a, b) => a.popularity - b.popularity);
    }

    setFilteredAnimes(filtered);
  }, [animes, searchTerm, sortOption]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLoadMore = () => {
    if (hasNextPage && !loadingMore) {
      fetchAnimes(currentPage + 1, true);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      <div className='container mx-auto px-2 sm:px-4 py-8'>
        <button
          className='flex items-center gap-2 bg-white px-4 py-2 rounded-md text-gray-700 font-bold '
          onClick={() => navigate('/')}
        >
          <BsArrowLeft />
          Back to Home
        </button>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-slate-800 mb-2'>
            Anime Discovery
          </h1>
          <p className='text-slate-600'>Discover your next favorite anime</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
          <div className='relative w-full sm:w-80'>
            <BiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
            <input
              type='text'
              placeholder='Search anime...'
              value={searchTerm}
              onChange={handleSearch}
              className='w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm'
            />
          </div>

          <div className='flex gap-6 items-center'>
            <h1 className='text-gray-700 text-xl font-bold'>Sort: </h1>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className='px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='default'> Default</option>
              <option value='score'> Highest Rated</option>
              <option value='popularity'> Most Popular</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className='h-64 bg-slate-200 rounded-xl animate-pulse'
              />
            ))}
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              {filteredAnimes.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))}
            </div>

            {filteredAnimes.length === 0 && searchTerm && (
              <div className='text-center py-12'>
                <p className='text-slate-500 text-lg'>
                  No anime found matching "{searchTerm}"
                </p>
              </div>
            )}

            {!searchTerm && hasNextPage && (
              <div className='text-center'>
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className='px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
                >
                  {loadingMore ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AnimeDiscoverPage;

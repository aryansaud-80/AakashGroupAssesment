import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { BsArrowLeft } from 'react-icons/bs';
import { BiPlay, BiStar } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import axios from 'axios';

const AnimeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [animeRes, charRes] = await Promise.all([
          axios.get(`https://api.jikan.moe/v4/anime/${id}`),
          axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`),
        ]);
        setAnime(animeRes.data.data);
        setCharacters(charRes.data.data.slice(0, 8));
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className='min-h-screen bg-slate-50 px-4 py-12 animate-pulse'>
        <div className='h-8 w-40 bg-slate-200 rounded mb-8' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className='bg-white p-4 rounded-xl shadow space-y-3'>
              <div className='h-40 bg-slate-200 rounded' />
              <div className='h-4 w-3/4 bg-slate-200 rounded' />
              <div className='h-3 w-1/2 bg-slate-200 rounded' />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-slate-100 text-center'>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Anime not found</h2>
          <button
            onClick={() => navigate('/anime')}
            className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            <BsArrowLeft className='w-4 h-4' />
            Back to Discovery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-50 px-4 py-8'>
      <button
        onClick={() => navigate('/anime')}
        className='inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded shadow text-slate-700 hover:text-blue-600'
      >
        <BsArrowLeft className='w-4 h-4' />
        Back to Discovery
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Left: Image + Trailer */}
        <div>
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className='rounded-xl shadow'
          />
          {anime.trailer?.youtube_id && (
            <a
              href={`https://www.youtube.com/watch?v=${anime.trailer.youtube_id}`}
              target='_blank'
              rel='noopener noreferrer'
              className='block mt-4 bg-red-600 text-white py-2 rounded text-center hover:bg-red-700'
            >
              <BiPlay className='inline mr-1' />
              Watch Trailer
            </a>
          )}
        </div>

        {/* Right: Details */}
        <div className='lg:col-span-2 space-y-6'>
          <div>
            <h1 className='text-4xl font-bold'>{anime.title}</h1>
            {anime.title_english && anime.title_english !== anime.title && (
              <p className='text-lg text-slate-600'>{anime.title_english}</p>
            )}
          </div>

          <div className='flex flex-wrap gap-4'>
            {anime.score && (
              <div className='flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded'>
                <BiStar className='w-5 h-5' />
                <span className='font-bold'>{anime.score}</span>
                <span className='text-sm'>
                  ({anime.scored_by?.toLocaleString()} users)
                </span>
              </div>
            )}
            {anime.rank && (
              <div className='bg-purple-100 text-purple-800 px-3 py-1 rounded'>
                Rank #{anime.rank}
              </div>
            )}
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { label: 'Type', value: anime.type },
              { label: 'Episodes', value: anime.episodes || 'Unknown' },
              { label: 'Duration', value: anime.duration || 'Unknown' },
              { label: 'Status', value: anime.status },
            ].map((item, idx) => (
              <div
                key={idx}
                className='bg-white p-4 rounded shadow text-center'
              >
                <p className='text-sm text-slate-500'>{item.label}</p>
                <p className='font-semibold'>{item.value}</p>
              </div>
            ))}
          </div>

          <div className='bg-white p-4 rounded shadow'>
            <h2 className='text-xl font-bold mb-2'>Synopsis</h2>
            <p className='text-slate-700'>
              {anime.synopsis || 'No synopsis available.'}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {anime.genres?.length > 0 && (
              <div className='bg-white p-4 rounded shadow'>
                <h3 className='font-bold mb-2'>Genres</h3>
                <div className='flex flex-wrap gap-2'>
                  {anime.genres.map((genre) => (
                    <span
                      key={genre.name}
                      className='px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm'
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className='bg-white p-4 rounded shadow'>
              <h3 className='font-bold mb-2'>Production</h3>
              <p>
                <span className='text-sm text-slate-500'>Studios:</span>{' '}
                {anime.studios?.map((s) => s.name).join(', ') || 'Unknown'}
              </p>
              <p>
                <span className='text-sm text-slate-500'>Aired:</span>{' '}
                {anime.aired?.string || 'Unknown'}
              </p>
              <p>
                <span className='text-sm text-slate-500'>Source:</span>{' '}
                {anime.source || 'Unknown'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {characters.length > 0 && (
        <div className='mt-12 bg-white p-6 rounded shadow'>
          <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
            <HiUsers className='w-6 h-6' />
            Main Characters
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4'>
            {characters.map((char, index) => (
              <div key={index} className='text-center'>
                <img
                  src={char.character.images.jpg.image_url}
                  alt={char.character.name}
                  className='w-full h-32 object-cover rounded mb-1'
                />
                <p className='font-medium text-sm'>{char.character.name}</p>
                <p className='text-xs text-slate-500'>{char.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetailPage;

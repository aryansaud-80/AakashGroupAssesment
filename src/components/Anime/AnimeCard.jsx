import { BiStar } from 'react-icons/bi';
import { Link } from 'react-router';

export default function AnimeCard({ anime }) {
  const truncateText = (text, maxLines = 3) => {
    if (!text) return 'No description available.';
    const words = text.split(' ');
    return words.length > maxLines * 15
      ? words.slice(0, maxLines * 15).join(' ') + '...'
      : text;
  };

  return (
    <Link to={`/anime/${anime.mal_id}`} className='block'>
      <div className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group'>
        <div className='relative overflow-hidden'>
          <img
            src={anime.images.jpg.large_image_url || '/placeholder.svg'}
            alt={anime.title}
            className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
          />
          {anime.score && (
            <div className='absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center gap-1'>
              <BiStar className='w-3 h-3 fill-yellow-400 text-yellow-400' />
              <span className='text-sm font-medium'>{anime.score}</span>
            </div>
          )}
        </div>

        <div className='p-4'>
          <h3 className='font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors'>
            {anime.title}
          </h3>

          <div className='flex items-center gap-3 mb-3'>
            <span className='px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg'>
              {anime.type || 'Unknown'}
            </span>
            {anime.episodes && (
              <span className='text-slate-500 text-sm'>
                {anime.episodes} episodes
              </span>
            )}
          </div>

          <p className='text-slate-600 text-sm leading-relaxed line-clamp-3'>
            {truncateText(anime.synopsis)}
          </p>
        </div>
      </div>
    </Link>
  );
}

import React from 'react';
import { IoFilter } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";




// Define types for the card data
interface CardData {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  year: number;
}

// Define the props for the Card component
interface CardProps {
  name: string;
  imageUrl: string;
  rating: number;
  year: number;
}

const cardData: CardData[] = [
  {
    id: 1,
    name: 'Spirited Away',
    imageUrl: '/image.jpg', // replace with actual image URL
    rating: 4.8,
    year: 2001,
  },
  {
    id: 2,
    name: 'Your Name',
    imageUrl: '/pokemon8.jpg', // replace with actual image URL
    rating: 4.7,
    year: 2016,
  },
  {
    id: 3,
    name: 'Howl\'s Moving Castle',
    imageUrl: '/pokemon2.jpg', // replace with actual image URL
    rating: 4.5,
    year: 2004,
  },
  {
    id: 4,
    name: 'My Neighbor Totoro',
    imageUrl: '/pokemon1.jpg', // replace with actual image URL
    rating: 4.6,
    year: 1988,
  },
  {
    id: 5,
    name: 'Princess Mononoke',
    imageUrl: '/pokemon4.jpg',
    rating: 4.9,
    year: 1997,
  },
  {
    id: 6,
    name: 'The Wind Rises',
    imageUrl: '/pokemon5.jpg',
    rating: 4.3,
    year: 2013,
  },
  {
    id: 7,
    name: 'Ponyo',
    imageUrl: '/pokemon6.jpg',
    rating: 2.2,
    year: 2008,
  },
  {
    id: 8,
    name: 'Castle in the Sky',
    imageUrl: '/pokemon9.jpg',
    rating: 4.4,
    year: 1986,
  },
];

const Card: React.FC<CardProps> = ({ imageUrl, name, rating, year }) => {
  return (
    <div >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-1">
        <img src={imageUrl} alt="Card Image"  className="w-full h-36 sm:h-36 md:h-40 object-cover rounded-lg" />

        </div>
      <div className="px-1 py-1">
        <h3 className="text-xxs ">{name}</h3>
        <div className="flex items-center my-0 space-x-1">
          <div className="text-yellow-400 flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-xxxs ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'}`}
              >
                {index < Math.floor(rating) ? <FaStar /> : <FaRegStar className="text-white" />}
              </span>
            ))}
          </div>
          <div className="text-white text-xxs">{rating}</div>
        </div>
        <div className="border-b border-gray-300 my-1 w-1/4 xs:w-1/2 md:w-1/2 xxs:w-1/3" style={{borderWidth: '0.5px'}}></div>
        <div className="text-xxs text-white">{year}</div>
      </div>
    </div>
    
  );
};

const CardList: React.FC = () => {
  return (
    <div className=" text-white py-0">
      <div className='flex justify-between px-4 py-2'>
        <div><span className="text-xl sm:text-2xl font">Trending in Animation</span></div>
        <div className="flex justify-evenly w-20 rounded-2xl items-center bg-black shadow-sm">
          <IoFilter className="text-white text-sm" />
          <div className="h-4 border-l border-gray-400 mx-0"></div> {/* Grey line separator */}
          <FiFilter className="text-white text-sm" />
        </div>
      </div>

      {/* Card List Section */}
      <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 px-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            name={card.name}
            rating={card.rating}
            year={card.year}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;

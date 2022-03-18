import React, {useEffect, useState} from 'react';
//  import PropTypes from 'prop-types';
import MediaRow from './MediaRow';

const MediaTable = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const response = await fetch('test.json');
      const json = await response.json();

      setMediaArray(json);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);

  console.log(mediaArray);
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {};

export default MediaTable;

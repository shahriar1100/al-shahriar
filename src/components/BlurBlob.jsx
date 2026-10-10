// components/BlurBlob.jsx
import PropTypes from 'prop-types';

const BlurBlob = ({ position = {}, size = {} }) => {
  const { top = '30%', left = '50%' } = position;
  const { width = '300px', height = '300px' } = size;

  return (
    <div
      className="absolute pointer-events-none max-w-full overflow-hidden -z-0"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-600/30 rounded-full blur-3xl animate-blob"
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;

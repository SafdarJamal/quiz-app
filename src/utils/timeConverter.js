const timeConverter = milliseconds => {
  if ( milliseconds === null || milliseconds === undefined || typeof milliseconds !== 'number' ) {
    return null;
  }
  const hours = `0${Math.floor(milliseconds / 3600000)}`.slice(-2);
  const minutes = `0${Math.floor((milliseconds / 60000) % 60)}`.slice(-2);
  const seconds = `0${Math.floor((milliseconds / 1000) % 60) % 60}`.slice(-2);

  return {
    hours,
    minutes,
    seconds
  };
};

export default timeConverter;

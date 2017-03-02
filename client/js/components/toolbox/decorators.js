const buildUnitdecorator = unit => data => `${data} ${unit}`;

const percentDecorator = buildUnitdecorator('%');

const buildDecorators = (units) => {
  const presureDecorator = buildUnitdecorator(units.pressure);
  const speedDecorator = buildUnitdecorator(units.speed);
  const temperatureDecorator = buildUnitdecorator(`°${units.temperature}`);
  const distanceDecorator = buildUnitdecorator(units.distance);
  return {
    presureDecorator, speedDecorator, temperatureDecorator, distanceDecorator
  };
};

export {
  percentDecorator,
  buildDecorators
};

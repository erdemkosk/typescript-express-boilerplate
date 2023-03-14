import * as winston from 'winston';

const logger = winston.createLogger();

logger.add(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
    winston.format.splat(),
  ),
}));

export default logger;

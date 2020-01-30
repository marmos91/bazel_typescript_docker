import Greeter from 'bazel_typescript_docker/services/greeter/lib/greeter';
import Logger from 'bazel_typescript_docker/libraries/logger';
import path from 'path';
import fs from 'fs';

const logger = new Logger();
const greeter = new Greeter();

const greeting = greeter.greet('Typescript');

logger.info(greeting);

fs.writeFile(path.resolve(process.cwd(), 'test.txt'), greeting, (error) =>
{
    if(error)
        console.error(error);

    logger.info('File saved');
});
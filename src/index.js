import path from 'path';
import {readFileSync} from 'node:fs'



const gendiff = (filepath1, filepath2) =>{
	const getFileContent1 = readFileSync(path.resolve(process.cwd(), filepath1));
	const getFileContent2 = readFileSync(path.resolve(process.cwd(), filepath2));
	return [getFileContent1, getFileContent2]
}

export {gendiff}
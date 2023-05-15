/// <reference types="node" />
import { execFile } from "child_process";
declare const execFileAsync: typeof execFile.__promisify__;
export default execFileAsync;
